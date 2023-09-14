'use client'

import { useProgress } from '@react-three/drei'

export default function Loading() {
  const { progress } = useProgress()

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6">
      <h3 className="text-white text-2xl w-96 text-center">
        We are loading all the assets to give you the best view of our
        world
      </h3>
      <div className="flex justify-center items-center">
        <div className="flex justify-center absolute w-96">
          <span>{`${progress}%`}</span>
        </div>
        <div className="flex bg-slate-600 rounded w-96 h-7">
          <div
            className="bg-cyan-500 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
