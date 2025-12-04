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
      className="section-padding bg-gradient-to-br from-neutral-cream via-primary/5 to-neutral-cream relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Mission statement */}
        <motion.div
          className="mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card gentle-elevation p-8 md:p-12">
            <p className="text-lg md:text-xl text-neutral-charcoal leading-relaxed text-center">
              Lyvena is pioneering AI that puts people first. We believe technology should empower
              communities, protect privacy, and promote sustainability—not just in theory, but in
              every line of code we write. Our team combines deep technical expertise with unwavering
              ethical principles to deliver solutions that create measurable, positive change in the world.
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
                <div className="card p-6 h-full warm-shadow hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden">
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
                    <p className="text-neutral-charcoal/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
            See Our Values in Action
          </h3>
          <p className="text-lg text-neutral-charcoal/80 mb-6 max-w-2xl mx-auto">
            Every project we take on reflects our commitment to ethical AI and human-centered design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/case-study"
              className="btn-primary"
              aria-label="Read our case studies"
            >
              Read Case Studies
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              aria-label="Work with us"
            >
              Work With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
