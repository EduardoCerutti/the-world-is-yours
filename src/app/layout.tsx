import './globals.css'
import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import { MobileProvider } from './contexts/MobileContext'

export const metadata: Metadata = {
  title: 'The world is yours',
  description: 'An app to test React Three Fiber',
}

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        <MobileProvider>{children}</MobileProvider>
      </body>
    </html>
  )
}
