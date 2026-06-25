import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mojoflow - AI-Native Full-Stack Framework for Mojo',
  description: 'A production-grade, modular full-stack framework for the Mojo programming language. Built-in LLM client, agent execution, task orchestration, async HTTP server, and declarative UI DSL.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
