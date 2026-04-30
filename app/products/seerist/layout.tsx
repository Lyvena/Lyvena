import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seerist - Revenue Operating System',
  description: 'Capture opportunities from 13+ platforms, qualify leads with AI, and generate proposals in under 60 seconds. Your unified revenue pipeline from signal to close.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
