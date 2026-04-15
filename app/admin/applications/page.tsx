import Link from "next/link"
import { supabaseAdmin } from "@/lib/supabase-admin"
import { ArrowLeft } from "lucide-react"

export const dynamic = "force-dynamic"

type Application = {
  id: string
  created_at: string
  name: string
  email: string
  phone: string | null
  position: string | null
  message: string | null
  resume_file_name: string | null
}

export default async function ApplicationsPage() {
  const { data, error } = await supabaseAdmin
    .from("applications")
    .select("*")
    .order("created_at", { ascending: false })

  const applications: Application[] = data ?? []

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/admin" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold mb-2">Job Applications</h1>
        <p className="text-muted-foreground mb-8">{applications.length} total applications</p>

        {error && (
          <div className="border border-red-500/50 bg-red-500/10 rounded-xl p-4 mb-6 text-red-400 text-sm">
            Failed to load: {error.message}
          </div>
        )}

        {applications.length === 0 && !error ? (
          <div className="text-center py-20 text-muted-foreground">No applications yet.</div>
        ) : (
          <div className="space-y-4">
            {applications.map((a) => (
              <div key={a.id} className="border rounded-2xl p-6 bg-card hover:border-primary/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-foreground text-lg">{a.name}</p>
                    <a href={`mailto:${a.email}`} className="text-primary text-sm hover:underline">{a.email}</a>
                    {a.phone && <p className="text-muted-foreground text-sm">{a.phone}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      {new Date(a.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                    </p>
                    {a.position && (
                      <span className="inline-block mt-1 text-xs bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full font-medium">
                        {a.position}
                      </span>
                    )}
                  </div>
                </div>

                {a.resume_file_name && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-md font-medium">
                      Resume: {a.resume_file_name}
                    </span>
                    <span className="text-xs text-muted-foreground">(sent via email)</span>
                  </div>
                )}

                {a.message && (
                  <p className="text-sm text-muted-foreground bg-secondary/50 rounded-lg p-3 whitespace-pre-wrap">
                    {a.message}
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
