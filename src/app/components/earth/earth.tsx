import { MobileContext } from '@/app/contexts/MobileContext'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useContext, useRef } from 'react'
import { DoubleSide, Mesh } from 'three'

export default function Earth() {
  const [dayMap, cloudsMap, normalMap, specularMap] = useTexture([
    '/images/textures/8k_earth_daymap.jpg',
    '/images/textures/8k_earth_clouds.jpg',
    '/images/textures/8k_earth_normal_map.jpg',
    '/images/textures/8k_earth_specular_map.jpg',
  ])

  const { isMobile } = useContext(MobileContext)

  const earthSize = isMobile ? 1.5 : 2.5

  const earthRef = useRef<Mesh>(null)
  const cloudsRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    earthRef.current!.rotation.y = elapsedTime / 10
    cloudsRef.current!.rotation.y = elapsedTime / 10
  })

  return (
    <>
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[earthSize + 0.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[earthSize, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={true}
          zoomSpeed={0.6}
          enablePan={true}
          panSpeed={0.5}
          enableRotate={true}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  )
}
