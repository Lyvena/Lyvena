'use client'

import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaPaintBrush } from 'react-icons/fa'

const services = [
  {
    icon: FaBrain,
    title: 'AI-Powered Automation',
    frontDesc: 'Intelligent systems that work for you',
    backDesc: 'Save 40% of your team\'s time while improving accuracy to 99%. We build AI that predicts patient needs, automates school administration, and optimizes supply chains—freeing humans for what matters most.',
    whyMatters: 'Reduce manual work, eliminate errors, scale your impact',
    examples: ['Patient needs prediction', 'School admin automation', 'Supply chain optimization'],
    color: 'from-primary to-primary-dark',
  },
  {
    icon: FaCode,
    title: 'Ethical Web Platforms',
    frontDesc: 'Digital spaces built on values',
    backDesc: 'Trust, accessibility, and security from day one. We create community platforms, government portals, and nonprofit tools that are truly accessible and engage users 3x more than industry average.',
    whyMatters: 'Build trust, ensure accessibility, protect user rights',
    examples: ['Community platforms', 'Government portals', 'Nonprofit management tools'],
    color: 'from-accent to-primary',
  },
  {
    icon: FaPaintBrush,
    title: 'Strategic AI Consulting',
    frontDesc: 'Roadmaps that align tech with mission',
    backDesc: 'Get a clear path forward in weeks, not months. From AI readiness assessments to ethical framework design, we help you make confident decisions and avoid costly mistakes.',
    whyMatters: 'Avoid mistakes, maximize impact, move with confidence',
    examples: ['AI readiness assessments', 'Ethical framework design', 'Technology roadmapping'],
    color: 'from-primary-light to-accent',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-neutral-cream relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
            How We Help
          </h2>
          <p className="text-xl text-neutral-slate/70 max-w-2xl mx-auto">
            End-to-end support from strategy to deployment—designed for nonprofits, schools, and mission-driven organizations
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flip-card h-96"
            >
              <div className="flip-card-inner">
                {/* Front of card */}
                <div
                  className={`flip-card-front bg-gradient-to-br ${service.color} p-8 flex flex-col items-center justify-center text-white shadow-xl`}
                >
                  <service.icon className="text-7xl mb-6 animate-float" />
                  <h3 className="text-3xl font-display font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-lg opacity-90">{service.frontDesc}</p>
                  <div className="mt-6 text-sm opacity-75 flex items-center">
                    <span>Hover to learn more</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>

                {/* Back of card */}
                <div className="flip-card-back bg-white p-8 flex flex-col justify-center shadow-xl border-2 border-primary/20">
                  <div className="mb-6">
                    <service.icon className="text-5xl text-primary mb-4" />
                    <h3 className="text-2xl font-display font-bold text-primary mb-4">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-neutral-charcoal leading-relaxed">
                    {service.backDesc}
                  </p>
                  <div className="mt-6 pt-6 border-t border-neutral-gray">
                    <button
                      className="text-primary font-semibold hover:text-accent transition-colors flex items-center"
                      onClick={() => {
                        const contactSection = document.getElementById('contact')
                        contactSection?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Get Started
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center card gentle-elevation p-8 md:p-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-lg text-neutral-slate/80 mb-6">
            Turn your mission into measurable impact. Let's build AI that works for you—deployed in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
              aria-label="Start your transformation"
            >
              Start a Conversation
            </button>
            <a
              href="/case-study"
              className="btn-secondary"
              aria-label="Read our case studies"
            >
              See Our Work in Action
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
