import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lay Chrome Extension',
  description: 'Earn money when you lay on your bed',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
