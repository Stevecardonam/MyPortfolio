import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Steven Cardona Portafolio',
  description: 'A portfolio showcasing my work and skills.',
  generator: 'Next.js',
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
