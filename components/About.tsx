'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const coreValues = [
  {
    icon: '🤖',
    title: 'Ethical AI',
    description: 'Prioritizing responsible and transparent AI development that respects human values and dignity'
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Protecting user data and digital rights with industry-leading security practices'
  },
  {
    icon: '🌱',
    title: 'Sustainability',
    description: 'Building technology that benefits the planet and promotes environmental stewardship'
  },
  {
    icon: '🤝',
    title: 'Community Impact',
    description: 'Empowering communities through accessible technology and meaningful social programs'
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Pushing boundaries while maintaining ethical standards and user-centric design'
  },
  {
    icon: '👁️',
    title: 'Transparency',
    description: 'Open communication and accountable practices in everything we do'
  },
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

        {/* Core Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-primary">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card p-6 h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      {value.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {value.title}
                    </h4>

                    {/* Description */}
                    <p className="text-neutral-dark/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
