import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lumera AI — Adaptive JAMB Preparation',
  description: 'Intelligent, adaptive exam preparation for JAMB. Identify gaps, build mastery, and perform with confidence.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
