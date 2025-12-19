"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth follower logic
  // Damping: 30, Stiffness: 200 -> Snappy but smooth, no wobble/elasticity
  const springConfig = { damping: 30, stiffness: 200, mass: 0.8 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if hovering over clickable elements
      const isClickable =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'

      setIsHovering(isClickable)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", checkHover)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", checkHover)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [mouseX, mouseY, isVisible])

  // Hide on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null
  }

  return (
    <>
      {/* Main Dot - The precise pointer */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Trailing Ring - The smooth follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full border border-primary/50"
          animate={{
            height: isHovering ? 50 : 20,
            width: isHovering ? 50 : 20,
            backgroundColor: isHovering ? "rgba(var(--primary), 0.1)" : "transparent",
            borderColor: isHovering ? "rgba(var(--primary), 0.8)" : "rgba(var(--primary), 0.5)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>
    </>
  )
}
