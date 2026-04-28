import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intelekt - AI-Native MVP Builder',
  description: 'Build production-ready MVPs faster with AI-powered code generation, built-in CMS, and virtual CEO & PM assistants.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
