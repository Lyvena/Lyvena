import Link from 'next/link'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'

const metrics = [
  { value: '5', label: 'Products Built' },
  { value: '7+', label: 'Projects Shipped' },
  { value: '3', label: 'Industries' },
  { value: '4-Step', label: 'Delivery Model' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-neutral-cream via-primary/10 to-accent/20"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-8 pt-28 md:px-12 lg:px-24 lg:pt-32">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Applied AI For Teams That Need Real Delivery
          </p>

          <h1 className="mb-6 text-5xl font-display font-bold leading-tight text-primary md:text-7xl">
            We build AI systems that solve real problems.
          </h1>

          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-neutral-charcoal/80 md:text-xl">
            Lyvena helps operators and product teams move from AI curiosity to production systems:
            internal tools, workflow automation, customer-facing AI features, and delivery plans
            with clear ownership, evaluation, and human review.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://cal.com/akshay1/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary warm-shadow text-center text-lg inline-flex items-center justify-center gap-2"
            >
              <FaCalendarAlt className="text-base" />
              Book a Strategy Call
            </a>
            <Link href="/products" className="btn-secondary text-center text-lg inline-flex items-center justify-center gap-2">
              See Our Products
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-12 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center rounded-2xl border border-primary/15 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                {metric.value}
              </div>
              <p className="text-sm text-neutral-charcoal/60 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
