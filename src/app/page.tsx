'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useLayoutEffect, useState } from 'react'
import Earth from './components/earth/earth'
import Universe from './components/universe/universe'
import Loading from './components/loading/loading'

export default function Home() {
  const DESKTOP_MIN_WIDTH = 1280
  const LOADING_TIME = 6000

  const [isMobile, setIsMobile] = useState<boolean>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, LOADING_TIME)
  }, [])

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < DESKTOP_MIN_WIDTH ? true : false)
  }, [])

  return (
    <div className="h-screen bg-gray-950">
      {isLoading && <Loading />}
      <Canvas
        style={isLoading ? { display: 'none' } : { display: 'flex' }}
      >
        <Suspense>
          <Universe isMobile={isMobile!}>
            <Earth isMobile={isMobile!} />
          </Universe>
        </Suspense>
      </Canvas>
    </div>
  )
}
