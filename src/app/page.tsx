'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Earth from './components/earth/earth'
import Universe from './components/universe/universe'

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
