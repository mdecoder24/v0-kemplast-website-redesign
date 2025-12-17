"use client"

import { motion } from "framer-motion"
import { Package, Settings, Gauge, Wrench } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

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
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">Our Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mt-4 tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <TiltCard key={service.title} className="h-full">
              <div
                className="group h-full p-8 bg-foreground/5 backdrop-blur-md rounded-2xl border border-foreground/10 hover:border-primary/50 transition-all duration-500 shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20 group-hover:border-primary">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">{service.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
