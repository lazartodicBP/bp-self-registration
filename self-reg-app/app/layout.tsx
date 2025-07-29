"use client"
import '../styles/globals.css'
import { ReactNode } from 'react'
import { useConfig } from '../hooks/useConfig'

export default function RootLayout({ children }: { children: ReactNode }) {
  const config = useConfig()
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800">
        {/* TODO: apply theme from config */}
        {children}
      </body>
    </html>
  )
}
