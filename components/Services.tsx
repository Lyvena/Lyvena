import Link from 'next/link'
import { FaBrain, FaCode, FaSitemap } from 'react-icons/fa'

const services = [
  {
    icon: FaBrain,
    title: 'AI Workflows and Internal Tools',
    description:
      'Automation and copilots for repetitive operational work, designed around the existing process instead of fighting it.',
    bullets: ['Workflow mapping and scoping', 'Internal dashboards and copilots', 'Human review and escalation design'],
  },
  {
    icon: FaCode,
    title: 'AI Product Engineering',
    description:
      'Customer-facing AI features, product surfaces, and supporting infrastructure that feel polished, useful, and trustworthy.',
    bullets: ['Web apps and product surfaces', 'Retrieval, orchestration, and evaluation', 'Launch-ready UX and instrumentation'],
  },
  {
    icon: FaSitemap,
    title: 'Responsible Delivery and Rollout',
    description:
      'We help teams define what the model can do, what must stay human-led, and how to scale safely after the pilot.',
    bullets: ['AI readiness audits', 'Policy-to-product implementation', 'Metrics, ownership, and rollout planning'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-neutral-cream">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Services
          </p>
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
            From AI opportunity to shipped system
          </h2>
          <p className="text-xl text-neutral-charcoal/70 max-w-2xl mx-auto">
            Lyvena is strongest when strategy, product design, engineering, and AI operations need
            to move together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="card h-full border border-primary/10 bg-white/90 p-8 shadow-sm"
            >
              <service.icon className="mb-6 text-4xl text-primary" />
              <h3 className="mb-4 text-2xl font-display font-bold text-primary">
                {service.title}
              </h3>
              <p className="mb-6 text-neutral-charcoal/75 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 text-sm text-neutral-charcoal/75">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl rounded-3xl border border-primary/10 bg-white p-8 shadow-sm md:p-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
            A better first step than “let’s build something with AI”
          </h3>
          <p className="text-lg text-neutral-charcoal/80 mb-6">
            Start with a scoped opportunity review. We identify the best use case, the product
            surface, the operating constraints, and the fastest credible path to production.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/#contact" className="btn-primary text-center">
              Book a Strategy Call
            </Link>
            <Link href="/case-study" className="btn-secondary text-center">
              Read the Kiews Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
