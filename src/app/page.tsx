'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Earth from './components/earth/earth'
import Universe from './components/universe/Universe'

export default function Home() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Universe>
          <Earth />
        </Universe>
      </Suspense>
    </Canvas>
  )
}
