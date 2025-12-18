"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Info, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComingSoonModal } from "@/components/coming-soon-modal"

interface ProductCardProps {
  name: string
  category: string
  image: string
  index: number
}

export function ProductCard({ name, category, image, index }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        <div className="relative aspect-square bg-secondary overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
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

          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={() => setShowDetails(true)}
            >
              <Info className="w-4 h-4" />
              Get Full Details
            </Button>

            <Link
              href={`/contact?subject=Inquiry about ${encodeURIComponent(name)}`}
              className="w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <ComingSoonModal
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        title={name}
        description="Detailed technical specifications and data sheets for this product will be available soon. Please request a quote for more information."
      />
    </>
  )
}
