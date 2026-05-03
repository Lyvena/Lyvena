'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const proofItems = [
  {
    title: 'Kiews', type: 'Product', badge: 'Case Study',
    summary: 'A no-code platform that reduces the friction of integrating NEAR Protocol workflows — built for non-technical teams who need blockchain without the jargon.',
    highlights: ['Visual workflow builder','Template-driven blockchain actions','Case study with delivery lessons'],
    href: '/case-study', cta: 'Read case study',
    metric: { value: '10+', label: 'No-code platforms supported' },
    gradient: 'from-amber-500 to-orange-500', large: true,
  },
  {
    title: 'Intelekt', type: 'Product', badge: 'Live Product',
    summary: 'An AI-assisted web development platform that gives operators stronger leverage over the full build cycle — from concept to deployed product.',
    highlights: ['AI-powered code generation','Built-in CMS workflow','Virtual CEO & PM assistants'],
    href: 'https://intelekt.live/', cta: 'Visit product',
    metric: { value: 'AI', label: 'Native development' },
    gradient: 'from-violet-500 to-indigo-500', large: false,
  },
  {
    title: 'Our Delivery Model', type: 'Service', badge: 'Methodology',
    summary: 'Where we stand out is the combination of scoping, UX, engineering, and responsible rollout — connected end to end with clear ownership at every step.',
    highlights: ['Audit → pilot → instrumentation → rollout','Human review where it matters','Clear owners and measurable outcomes'],
    href: '/#contact', cta: 'Start a conversation',
    metric: { value: '4', label: 'Step delivery process' },
    gradient: 'from-emerald-500 to-teal-500', large: false,
  },
]

export default function Portfolio() {
  return (
    <section id="proof" className="section-padding relative overflow-hidden bg-neutral-cream">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Proof of Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-5 max-w-3xl leading-tight">Real products, real results</h2>
          <p className="text-xl text-neutral-charcoal/55 max-w-2xl leading-relaxed">
            We lead with specifics — shipped products, working systems, and delivery patterns you can evaluate.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {proofItems.map((item, index) => {
            const isExternal = item.href.startsWith('http')
            return (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative bg-white rounded-3xl p-8 border border-neutral-gray/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col ${index === 0 ? 'lg:col-span-2' : ''}`}>
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-3xl`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.gradient} text-white mb-3`}>{item.badge}</span>
                      <h3 className="text-3xl font-display font-bold text-neutral-charcoal">{item.title}</h3>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <div className={`text-3xl font-display font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>{item.metric.value}</div>
                      <div className="text-xs text-neutral-charcoal/40 font-medium max-w-[80px] leading-tight">{item.metric.label}</div>
                    </div>
                  </div>
                  <p className="text-neutral-charcoal/65 leading-relaxed mb-6">{item.summary}</p>
                  <ul className="space-y-2.5 mb-8">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-neutral-charcoal/65">
                        <span className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient}`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    {isExternal ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group-hover:gap-3 duration-300">
                        {item.cta} <FaArrowRight className="text-sm" />
                      </a>
                    ) : (
                      <Link href={item.href}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group-hover:gap-3 duration-300">
                        {item.cta} <FaArrowRight className="text-sm" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
