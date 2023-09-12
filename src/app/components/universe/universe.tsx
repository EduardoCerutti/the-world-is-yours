import { Stars } from '@react-three/drei'
import React from 'react'

export default function Universe({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ambientLight intensity={2} />
      <pointLight color="#FFF" position={[3, 0, 3]} intensity={40} />
      <Stars
        radius={300}
        depth={60}
        factor={7}
        count={10000}
        fade={true}
        saturation={0}
      />
      {children}
    </>
  )
}
