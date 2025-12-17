"use client"

import { useRef, useMemo, Suspense, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, Float, MeshDistortMaterial, Sphere, Torus, Box } from "@react-three/drei"
import * as THREE from "three"

// Rotating Industrial Gear Component
function IndustrialGear({ position, rotationSpeed = 1, size = 1 }: { position: [number, number, number]; rotationSpeed?: number; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01 * rotationSpeed
    }
  })

  const gearGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    const outerRadius = 0.5 * size
    const innerRadius = 0.3 * size
    const teeth = 12
    const toothDepth = 0.1 * size

    for (let i = 0; i < teeth * 2; i++) {
      const angle = (i / (teeth * 2)) * Math.PI * 2
      const radius = i % 2 === 0 ? outerRadius : outerRadius - toothDepth
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius

      if (i === 0) {
        shape.moveTo(x, y)
      } else {
        shape.lineTo(x, y)
      }
    }
    shape.closePath()

    // Inner circle
    const innerShape = new THREE.Shape()
    for (let i = 0; i < 32; i++) {
      const angle = (i / 32) * Math.PI * 2
      const x = Math.cos(angle) * innerRadius
      const y = Math.sin(angle) * innerRadius
      if (i === 0) {
        innerShape.moveTo(x, y)
      } else {
        innerShape.lineTo(x, y)
      }
    }
    innerShape.closePath()
    shape.holes.push(innerShape)

    return new THREE.ExtrudeGeometry(shape, { depth: 0.2 * size, bevelEnabled: false })
  }, [size])

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} geometry={gearGeometry} position={position}>
        <meshStandardMaterial
          color="#f7941d"
          metalness={0.8}
          roughness={0.2}
          emissive="#f7941d"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

// Rotating Pipe/Tube Component
function IndustrialPipe({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <group position={position} rotation={rotation}>
      <Torus args={[0.3, 0.05, 16, 32]}>
        <meshStandardMaterial color="#4a5568" metalness={0.7} roughness={0.3} />
      </Torus>
      <Torus args={[0.3, 0.05, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#4a5568" metalness={0.7} roughness={0.3} />
      </Torus>
      <Torus args={[0.3, 0.05, 16, 32]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#4a5568" metalness={0.7} roughness={0.3} />
      </Torus>
    </group>
  )
}

// Floating Particles
function Particles({ count = 100 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const light = useRef<THREE.PointLight>(null)

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const x = Math.sin((i / count) * Math.PI * 2) * factor
      const y = Math.cos((i / count) * Math.PI * 2) * factor
      const z = (Math.random() - 0.5) * 20

      temp.push({ time, factor, speed, x, y, z })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      particles.forEach((particle, i) => {
        let { factor, speed, x, y, z } = particle
        const t = particle.time + state.clock.elapsedTime * speed

        mesh.current!.setMatrixAt(i, new THREE.Matrix4().compose(
          new THREE.Vector3(
            x + Math.cos((t / 10) + factor) + (Math.sin(t * 1) * 0.5),
            y + Math.sin((t / 10) + factor) + (Math.cos(t * 2) * 0.5),
            z + Math.cos((t / 10) + factor) + (Math.sin(t * 3) * 0.5)
          ),
          new THREE.Quaternion(),
          new THREE.Vector3(0.1, 0.1, 0.1)
        ))
      })
      mesh.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <>
      <pointLight ref={light} distance={40} intensity={2} color="#f7941d" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.05, 0]} />
        <meshStandardMaterial color="#f7941d" emissive="#f7941d" emissiveIntensity={0.5} />
      </instancedMesh>
    </>
  )
}

// Central Orb with Distortion and Mouse Interaction
function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      
      // Pulse effect
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1
      meshRef.current.scale.setScalar(pulse)
    }
    
    if (lightRef.current) {
      lightRef.current.intensity = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.5
    }
  })

  return (
    <group>
      <pointLight ref={lightRef} position={[0, 0, 0]} intensity={1.5} color="#f7941d" distance={10} />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#f7941d"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            emissive="#f7941d"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>
    </group>
  )
}

// Rotating Box Frames (Industrial Structure)
function IndustrialFrame({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <Box args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial color="#2d3748" metalness={0.6} roughness={0.4} wireframe />
      </Box>
      <Box args={[0.6, 0.6, 0.6]}>
        <meshStandardMaterial color="#f7941d" metalness={0.8} roughness={0.2} opacity={0.3} transparent />
      </Box>
    </group>
  )
}

// Loading fallback
function SceneLoader() {
  return null
}

// Camera Controller with Mouse Interaction
function CameraController() {
  const { camera } = useThree()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useFrame(() => {
    const { x, y } = mouseRef.current
    camera.position.x += (x * 0.5 - camera.position.x) * 0.05
    camera.position.y += (y * 0.5 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })

  return null
}

// Main 3D Scene Component
export function Hero3DScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Suspense fallback={<SceneLoader />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="w-full h-full"
          dpr={[1, 1.5]}
        >
          {/* Camera Controller */}
          <CameraController />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#f7941d" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4a5568" />
          <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} />

          {/* Central Orb */}
          <CentralOrb />

          {/* Industrial Gears */}
          <IndustrialGear position={[-3, 2, -2]} rotationSpeed={1} size={0.8} />
          <IndustrialGear position={[3, -2, -2]} rotationSpeed={-1.2} size={0.6} />
          <IndustrialGear position={[-2, -3, -1]} rotationSpeed={0.8} size={0.7} />
          <IndustrialGear position={[2, 3, -1]} rotationSpeed={-0.9} size={0.9} />

          {/* Industrial Pipes */}
          <IndustrialPipe position={[-4, 0, -3]} rotation={[0, Math.PI / 4, 0]} />
          <IndustrialPipe position={[4, 0, -3]} rotation={[0, -Math.PI / 4, 0]} />
          <IndustrialPipe position={[0, -4, -3]} rotation={[Math.PI / 4, 0, 0]} />
          <IndustrialPipe position={[0, 4, -3]} rotation={[-Math.PI / 4, 0, 0]} />

          {/* Industrial Frames */}
          <IndustrialFrame position={[-5, 2, -4]} rotation={[0, Math.PI / 6, 0]} />
          <IndustrialFrame position={[5, -2, -4]} rotation={[0, -Math.PI / 6, 0]} />

          {/* Particles */}
          <Particles count={60} />

          {/* Environment */}
          <Environment preset="night" />
        </Canvas>
      </Suspense>
    </div>
  )
}

