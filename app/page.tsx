'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Clients from '@/components/Clients'
import About from '@/components/About'
import StoriesSection from '@/components/StoriesSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="relative">
      <CursorGlow />
      <Hero />
      <StoriesSection />
      <Services />
      <Clients />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
