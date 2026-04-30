import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Lyvena',
  description: 'Explore Lyvena products including Intelekt, Prospera Havens, Mojoflow, Seerist, and Kiews — AI-powered tools for building, automating, and growing.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
