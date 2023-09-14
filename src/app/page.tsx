'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useContext, useLayoutEffect } from 'react'
import Earth from './components/earth/earth'
import Universe from './components/universe/universe'
import Loading from './components/loading/loading'
import { MobileContext } from './contexts/MobileContext'

export default function Home() {
  const DESKTOP_MIN_WIDTH = 1280

  const { setIsMobile } = useContext(MobileContext)

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < DESKTOP_MIN_WIDTH ? true : false)
  }, [setIsMobile])

  return (
    <div className="h-screen bg-gray-950">
      <Suspense fallback={<Loading />}>
        <Canvas>
          <Universe>
            <Earth />
          </Universe>
        </Canvas>
      </Suspense>
    </div>
  )
}
