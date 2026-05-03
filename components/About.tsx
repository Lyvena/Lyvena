'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const principles = [
  { icon: '🎯', title: 'Start from the workflow', description: 'We scope AI around the real operating bottleneck first, so the system is grounded in work that already matters.' },
  { icon: '🛡️', title: 'Design for trust', description: 'Interaction design, fallback states, review paths, and authorship clarity are treated as product requirements, not polish.' },
  { icon: '📊', title: 'Measure before scale', description: 'Every pilot proves something: cycle time, quality, usability, or operator confidence. Otherwise it is still a demo.' },
  { icon: '🚀', title: 'Ship with ownership', description: 'A production system needs clear owners, rules, and maintenance habits. We design rollout so your team can sustain it.' },
]

const steps = [
  { number: '01', label: 'Audit', description: 'Map the workflow and define success criteria.' },
  { number: '02', label: 'Design', description: 'Create the AI experience and human review path.' },
  { number: '03', label: 'Pilot', description: 'Ship a measured pilot with clear instrumentation.' },
  { number: '04', label: 'Scale', description: 'Roll out only what your team can own and maintain.' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-neutral-cream">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">About Lyvena</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-neutral-charcoal leading-tight">
              We deliver AI with <span className="gradient-text-static">integrity</span>
            </h2>
            <p className="text-lg text-neutral-charcoal/60 leading-relaxed">
              We combine applied AI systems, strong product design, careful delivery, and a bias toward measurable outcomes. That clarity is what makes teams trust us with their most important AI projects.
            </p>
          </div>
        </motion.div>

        <div className="mb-20">
          <motion.h3 className="mb-10 text-2xl md:text-3xl font-display font-bold text-neutral-charcoal"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            How we think
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-7 border border-neutral-gray/50 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">{p.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-neutral-charcoal mb-2">{p.title}</h4>
                    <p className="text-neutral-charcoal/60 leading-relaxed text-sm">{p.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-neutral-charcoal overflow-hidden">
          <div className="absolute inset-0 dot-grid-white opacity-25" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">Delivery Structure</p>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-snug">A delivery structure you can trust</h3>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  Discovery, prototype, instrumentation, and rollout are connected end-to-end. When the sales story matches the operating model, you know exactly what you&apos;re getting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/about" className="btn-secondary text-center">Learn More About Us</Link>
                  <Link href="/stories" className="btn-primary text-center">Read Our Notes</Link>
                </div>
              </div>
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <motion.div key={step.number} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors duration-300">
                        <span className="text-accent text-xs font-bold">{step.number}</span>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px flex-1 min-h-[28px] bg-gradient-to-b from-accent/30 to-transparent mt-1 mb-1" />
                      )}
                    </div>
                    <div className="pb-4 pt-1.5">
                      <span className="text-white font-bold text-sm">{step.label}</span>
                      <span className="text-white/45 text-sm"> — {step.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
