import Link from "next/link"
import { supabaseAdmin } from "@/lib/supabase-admin"
import { ArrowLeft } from "lucide-react"

export const dynamic = "force-dynamic"

type Quote = {
  id: string
  created_at: string
  name: string
  email: string
  phone: string | null
  company: string | null
  subject: string | null
  product: string[] | null
  message: string | null
}

export default async function QuotesPage() {
  const { data, error } = await supabaseAdmin
    .from("quotes")
    .select("*")
    .order("created_at", { ascending: false })

  const quotes: Quote[] = data ?? []

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/admin" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold mb-2">Quote Requests</h1>
        <p className="text-muted-foreground mb-8">{quotes.length} total submissions</p>

        {error && (
          <div className="border border-red-500/50 bg-red-500/10 rounded-xl p-4 mb-6 text-red-400 text-sm">
            Failed to load: {error.message}
          </div>
        )}

        {quotes.length === 0 && !error ? (
          <div className="text-center py-20 text-muted-foreground">No quote requests yet.</div>
        ) : (
          <div className="space-y-4">
            {quotes.map((q) => (
              <div key={q.id} className="border rounded-2xl p-6 bg-card hover:border-primary/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-foreground text-lg">{q.name}</p>
                    <a href={`mailto:${q.email}`} className="text-primary text-sm hover:underline">{q.email}</a>
                    {q.phone && <p className="text-muted-foreground text-sm">{q.phone}</p>}
                    {q.company && <p className="text-muted-foreground text-sm">{q.company}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {new Date(q.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                    </p>
                    {q.subject && (
                      <span className="inline-block mt-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                        {q.subject}
                      </span>
                    )}
                  </div>
                </div>

                {q.product && q.product.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {q.product.map((p) => (
                      <span key={p} className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded-md">
                        {p}
                      </span>
                    ))}
                  </div>
                )}

                {q.message && (
                  <p className="text-sm text-muted-foreground bg-secondary/50 rounded-lg p-3 whitespace-pre-wrap">
                    {q.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
