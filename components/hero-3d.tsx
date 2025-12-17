"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, animate } from "framer-motion"
import { ArrowRight, BookOpen, ChevronDown, Award, Users, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Hero3DScene } from "@/components/hero-3d-scene"

function AnimatedStat({ value, label, icon: Icon }: { value: number; label: string; icon: any }) {
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
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-card border border-border rounded-2xl px-6 py-6 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all group"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <div className="text-3xl sm:text-4xl font-bold text-primary">{display}+</div>
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground font-medium">{label}</div>
    </motion.div>
  )
}

export function Hero3D() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Hero3DScene />
      </div>

      {/* Gradient overlay to blend 3D scene with content */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 z-[1]" />
      
      {/* Animated background elements for depth */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        {/* Primary color accent circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-10 w-80 h-80 bg-primary rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block p-4 bg-card border border-border rounded-2xl shadow-lg mb-6">
              <Image
                src="/images/kemplast-20logo.png"
                alt="Kemplast Process Solutions"
                width={240}
                height={60}
                className="w-48 sm:w-60 object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-primary/30 rounded-full mb-6 shadow-sm"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Trusted Partner Since 1986
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-foreground">Engineering </span>
            <span className="text-primary">Excellence</span>
            <br />
            <span className="text-foreground">in Process </span>
            <span className="text-primary">Solutions</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Empowering process industries with innovative instrumentation, packing, insulation and valve solutions.
            Your trusted partner for over three decades.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 h-14 text-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 transition-all hover:-translate-y-1"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-full px-10 h-14 text-lg font-semibold border-2 border-border hover:border-primary hover:bg-primary/10 transition-all hover:-translate-y-1 bg-card text-foreground"
            >
              <BookOpen className="w-5 h-5" />
              View Catalog
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
          >
            <AnimatedStat value={38} label="Years of Excellence" icon={Award} />
            <AnimatedStat value={500} label="Satisfied Clients" icon={Users} />
            <AnimatedStat value={7} label="Industries Served" icon={Building2} />
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
