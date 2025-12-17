"use client"

import { Play } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

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
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Watch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Kemplast Process Solutions – Process & Instrumentation Excellence
          </h2>
        </motion.div>

        {/* Video Container */}
        {/* Video Container with Glow */}
        <div className="relative max-w-5xl mx-auto group">
          {/* Animated Glow Background */}
          <motion.div
            className="absolute -inset-1 rounded-3xl opacity-40 blur-xl bg-gradient-to-r from-orange-400 via-amber-400 to-red-500 dark:from-primary dark:via-blue-500 dark:to-purple-600"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Actual Card/Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black"
          >
            {!isPlaying ? (
              <div className="relative w-full h-full">
                <img
                  src="/industrial-manufacturing-plant-machinery-process-e.jpg"
                  alt="Process Engineering"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="relative">
                    {/* Ripple effect for button */}
                    <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="relative group/btn w-20 h-20 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_-5px_hsl(var(--primary))]"
                    >
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Kemplast Process Solutions – Process Engineering"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-10 text-center text-muted-foreground text-lg leading-relaxed"
        >
          Kemplast Process Solutions has been at the forefront of providing exceptional products and services to
          process industries.
          From instrumentation to insulation, packing to valves – we are your complete solution partner.
        </motion.p>
      </div>
    </section>
  )
}
