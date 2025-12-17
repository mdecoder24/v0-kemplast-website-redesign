"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Eye, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  name: string
  category: string
  image: string
  index: number
}

export function ProductCard({ name, category, image, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden"
    >
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-primary/90">
            <Eye className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center text-background transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75 hover:bg-foreground/90">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">High quality industrial grade product</p>
        <Link href="/contact">
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Request Quote
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
