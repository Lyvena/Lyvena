import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SuperWorld - Virtual Real Estate Platform',
  description: 'Virtual real estate tied to real-world locations, NFT minting, augmented reality experiences, and community maps powered by the $SPWR token on Base chain.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
