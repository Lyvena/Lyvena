'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import BlogSection from '@/components/BlogSection'
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
      <Services />
      <About />
      <Portfolio />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
  )
}
