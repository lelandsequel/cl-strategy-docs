import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JourdanLabs | Applied AI for Real Work',
  description: 'Independent applied AI lab focused on designing, testing, and deploying production-ready AI systems for complex business workflows.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-serif">{children}</body>
    </html>
  )
}
