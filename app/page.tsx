import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Clients from '@/components/Clients'
import About from '@/components/About'
import StoriesSection from '@/components/StoriesSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Clients />
      <Portfolio />
      <About />
      <StoriesSection />
      <Contact />
      <Footer />
    </main>
  )
}
