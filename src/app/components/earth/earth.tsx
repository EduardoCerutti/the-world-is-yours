import { OrbitControls, useTexture } from '@react-three/drei'
import { DoubleSide } from 'three'

export default function Earth() {
  const [dayMap, cloudsMap, normalMap, specularMap] = useTexture([
    '/images/textures/8k_earth_daymap.jpg',
    '/images/textures/8k_earth_clouds.jpg',
    '/images/textures/8k_earth_normal_map.jpg',
    '/images/textures/8k_earth_specular_map.jpg',
  ])

  return (
    <>
      <mesh>
        <sphereGeometry args={[2.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.3}
          depthWrite={true}
          transparent={true}
          side={DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={dayMap} normalMap={normalMap} />
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
