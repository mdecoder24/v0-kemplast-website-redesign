"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Mail, Phone, User } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    position: "Founder",
    name: "Vikram",
    phone: "-",
    email: "-",
  },
  {
    id: 2,
    position: "M.D",
    name: "Guru. P",
    phone: "7674012423",
    email: "Sales@kemplast.in",
  },
  {
    id: 3,
    position: "Director",
    name: "Badri",
    phone: "-",
    email: "-",
  },
  {
    id: 4,
    position: "Manager",
    name: "Chaitanya Teja",
    phone: "9121003525",
    email: "chaitanya@kemplast.in",
  },
  {
    id: 5,
    position: "Sr. Sales Engineer",
    name: "Rangesh Kumar",
    phone: "7411754411",
    email: "blr@kemplast.in",
  },
  {
    id: 6,
    position: "Sr. Sales Engineer",
    name: "Arun Kumar",
    phone: "9121003532",
    email: "Arun@kemplast.in",
  },
  {
    id: 7,
    position: "Sr. Sales Engineer",
    name: "Lavanya",
    phone: "7674912103",
    email: "Hyd@kemplast.in",
  },
  {
    id: 8,
    position: "Sales Engineer",
    name: "Prajwal Deshpande",
    phone: "9121021325",
    email: "prajwal@kemplast.in",
  },
  {
    id: 9,
    position: "Associate Engineer",
    name: "Preetha",
    phone: "-",
    email: "blr@kemplast.in",
  },
  {
    id: 10,
    position: "Sales Engineer",
    name: "Raghavendra. H",
    phone: "8977754032",
    email: "ops@kemplast.in",
  },
  {
    id: 11,
    position: "Service Engineer",
    name: "Vijay Vemula",
    phone: "7674912100",
    email: "Vijay@kemplast.in",
  },
  {
    id: 12,
    position: "Operations",
    name: "Mahesh",
    phone: "897754030",
    email: "ops@kemplast.in",
  },
  {
    id: 13,
    position: "Sales Associate Engineer",
    name: "Sandeep",
    phone: "8977754033",
    email: "ops@kemplast.in",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xl font-bold tracking-widest uppercase shadow-[0_0_15px_-5px_hsl(var(--primary))] backdrop-blur-sm mb-4">
              OUR PEOPLE
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">Meet Our Team</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The dedicated professionals behind Kemplast&apos;s success, committed to delivering excellence in every
              project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-6 text-lg font-semibold text-foreground whitespace-nowrap">ID</th>
                    <th className="p-6 text-lg font-semibold text-foreground whitespace-nowrap">Position</th>
                    <th className="p-6 text-lg font-semibold text-foreground whitespace-nowrap">Name</th>
                    <th className="p-6 text-lg font-semibold text-foreground whitespace-nowrap">Phone No</th>
                    <th className="p-6 text-lg font-semibold text-foreground whitespace-nowrap">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, index) => (
                    <motion.tr
                      key={member.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="border-b border-border/50 hover:bg-muted/50 transition-colors group"
                    >
                      <td className="p-6 text-muted-foreground font-mono">{member.id}</td>
                      <td className="p-6 font-medium text-foreground">{member.position}</td>
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <User className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-foreground">{member.name}</span>
                        </div>
                      </td>
                      <td className="p-6 text-muted-foreground">
                        {member.phone !== "-" ? (
                          <a
                            href={`tel:${member.phone}`}
                            className="flex items-center gap-2 hover:text-primary transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                            {member.phone}
                          </a>
                        ) : (
                          <span className="opacity-50">-</span>
                        )}
                      </td>
                      <td className="p-6 text-muted-foreground">
                        {member.email !== "-" ? (
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-2 hover:text-primary transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                            {member.email}
                          </a>
                        ) : (
                          <span className="opacity-50">-</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <div className="bg-card border border-border rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Team</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                We&apos;re always looking for talented individuals who share our passion for excellence. Explore career
                opportunities at Kemplast.
              </p>
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
                View Open Positions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
