"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Phone } from "lucide-react"

interface TeamCardProps {
  name: string
  role: string
  image: string
  index: number
}

export function TeamCard({ name, role, image, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="group relative"
      style={{ perspective: "1000px" }}
    >
      <div className="relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2 }}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div className="relative p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
