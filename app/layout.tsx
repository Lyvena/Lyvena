import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lyvena | AI for Good - Ethical AI Development & Consulting',
  description: 'Transform your ideas into stunning digital experiences with cutting-edge technology. Based in Roatán, Honduras, we specialize in ethical AI development, consulting, web development, and digital design.',
  keywords: 'AI for Good, Ethical AI, AI Development, AI Consulting, Web Development, Digital Design, Roatán, Honduras',
  authors: [{ name: 'Lyvena' }],
  openGraph: {
    title: 'Lyvena | AI for Good',
    description: 'Ethical AI Development & Consulting',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0A6C74',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
