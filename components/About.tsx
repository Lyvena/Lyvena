'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const milestones = [
  { year: '2020', event: 'Founded in Roatán, Honduras', description: 'Started with a vision for ethical AI' },
  { year: '2021', event: 'First AI Ethics Framework', description: 'Developed proprietary ethical guidelines' },
  { year: '2022', event: 'Global Partnerships', description: 'Collaborated with international organizations' },
  { year: '2023', event: 'AI for Good Initiative', description: 'Launched community impact programs' },
  { year: '2024', event: 'Innovation Hub', description: 'Expanded to cutting-edge AI research' },
]

export default function About() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate location pin
    const interval = setInterval(() => {
      if (mapRef.current) {
        const pin = mapRef.current.querySelector('.location-pin')
        if (pin) {
          pin.classList.add('animate-pulse-slow')
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-neutral-white via-primary/5 to-neutral-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
            About Lyvena
          </h2>
          <p className="text-xl text-neutral-dark/70 max-w-3xl mx-auto leading-relaxed">
            We harness AI to create equitable digital futures
          </p>
        </motion.div>

        {/* Mission statement */}
        <motion.div
          className="mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card holographic p-8 md:p-12">
            <p className="text-lg md:text-xl text-neutral-dark leading-relaxed text-center">
              Based in the beautiful island of <span className="font-bold text-primary">Roatán, Honduras</span>, 
              Lyvena is pioneering the intersection of artificial intelligence and social good. 
              We believe technology should empower communities, protect privacy, and promote 
              sustainability. Our team of experts combines technical excellence with ethical 
              principles to deliver solutions that make a positive impact on the world.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-primary">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary-light hidden md:block" />

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex-1 text-center md:text-right">
                    {index % 2 === 0 && (
                      <div className="card p-6 inline-block max-w-md">
                        <div className="text-3xl font-display font-bold text-accent mb-2">
                          {milestone.year}
                        </div>
                        <h4 className="text-xl font-bold text-primary mb-2">
                          {milestone.event}
                        </h4>
                        <p className="text-neutral-dark/70">{milestone.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    {index % 2 !== 0 && (
                      <div className="card p-6 inline-block max-w-md">
                        <div className="text-3xl font-display font-bold text-accent mb-2">
                          {milestone.year}
                        </div>
                        <h4 className="text-xl font-bold text-primary mb-2">
                          {milestone.event}
                        </h4>
                        <p className="text-neutral-dark/70">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Location map */}
        <motion.div
          ref={mapRef}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-center mb-8 text-primary">
            Where We Are
          </h3>
          <div className="card p-8 relative overflow-hidden">
            {/* Simplified world map with location */}
            <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-full opacity-20 absolute inset-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified world map outline */}
                <path
                  d="M100,200 Q200,150 300,200 T500,200 Q600,250 700,200"
                  stroke="#0A6C74"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="250" cy="220" r="3" fill="#0A6C74" />
                <circle cx="450" cy="180" r="3" fill="#0A6C74" />
                <circle cx="600" cy="210" r="3" fill="#0A6C74" />
              </svg>

              {/* Roatán location pin */}
              <div className="relative z-10 location-pin">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="flex flex-col items-center"
                >
                  <svg
                    className="w-12 h-12 text-accent drop-shadow-lg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div className="mt-2 bg-white px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm font-bold text-primary">Roatán, Honduras</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-neutral-dark/70 mb-2">
                <span className="font-semibold text-primary">Beta Building, Oficina 6</span>
              </p>
              <p className="text-neutral-dark/70">
                Próspera ZEDE, St. John's Bay, Roatán, Islas de Bahia 34101, Honduras
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
