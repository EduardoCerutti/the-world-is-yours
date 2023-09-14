import './globals.css'
import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'

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
      <body className={orbitron.className}>{children}</body>
    </html>
  )
}
