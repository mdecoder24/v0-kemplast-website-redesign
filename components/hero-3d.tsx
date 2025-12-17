"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, Text3D, Center } from "@react-three/drei"
import { motion } from "framer-motion"
import type * as THREE from "three"
import { ArrowRight, BookOpen, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import * as THREE_CORE from "three"

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return mousePosition
}

function FloatingParticle({
  initialPosition,
  size,
  color,
  delay,
  mousePosition,
}: {
  initialPosition: [number, number, number]
  size: number
  color: string
  delay: number
  mousePosition: { x: number; y: number }
}) {
  const ref = useRef<THREE.Mesh>(null)
  const targetPosition = useRef(new THREE_CORE.Vector3(...initialPosition))

  useFrame((state) => {
    if (ref.current) {
      // Calculate target based on mouse with offset
      targetPosition.current.x = initialPosition[0] + mousePosition.x * 2
      targetPosition.current.y = initialPosition[1] + mousePosition.y * 1.5

      // Smooth lerp towards target
      ref.current.position.lerp(targetPosition.current, 0.02 + delay * 0.01)

      // Gentle rotation
      ref.current.rotation.x += 0.005
      ref.current.rotation.y += 0.008
    }
  })

  return (
    <mesh ref={ref} position={initialPosition} scale={size}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  )
}

function FloatingRing({
  initialPosition,
  size,
  color,
  mousePosition,
  rotationSpeed,
}: {
  initialPosition: [number, number, number]
  size: number
  color: string
  mousePosition: { x: number; y: number }
  rotationSpeed: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  const targetPosition = useRef(new THREE_CORE.Vector3(...initialPosition))

  useFrame(() => {
    if (ref.current) {
      targetPosition.current.x = initialPosition[0] + mousePosition.x * 1.5
      targetPosition.current.y = initialPosition[1] + mousePosition.y * 1

      ref.current.position.lerp(targetPosition.current, 0.015)
      ref.current.rotation.z += rotationSpeed
      ref.current.rotation.x += rotationSpeed * 0.5
    }
  })

  return (
    <mesh ref={ref} position={initialPosition} scale={size}>
      <torusGeometry args={[1, 0.15, 16, 32]} />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} transparent opacity={0.8} />
    </mesh>
  )
}

function InteractiveGear({
  initialPosition,
  scale,
  speed,
  color,
  mousePosition,
}: {
  initialPosition: [number, number, number]
  scale: number
  speed: number
  color: string
  mousePosition: { x: number; y: number }
}) {
  const ref = useRef<THREE.Mesh>(null)
  const targetPosition = useRef(new THREE_CORE.Vector3(...initialPosition))

  useFrame(() => {
    if (ref.current) {
      targetPosition.current.x = initialPosition[0] + mousePosition.x * 3
      targetPosition.current.y = initialPosition[1] + mousePosition.y * 2

      ref.current.position.lerp(targetPosition.current, 0.025)
      ref.current.rotation.z += speed
    }
  })

  return (
    <mesh ref={ref} position={initialPosition} scale={scale}>
      <torusGeometry args={[1, 0.25, 8, 8]} />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
    </mesh>
  )
}

function FloatingSphere({
  initialPosition,
  size,
  color,
  mousePosition,
}: {
  initialPosition: [number, number, number]
  size: number
  color: string
  mousePosition: { x: number; y: number }
}) {
  const ref = useRef<THREE.Mesh>(null)
  const targetPosition = useRef(new THREE_CORE.Vector3(...initialPosition))

  useFrame((state) => {
    if (ref.current) {
      targetPosition.current.x = initialPosition[0] + mousePosition.x * 2.5
      targetPosition.current.y = initialPosition[1] + mousePosition.y * 1.8 + Math.sin(state.clock.elapsedTime) * 0.2

      ref.current.position.lerp(targetPosition.current, 0.02)
    }
  })

  return (
    <mesh ref={ref} position={initialPosition} scale={size}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} emissive={color} emissiveIntensity={0.15} />
    </mesh>
  )
}

function KemplastText() {
  const textRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <Center position={[0, 0, 0]}>
      <Text3D
        ref={textRef}
        font="/fonts/helvetiker_bold.typeface.json"
        size={1.2}
        height={0.3}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelSegments={5}
      >
        KEMPLAST
        <meshStandardMaterial
          color="#f7941d"
          metalness={0.8}
          roughness={0.2}
          emissive="#f7941d"
          emissiveIntensity={0.15}
        />
      </Text3D>
    </Center>
  )
}

function Scene({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#f7941d" />
      <pointLight position={[-10, -5, 5]} intensity={0.3} color="#ffffff" />
      <spotLight position={[0, 10, 5]} intensity={1.5} color="#ffffff" angle={0.5} penumbra={0.5} />

      {/* Main 3D Text */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <KemplastText />
      </Float>

      {/* Interactive gears that follow mouse */}
      <InteractiveGear
        initialPosition={[-6, 2.5, -4]}
        scale={0.9}
        speed={0.004}
        color="#f7941d"
        mousePosition={mousePosition}
      />
      <InteractiveGear
        initialPosition={[6, -2, -5]}
        scale={0.7}
        speed={-0.005}
        color="#4b5563"
        mousePosition={mousePosition}
      />
      <InteractiveGear
        initialPosition={[-5, -2.5, -3]}
        scale={0.5}
        speed={0.006}
        color="#6b7280"
        mousePosition={mousePosition}
      />
      <InteractiveGear
        initialPosition={[5, 3, -4]}
        scale={0.6}
        speed={-0.004}
        color="#f7941d"
        mousePosition={mousePosition}
      />

      {/* Floating particles */}
      <FloatingParticle
        initialPosition={[-4, 1, -2]}
        size={0.15}
        color="#f7941d"
        delay={1}
        mousePosition={mousePosition}
      />
      <FloatingParticle
        initialPosition={[4, -1, -3]}
        size={0.12}
        color="#f7941d"
        delay={2}
        mousePosition={mousePosition}
      />
      <FloatingParticle
        initialPosition={[-3, -2, -2]}
        size={0.1}
        color="#6b7280"
        delay={3}
        mousePosition={mousePosition}
      />
      <FloatingParticle
        initialPosition={[3, 2, -2]}
        size={0.13}
        color="#9ca3af"
        delay={1.5}
        mousePosition={mousePosition}
      />
      <FloatingParticle
        initialPosition={[0, 3, -3]}
        size={0.11}
        color="#f7941d"
        delay={2.5}
        mousePosition={mousePosition}
      />
      <FloatingParticle
        initialPosition={[-2, 3, -4]}
        size={0.14}
        color="#4b5563"
        delay={1.8}
        mousePosition={mousePosition}
      />
      <FloatingParticle
        initialPosition={[2, -3, -3]}
        size={0.1}
        color="#f7941d"
        delay={2.2}
        mousePosition={mousePosition}
      />

      {/* Floating rings */}
      <FloatingRing
        initialPosition={[-7, 0, -6]}
        size={0.4}
        color="#f7941d"
        mousePosition={mousePosition}
        rotationSpeed={0.008}
      />
      <FloatingRing
        initialPosition={[7, 1, -7]}
        size={0.35}
        color="#4b5563"
        mousePosition={mousePosition}
        rotationSpeed={-0.006}
      />
      <FloatingRing
        initialPosition={[0, -3, -5]}
        size={0.3}
        color="#6b7280"
        mousePosition={mousePosition}
        rotationSpeed={0.005}
      />

      {/* Floating spheres */}
      <FloatingSphere initialPosition={[-5, -1, -5]} size={0.25} color="#f7941d" mousePosition={mousePosition} />
      <FloatingSphere initialPosition={[5, 0, -6]} size={0.2} color="#9ca3af" mousePosition={mousePosition} />
      <FloatingSphere initialPosition={[0, 2.5, -4]} size={0.18} color="#4b5563" mousePosition={mousePosition} />

      <Environment preset="city" />
    </>
  )
}

export function Hero3D() {
  const mousePosition = useMousePosition()

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            left: `calc(20% + ${mousePosition.x * 50}px)`,
            top: `calc(30% + ${mousePosition.y * 30}px)`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-primary/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            right: `calc(15% + ${-mousePosition.x * 40}px)`,
            bottom: `calc(20% + ${-mousePosition.y * 40}px)`,
          }}
        />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 top-20">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Scene mousePosition={mousePosition} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto pt-24">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Since 1986</span>
          </motion.div>

          {/* Space for 3D text */}
          <div className="h-32 sm:h-40 lg:h-48" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold italic mb-4"
          >
            "Innovating Solutions, Delivering Trust"
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Your trusted partner for Instrumentation, Packing, Insulation & Valve Products in South India
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 h-14 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all hover:-translate-y-1 hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-full px-10 h-14 text-lg font-semibold border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all hover:-translate-y-1 hover:scale-105 bg-transparent text-foreground"
            >
              <BookOpen className="w-5 h-5" />
              View Catalog
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-8 sm:gap-16 mt-16 pt-8 border-t border-border/50"
          >
            {[
              { value: "38+", label: "Years" },
              { value: "500+", label: "Clients" },
              { value: "7+", label: "Industries" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
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
