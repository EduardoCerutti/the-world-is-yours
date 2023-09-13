'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import Earth from './components/earth/earth'
import Universe from './components/universe/universe'
import Loading from './components/loading/loading'

export default function Home() {
  const LOADING_TIME = 4000

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, LOADING_TIME)
  }, [])

  return (
    <div className="h-screen bg-gray-950">
      {isLoading ? (
        <Loading loadingTime={LOADING_TIME} />
      ) : (
        <Canvas>
          <Suspense>
            <Universe>
              <Earth />
            </Universe>
          </Suspense>
        </Canvas>
      )}
    </div>
  )
}
