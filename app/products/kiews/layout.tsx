import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kiews - No-Code Blockchain Integration',
  description: 'Connect NEAR Protocol to no-code platforms like Webflow, Zapier, and Make. Wallet authentication, smart contract calls, and token transfers without writing code.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
