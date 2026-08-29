import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Sculpture() {
  const groupRef = useRef()
  const innerRef = useRef()
  const ringRef = useRef()

  useFrame((state, delta) => {
    if (!groupRef.current) return

    const mouseX = state.pointer.x
    const mouseY = state.pointer.y

    const time = state.clock.elapsedTime

    const targetRotationY =
      mouseX * 0.35 + time * 0.12

    const targetRotationX =
      -mouseY * 0.2 +
      Math.sin(time * 0.35) * 0.08

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      1 - Math.pow(0.001, delta),
    )

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      1 - Math.pow(0.001, delta),
    )

    if (innerRef.current) {
      innerRef.current.rotation.z += delta * 0.18
      innerRef.current.scale.setScalar(
        1 + Math.sin(time * 1.4) * 0.025,
      )
    }

    if (ringRef.current) {
      ringRef.current.rotation.x =
        Math.sin(time * 0.45) * 0.25

      ringRef.current.rotation.z += delta * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      {/* =================================
          Main metallic body
          ================================= */}

      <mesh>
        <icosahedronGeometry args={[1.2, 3]} />

        <meshStandardMaterial
          color="#0b0b0b"
          metalness={0.95}
          roughness={0.16}
          emissive="#120000"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* =================================
          Inner glowing core
          ================================= */}

      <mesh
        ref={innerRef}
        scale={0.46}
      >
        <icosahedronGeometry args={[1.2, 2]} />

        <meshStandardMaterial
          color="#e50914"
          metalness={0.3}
          roughness={0.2}
          emissive="#e50914"
          emissiveIntensity={2.4}
        />
      </mesh>

      {/* =================================
          Fine outer wire structure
          ================================= */}

      <mesh scale={1.07}>
        <icosahedronGeometry args={[1.2, 2]} />

        <meshBasicMaterial
          color="#e50914"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* =================================
          Floating geometric ring
          ================================= */}

      <group
        ref={ringRef}
        rotation={[Math.PI / 2.7, 0, 0]}
      >
        <mesh>
          <torusGeometry
            args={[1.52, 0.012, 12, 128]}
          />

          <meshBasicMaterial
            color="#e50914"
            transparent
            opacity={0.7}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry
            args={[1.42, 0.006, 8, 128]}
          />

          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.2}
          />
        </mesh>
      </group>

      {/* =================================
          Small orbiting accent
          ================================= */}

      <mesh position={[0, 0, 1.65]}>
        <sphereGeometry args={[0.045, 16, 16]} />

        <meshBasicMaterial
          color="#e50914"
        />
      </mesh>
    </group>
  )
}

function HeroScene() {
  return (
    <div
      className="hero-scene"
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 40,
        }}
        dpr={[1, 2]}
      >
        {/* =================================
            Lighting
            ================================= */}

        <ambientLight intensity={0.25} />

        <pointLight
          position={[3, 2.5, 4]}
          intensity={20}
          color="#ffffff"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={10}
          color="#e50914"
        />

        <pointLight
          position={[0, 4, -2]}
          intensity={5}
          color="#ffffff"
        />

        {/* =================================
            Sculpture
            ================================= */}

        <Float
          speed={1.15}
          rotationIntensity={0.18}
          floatIntensity={0.4}
        >
          <Sculpture />
        </Float>

        {/* =================================
            Environment reflections
            ================================= */}

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

export default HeroScene