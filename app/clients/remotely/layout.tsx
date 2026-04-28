import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remotely - LatAm Tech Talent',
  description: 'Access senior software developers from Latin America with 5+ years of experience. Transparent compensation, guaranteed PTO, and rapid redeployment.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
