"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { motion } from "framer-motion"

const categories = [
  { id: "all", name: "All Products" },
  { id: "instrumentation", name: "Instrumentation" },
  { id: "packing", name: "Packing Products" },
  { id: "insulation", name: "Insulation Products" },
  { id: "valve", name: "Valve Products" },
]

const products = [
  // Instrumentation
  { name: "Pressure Gauge", category: "instrumentation", image: "/industrial-pressure-gauge-meter.jpg" },
  { name: "Level Indicator", category: "instrumentation", image: "/industrial-level-indicator-instrument.jpg" },
  { name: "Flow Meter", category: "instrumentation", image: "/industrial-flow-meter-device.jpg" },
  { name: "Temperature Sensor", category: "instrumentation", image: "/industrial-temperature-sensor-probe.jpg" },
  { name: "Weighing System", category: "instrumentation", image: "/industrial-weighing-scale-system.jpg" },
  { name: "Valve Positioner", category: "instrumentation", image: "/industrial-valve-positioner.jpg" },
  { name: "Instrument Manifold", category: "instrumentation", image: "/industrial-instrument-manifold.jpg" },

  // Packing Products
  { name: "Fibre Packing", category: "packing", image: "/industrial-fibre-packing-material.jpg" },
  { name: "Packing Sheets", category: "packing", image: "/placeholder.svg?height=400&width=400" },
  { name: "Gland Packing", category: "packing", image: "/placeholder.svg?height=400&width=400" },
  { name: "Flange Gaskets", category: "packing", image: "/placeholder.svg?height=400&width=400" },
  { name: "Ceramic Packing", category: "packing", image: "/placeholder.svg?height=400&width=400" },
  { name: "PTFE Components", category: "packing", image: "/placeholder.svg?height=400&width=400" },

  // Insulation Products
  { name: "Loose Glass Wool", category: "insulation", image: "/placeholder.svg?height=400&width=400" },
  { name: "Loose Mineral Wool", category: "insulation", image: "/placeholder.svg?height=400&width=400" },
  { name: "Ceramic Fiber Wool", category: "insulation", image: "/placeholder.svg?height=400&width=400" },
  { name: "Resin Bonded Mattress", category: "insulation", image: "/placeholder.svg?height=400&width=400" },
  { name: "Ceramic Fiber Boards", category: "insulation", image: "/placeholder.svg?height=400&width=400" },
  { name: "Ceramic Fiber Blanket", category: "insulation", image: "/placeholder.svg?height=400&width=400" },
  { name: "Acoustic Insulation Slab", category: "insulation", image: "/placeholder.svg?height=400&width=400" },
  { name: "Thermal Insulation Slab", category: "insulation", image: "/placeholder.svg?height=400&width=400" },

  // Valve Products
  { name: "Control Valve", category: "valve", image: "/placeholder.svg?height=400&width=400" },
  { name: "Relief Valve", category: "valve", image: "/placeholder.svg?height=400&width=400" },
  { name: "Rupture Disc", category: "valve", image: "/placeholder.svg?height=400&width=400" },
  { name: "Isolation Valve", category: "valve", image: "/placeholder.svg?height=400&width=400" },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wider text-sm">OUR PRODUCTS</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">Industrial Excellence</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of high-quality instrumentation, packing, insulation, and valve products.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.name}
                name={product.name}
                category={categories.find((c) => c.id === product.category)?.name || product.category}
                image={product.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />

      <Footer />
    </main>
  )
}
