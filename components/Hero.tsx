import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-neutral-cream via-primary/10 to-accent/20"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

        <svg className="absolute bottom-0 w-full opacity-30" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#4A7F5F"
            fillOpacity="0.15"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-24 md:px-12 lg:px-24 lg:pb-32 lg:pt-28">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Applied AI For Teams That Need Real Delivery
          </p>

          <h1 className="mb-6 text-5xl font-display font-bold leading-tight text-primary md:text-7xl">
            Lyvena
          </h1>

          <h2 className="mb-6 max-w-3xl text-3xl font-semibold leading-tight text-neutral-charcoal md:text-5xl">
            We design, build, and ship AI systems that solve concrete operational problems.
          </h2>

          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-neutral-charcoal/80 md:text-xl">
            Lyvena helps operators and product teams move from AI curiosity to production systems:
            internal tools, workflow automation, customer-facing AI features, and delivery plans
            with clear ownership, evaluation, and human review.
          </p>

          <div className="mb-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-primary/15 bg-white/70 p-5 shadow-sm backdrop-blur">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Systems</p>
              <p className="text-neutral-charcoal/80">AI workflows and internal tools grounded in your actual operations.</p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white/70 p-5 shadow-sm backdrop-blur">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Products</p>
              <p className="text-neutral-charcoal/80">Customer-facing AI experiences with strong UX, instrumentation, and rollout planning.</p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-white/70 p-5 shadow-sm backdrop-blur">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Governance</p>
              <p className="text-neutral-charcoal/80">Responsible delivery: clear review loops, safe defaults, and measurable outcomes.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/#contact" className="btn-primary warm-shadow text-center text-lg">
              Book a Strategy Call
            </Link>
            <Link href="/#proof" className="btn-secondary text-center text-lg">
              See Proof and Products
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm text-neutral-charcoal/65">
            <div className="flex items-center gap-2">
              <span>Workflow-led scoping</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Proof before scale</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Responsible AI controls</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
