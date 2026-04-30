import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mojoflow - AI-Powered Workflow Automation',
  description: 'Create intelligent automation flows that adapt and optimize themselves. Visual drag-and-drop builder with AI decision nodes, smart triggers, and universal connectors.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
