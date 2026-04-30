import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prospera Havens - AI-Powered Caribbean Real Estate',
  description: 'Discover, buy, sell, rent, and invest in Caribbean real estate in Prospera ZEDE with AI-powered insights, crypto-friendly payments, and fractional investment from $100.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
