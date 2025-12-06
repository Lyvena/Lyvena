'use client'

import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaPaintBrush } from 'react-icons/fa'
import { useTranslations } from '@/lib/i18n'

export default function Services() {
  const t = useTranslations()

  const services = [
    {
      icon: FaBrain,
      title: t.services.aiAutomation.title,
      description: t.services.aiAutomation.description,
      details: t.services.aiAutomation.details,
      features: t.services.aiAutomation.features,
      gradient: 'from-primary via-primary to-primary-dark',
    },
    {
      icon: FaCode,
      title: t.services.webDev.title,
      description: t.services.webDev.description,
      details: t.services.webDev.details,
      features: t.services.webDev.features,
      gradient: 'from-accent via-accent to-accent-dark',
    },
    {
      icon: FaPaintBrush,
      title: t.services.design.title,
      description: t.services.design.description,
      details: t.services.design.details,
      features: t.services.design.features,
      gradient: 'from-secondary via-secondary to-secondary-dark',
    },
  ]
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
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">{t.services.label}</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            {t.services.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.services.description}
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
              {t.services.ctaPrimary}
            </button>
            <a href="/case-study" className="btn-secondary">
              {t.services.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
