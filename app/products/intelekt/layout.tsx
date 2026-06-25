import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intelekt - AI Agentic Vibe Coding Platform',
  description: 'Describe any app in natural language and Intelekt\'s multi-agent AI system automatically builds, deploys, and maintains self-improving agentic applications on InsForge.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
