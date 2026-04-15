import Link from "next/link"
import { getSupabaseAdmin } from "@/lib/supabase-admin"
import { MessageSquare, Users } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const db = getSupabaseAdmin()
  const [{ count: quotesCount }, { count: appsCount }] = await Promise.all([
    db.from("quotes").select("*", { count: "exact", head: true }),
    db.from("applications").select("*", { count: "exact", head: true }),
  ])

  const cards = [
    {
      href: "/admin/quotes",
      icon: MessageSquare,
      label: "Quote Requests",
      count: quotesCount ?? 0,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      href: "/admin/applications",
      icon: Users,
      label: "Job Applications",
      count: appsCount ?? 0,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
  ]

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground mb-10">Kemplast website submissions</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map(({ href, icon: Icon, label, count, color, bg }) => (
            <Link
              key={href}
              href={href}
              className="block border rounded-2xl p-8 hover:border-primary/50 transition-colors bg-card"
            >
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <p className="text-4xl font-bold mb-1">{count}</p>
              <p className="text-muted-foreground font-medium">{label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
