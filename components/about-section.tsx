"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Building2, Handshake, Award } from "lucide-react"

const milestones = [
  {
    year: "1986",
    title: "The Beginning",
    description: "Established with SPITMAAN Industries to serve process industries in South India",
    icon: Building2,
  },
  {
    year: "2001",
    title: "Kempflon Engineering",
    description: "Partnership with Thermocare India for comprehensive insulation solutions",
    icon: Handshake,
  },
  {
    year: "2017",
    title: "SIEMENS Partnership",
    description: "Providing world-class process instrumentation products",
    icon: Award,
  },
]

const industries = ["Power", "Sugar", "Paper", "Pharma", "Cement", "F&B", "Chemical", "Process"]

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xl font-bold tracking-widest uppercase shadow-[0_0_15px_-5px_hsl(var(--primary))] backdrop-blur-sm mb-4">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4">Trusted Partner Since 1986</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Story */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Kemplast Inc was established in 1986 with the sole aim of serving process industries in South India.
              Through exceptional customer services and quality products, we have gained trust within the Process
              Industry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We strive to solve customer problems with innovative solutions, reduce lead-times by maintaining stock of
              critical items, and pass on cost savings achieved through efficiency improvements.
            </p>

            {/* Industries */}
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, index) => (
                <motion.span
                  key={industry}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-full text-sm text-foreground"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {industry}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <milestone.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-primary font-bold text-sm">{milestone.year}</span>
                  <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
