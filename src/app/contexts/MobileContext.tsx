'use client'

import { createContext, useState } from 'react'

export const MobileContext = createContext({
  isMobile: true,
  setIsMobile: (value: boolean) => {},
})

export const MobileProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isMobile, setIsMobile] = useState(true)

  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </MobileContext.Provider>
  )
}
