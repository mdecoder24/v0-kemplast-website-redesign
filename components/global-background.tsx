"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function GlobalBackground() {
    const ref = useRef<HTMLDivElement>(null)

    // Parallax effect for the background elements
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <div ref={ref} className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
            {/* Abstract Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[100px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 100, 0]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]"
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <Particle key={i} index={i} />
                ))}
            </div>
        </div>
    )
}

function Particle({ index }: { index: number }) {
    const [mounted, setMounted] = useState(false)
    const [randomValues, setRandomValues] = useState({ x: 0, y: 0, duration: 15, delay: 0 })

    useEffect(() => {
        setRandomValues({
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: 15 + Math.random() * 20,
            delay: Math.random() * 5
        })
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <motion.div
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
                left: `${randomValues.x}%`,
                top: `${randomValues.y}%`,
            }}
            animate={{
                y: [0, -100, 0],
                opacity: [0, 0.5, 0],
                scale: [0, 1.5, 0],
            }}
            transition={{
                duration: randomValues.duration,
                repeat: Infinity,
                delay: randomValues.delay,
                ease: "easeInOut",
            }}
        />
    )
}
