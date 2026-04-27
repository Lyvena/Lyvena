import Link from 'next/link'

const proofItems = [
  {
    title: 'Kiews',
    type: 'Product',
    summary:
      'A no-code product focused on reducing the friction of integrating NEAR Protocol workflows for non-technical teams.',
    highlights: ['Workflow builder concept', 'Template-driven blockchain actions', 'Case study with delivery lessons'],
    href: '/case-study',
    cta: 'Read case study',
  },
  {
    title: 'Intelekt',
    type: 'Product',
    summary:
      'An AI-assisted web development platform positioned around faster software creation with stronger operator leverage.',
    highlights: ['AI-assisted product building', 'CMS-oriented workflow', 'Productization beyond service revenue'],
    href: 'https://intelekt.live/',
    cta: 'Visit product',
  },
  {
    title: 'Lyvena Delivery Model',
    type: 'Service Proof',
    summary:
      'Where Lyvena can stand out today is not generic AI claims, but the combination of scoping, UX, engineering, and responsible rollout.',
    highlights: ['Audit -> pilot -> instrumentation -> rollout', 'Human review where it matters', 'Clear owners and measurable outcomes'],
    href: '/#contact',
    cta: 'Start a conversation',
  },
]

export default function Portfolio() {
  return (
    <section id="proof" className="section-padding relative overflow-hidden bg-gradient-to-br from-primary/5 via-neutral-white to-accent/5">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Proof
          </p>
          <h2 className="mb-4 text-5xl font-display font-bold gradient-text md:text-6xl">
            Real products, real delivery focus
          </h2>
          <p className="text-xl text-neutral-charcoal/70">
            The strongest version of Lyvena is specific. These are the products and delivery
            patterns the brand should lead with.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {proofItems.map((item, index) => {
            const isExternal = item.href.startsWith('http')

            return (
              <div
                key={item.title}
                className={`card flex h-full flex-col border border-primary/10 bg-white/90 p-8 shadow-sm ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary/70">
                  {item.type}
                </p>
                <h3 className="mb-4 text-3xl font-display font-bold text-primary">{item.title}</h3>
                <p className="mb-6 text-neutral-charcoal/75 leading-relaxed">{item.summary}</p>
                <ul className="mb-8 space-y-3 text-sm text-neutral-charcoal/75">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {isExternal ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-auto text-primary font-semibold hover:text-accent transition-colors">
                    {item.cta} →
                  </a>
                ) : (
                  <Link href={item.href} className="mt-auto text-primary font-semibold hover:text-accent transition-colors">
                    {item.cta} →
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
