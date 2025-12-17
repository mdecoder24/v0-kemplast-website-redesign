"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, animate } from "framer-motion"
import { ArrowRight, BookOpen, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

function AnimatedStat({ value, label }: { value: number; label: string }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    })

    return () => controls.stop()
  }, [value])

  return (
    <div className="bg-card border border-border rounded-2xl px-6 py-5 shadow-sm backdrop-blur-sm/80">
      <div className="text-3xl sm:text-4xl font-bold text-primary">{display}+</div>
      <div className="text-xs sm:text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  )
}

export function Hero3D() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Starry background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#111827_0,_#020617_45%,_#000_100%)]" />

      {/* Breathing logo disk behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 0.95, opacity: 0.85 }}
          animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative w-[520px] h-[520px] sm:w-[580px] sm:h-[580px] rounded-full bg-primary/70 shadow-[0_0_200px_rgba(247,148,29,0.6)] backdrop-blur-2xl"
        >
          {/* Dark gear-like ring */}
          <div className="absolute inset-[-60px] rounded-full border-[40px] border-black/40 opacity-80 blur-[0.5px]" />

          {/* Centered logo */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-screen">
            <Image
              src="/images/kemplast-20logo.png"
              alt="Kemplast Process Solutions"
              width={260}
              height={80}
              className="w-56 sm:w-64 object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto pt-24">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/40 border border-primary/40 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Kemplast Process Solutions • Since 1986
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4"
          >
            <span className="text-white">Engineering </span>
            <span className="text-primary">Excellence</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Empowering process industries with innovative instrumentation, packing, insulation and valve solutions
            since 1986.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 h-14 text-lg font-semibold shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/60 transition-all hover:-translate-y-1 hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-full px-10 h-14 text-lg font-semibold border-2 border-primary/60 hover:border-primary hover:bg-primary/10 transition-all hover:-translate-y-1 hover:scale-105 bg-transparent text-foreground"
            >
              <BookOpen className="w-5 h-5" />
              View Catalog
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-4 sm:gap-6 mt-16 pt-8 border-t border-border/50"
          >
            <AnimatedStat value={38} label="Years" />
            <AnimatedStat value={500} label="Clients" />
            <AnimatedStat value={7} label="Industries" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="text-muted-foreground"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
