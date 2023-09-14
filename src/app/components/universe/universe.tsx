import { MobileContext } from '@/app/contexts/MobileContext'
import { Stars } from '@react-three/drei'
import { useContext } from 'react'

export default function Universe({
  children,
}: {
  children: React.ReactNode
}) {
  const { isMobile } = useContext(MobileContext)

  const numberOfStars = isMobile ? 5000 : 10000

  return (
    <>
      <ambientLight intensity={2} />
      <pointLight color="#FFF" position={[3, 0, 3]} intensity={40} />
      <Stars
        radius={300}
        depth={60}
        factor={7}
        count={numberOfStars}
        fade={true}
        saturation={0}
      />
      {children}
    </>
  )
}
