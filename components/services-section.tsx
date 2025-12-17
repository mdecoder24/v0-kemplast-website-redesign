"use client"

import { motion } from "framer-motion"
import { Package, Settings, Gauge, Wrench } from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Packing & Insulation",
    description: "World class products at economical prices.",
  },
  {
    icon: Settings,
    title: "Process Engineering",
    description: "Right equipment for client requirements.",
  },
  {
    icon: Gauge,
    title: "Calibration Services",
    description: "Accurate calibration with documentation.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "24X7 support to resolve problems.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">What We Do</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
