"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TeamCard } from "@/components/team-card"
import { motion } from "framer-motion"

const teamMembers = [
  { name: "Rajesh Kumar", role: "Founder & CEO", image: "/placeholder.svg?height=500&width=400" },
  { name: "Priya Sharma", role: "Managing Director", image: "/placeholder.svg?height=500&width=400" },
  { name: "Vikram Singh", role: "Technical Director", image: "/placeholder.svg?height=500&width=400" },
  { name: "Anitha Menon", role: "Operations Head", image: "/placeholder.svg?height=500&width=400" },
  { name: "Suresh Reddy", role: "Sales Director", image: "/placeholder.svg?height=500&width=400" },
  { name: "Kavitha Iyer", role: "Quality Manager", image: "/placeholder.svg?height=500&width=400" },
  { name: "Arun Nair", role: "Service Manager", image: "/placeholder.svg?height=500&width=400" },
  { name: "Deepa Krishnan", role: "Finance Head", image: "/placeholder.svg?height=500&width=400" },
  { name: "Mohan Das", role: "Procurement Head", image: "/placeholder.svg?height=500&width=400" },
  { name: "Lakshmi Venkat", role: "HR Manager", image: "/placeholder.svg?height=500&width=400" },
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} name={member.name} role={member.role} image={member.image} index={index} />
            ))}
          </div>

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
