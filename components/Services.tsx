'use client'

import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaPaintBrush } from 'react-icons/fa'

const services = [
  {
    icon: FaBrain,
    title: 'AI-Powered Automation',
    description: 'Intelligent systems that work for you',
    details: 'Save 40% of your team\'s time while improving accuracy to 99%. We build AI that predicts patient needs, automates school administration, and optimizes supply chains.',
    features: ['Patient needs prediction', 'School admin automation', 'Supply chain optimization'],
    gradient: 'from-primary via-primary to-primary-dark',
  },
  {
    icon: FaCode,
    title: 'Ethical Web Platforms',
    description: 'Digital spaces built on values',
    details: 'Trust, accessibility, and security from day one. We create platforms that engage users 3x more than industry average.',
    features: ['Community platforms', 'Government portals', 'Nonprofit tools'],
    gradient: 'from-accent via-accent to-accent-dark',
  },
  {
    icon: FaPaintBrush,
    title: 'Strategic AI Consulting',
    description: 'Roadmaps that align tech with mission',
    details: 'Get a clear path forward in weeks, not months. From AI readiness to ethical framework design.',
    features: ['AI readiness assessments', 'Ethical frameworks', 'Technology roadmaps'],
    gradient: 'from-secondary via-secondary to-secondary-dark',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-neutral-charcoal to-neutral-charcoal relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            How We Help
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            End-to-end support from strategy to deployment—designed for nonprofits, schools, and mission-driven organizations
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-500 hover:bg-white/10 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <service.icon className="text-3xl text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 mb-4">{service.description}</p>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {service.details}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary shine"
            >
              Start a Conversation
            </button>
            <a href="/case-study" className="btn-secondary">
              See Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
