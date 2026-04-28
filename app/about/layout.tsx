import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Lyvena - Our Team & Mission',
  description: 'Meet the Lyvena team combining human leadership with AI-powered employees to deliver intelligent software products and client solutions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
