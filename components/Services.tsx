'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaBrain, FaCode, FaSitemap } from 'react-icons/fa'

const services = [
  {
    icon: FaBrain,
    title: 'AI Workflows & Internal Tools',
    description: 'Automation and copilots for repetitive operational work, designed around the existing process instead of fighting it.',
    bullets: ['Workflow mapping and scoping','Internal dashboards and copilots','Human review and escalation design'],
    gradient: 'from-emerald-500 to-teal-600',
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    bulletColor: 'bg-emerald-500',
    number: '01',
  },
  {
    icon: FaCode,
    title: 'AI Product Engineering',
    description: 'Customer-facing AI features, product surfaces, and supporting infrastructure that feel polished, useful, and trustworthy.',
    bullets: ['Web apps and product surfaces','Retrieval, orchestration, and evaluation','Launch-ready UX and instrumentation'],
    gradient: 'from-violet-500 to-indigo-600',
    iconColor: 'text-violet-500',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    bulletColor: 'bg-violet-500',
    number: '02',
  },
  {
    icon: FaSitemap,
    title: 'Responsible Delivery & Rollout',
    description: 'We help teams define what the model can do, what must stay human-led, and how to scale safely after the pilot.',
    bullets: ['AI readiness audits','Policy-to-product implementation','Metrics, ownership, and rollout planning'],
    gradient: 'from-orange-500 to-amber-600',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    bulletColor: 'bg-orange-500',
    number: '03',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-neutral-cream">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">What We Do</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-neutral-charcoal mb-5 max-w-3xl leading-tight">
            From AI <span className="gradient-text-static">opportunity</span> to shipped system
          </h2>
          <p className="text-xl text-neutral-charcoal/55 max-w-2xl leading-relaxed">
            Lyvena is strongest when strategy, product design, engineering, and AI operations need to move together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div key={service.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-3xl p-8 shadow-sm border border-neutral-gray/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-3xl`} />
              <div className="absolute top-5 right-6 text-5xl font-display font-black text-neutral-gray/20 select-none leading-none">{service.number}</div>
              <div className={`mb-7 w-14 h-14 rounded-2xl ${service.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`text-2xl ${service.iconColor}`} />
              </div>
              <h3 className="mb-3 text-xl font-display font-bold text-neutral-charcoal leading-snug">{service.title}</h3>
              <p className="mb-6 text-neutral-charcoal/60 leading-relaxed text-[0.95rem]">{service.description}</p>
              <ul className="space-y-3">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-neutral-charcoal/65">
                    <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${service.bulletColor}`} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-neutral-charcoal p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 dot-grid-white opacity-30" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/12 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/12 rounded-full blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-snug">
                A better first step than &quot;let&apos;s build something with AI&quot;
              </h3>
              <p className="text-white/65 text-lg leading-relaxed">
                Start with a scoped opportunity review. We identify the best use case, operating constraints, and the fastest credible path to production.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link href="/#contact" className="btn-primary text-center">Book a Strategy Call</Link>
              <Link href="/case-study" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full text-center hover:border-accent/60 hover:text-accent transition-all duration-300">Read Case Study</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
