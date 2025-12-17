"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth follower logic
  // Damping/stiffness adjusted for a floaty yet responsive feel
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  // Transformation values for the elasticity effect
  const rotate = useMotionValue(0)
  const scaleX = useMotionValue(1)
  const scaleY = useMotionValue(1)

  useEffect(() => {
    // Calculate rotation and stretch based on the lag between mouse and cursor
    const handleMotion = () => {
      const mx = mouseX.get()
      const my = mouseY.get()
      const cx = cursorX.get()
      const cy = cursorY.get()

      const dx = mx - cx
      const dy = my - cy

      const distance = Math.sqrt(dx * dx + dy * dy)

      // Only rotate if there is significant movement to avoid jitter at rest
      if (distance > 0.1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI)
        rotate.set(angle)
      }

      // Elastic stretch effect: elongated in direction of movement
      // We cap the stretch to avoid it looking too distorted
      const stretchFactor = Math.min(1.3, 1 + distance / 250)
      const squeezeFactor = Math.max(0.7, 1 - distance / 250)

      scaleX.set(stretchFactor)
      scaleY.set(squeezeFactor)
    }

    const unsubX = cursorX.on("change", handleMotion)
    const unsubY = cursorY.on("change", handleMotion)

    return () => {
      unsubX()
      unsubY()
    }
  }, [cursorX, cursorY, mouseX, mouseY, rotate, scaleX, scaleY])

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
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
      {/* Main Dot - Stays completely synced with mouse for precision */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Elastic Ring - Follows with physics and stretches */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          rotate: rotate,
          scaleX: scaleX,
          scaleY: scaleY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full border border-white"
          animate={{
            scale: isHovering ? 0.5 : 1, // Shrinks slightly on hover for focus, or could grow
            backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  )
}
