import Link from 'next/link'

const principles = [
  {
    title: 'Start from the workflow',
    description:
      'We scope AI around the real operating bottleneck first, so the system is grounded in work that already matters.',
  },
  {
    title: 'Design for trust',
    description:
      'Interaction design, fallback states, review paths, and authorship clarity are treated as product requirements, not polish.',
  },
  {
    title: 'Measure before scale',
    description:
      'Every pilot proves something: cycle time, quality, usability, or operator confidence. Otherwise it is still a demo.',
  },
  {
    title: 'Ship with ownership',
    description:
      'A production system needs clear owners, rules, and maintenance habits. We design rollout so your team can sustain it.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-br from-neutral-cream via-primary/5 to-neutral-cream">
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20 max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            About
          </p>
          <div className="card gentle-elevation p-8 md:p-12">
            <p className="text-lg md:text-xl text-neutral-charcoal leading-relaxed">
              We combine applied AI systems, strong product design, careful delivery, and a bias toward
              measurable outcomes. That clarity is what makes teams trust us with their most important AI projects.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="mb-12 text-3xl md:text-4xl font-display font-bold text-primary">
            How we deliver
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="card h-full border border-primary/10 bg-white/90 p-6 shadow-sm">
                <h4 className="mb-3 text-xl font-bold text-primary">{principle.title}</h4>
                <p className="text-neutral-charcoal/70 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 rounded-3xl border border-primary/10 bg-white p-8 shadow-sm md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <h3 className="mb-4 text-2xl md:text-3xl font-display font-bold text-primary">
              A delivery structure you can trust
            </h3>
            <p className="mb-6 text-lg text-neutral-charcoal/80">
              Discovery, prototype, instrumentation, and rollout are connected end-to-end.
              When the sales story matches the operating model, you know exactly what you&apos;re getting.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/about" className="btn-secondary text-center">
                Learn More About Us
              </Link>
              <Link href="/stories" className="btn-primary text-center">
                Read Our Notes
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-neutral-charcoal p-6 text-neutral-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">
              Delivery Path
            </p>
            <ol className="space-y-4 text-sm leading-relaxed">
              <li>1. Audit the workflow and define success.</li>
              <li>2. Design the AI experience and human review path.</li>
              <li>3. Ship a measured pilot with clear instrumentation.</li>
              <li>4. Scale only what your team can own and maintain.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
