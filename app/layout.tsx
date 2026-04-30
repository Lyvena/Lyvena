import type { Metadata, Viewport } from 'next'
import { DM_Sans, Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import ChatBubble from '@/components/ChatBubble'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lyvena.xyz'),
  title: {
    default: 'Lyvena | Applied AI Systems, Product Engineering, Responsible Delivery',
    template: '%s | Lyvena',
  },
  description:
    'Lyvena helps teams design, build, and ship applied AI systems, internal tools, and customer-facing products with clear delivery, strong UX, and responsible controls.',
  keywords: [
    'applied AI',
    'AI product engineering',
    'responsible AI',
    'AI automation',
    'AI consulting',
    'product design',
    'Lyvena',
  ],
  authors: [{ name: 'Lyvena' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lyvena | Applied AI Systems & Product Engineering',
    description:
      'Applied AI systems and product engineering for teams that need proof, clarity, and responsible delivery.',
    type: 'website',
    url: 'https://lyvena.xyz',
    siteName: 'Lyvena',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lyvena | Applied AI Systems & Product Engineering',
    description:
      'Applied AI systems and product engineering for teams that need proof, clarity, and responsible delivery.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF7F2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <head>
        <Script
          id="hubspot-loader"
          src="https://js-na2.hs-scripts.com/244179468.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-neutral-cream text-neutral-charcoal">
        <Navigation />
        {children}
        <ChatBubble />
      </body>
    </html>
  )
}
