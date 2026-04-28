import Link from 'next/link'

const shippedAreas = [
  'Simplified no-code product enabling NEAR Protocol integrations for non-technical teams',
  'Intuitive workflow builder with template-driven blockchain actions',
  'Clear delivery structure from concept through production rollout',
]

const results = [
  'No-code products only feel simple when the workflow model is clear — so we designed around operator confidence first.',
  'Credibility comes from showing real product concepts with implementation detail, not abstract claims.',
  'The strongest proof is the combination of product design, working code, and rollout thinking in one package.',
]

export default function CaseStudy() {
  return (
    <section className="min-h-screen bg-neutral-charcoal py-20 px-6 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 rounded-3xl bg-gradient-to-br from-primary to-secondary p-10 shadow-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
            Case Study
          </p>
          <h1 className="mb-4 text-4xl font-display font-bold md:text-6xl">
            Kiews: Making blockchain workflows usable
          </h1>
          <p className="max-w-3xl text-lg text-white/85">
            Kiews shows what happens when you focus on turning technical complexity into a clean operator
            experience — no jargon, no friction, just a product that works.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="mb-4 text-2xl font-bold text-accent">The Challenge</h2>
            <p className="text-neutral-white/80 leading-relaxed">
              Blockchain integrations are hard to adopt because the workflow model is technical before
              it is useful. Non-technical teams need to connect to NEAR Protocol without learning
              smart contract internals or managing wallet infrastructure.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="mb-4 text-2xl font-bold text-accent">Our Approach</h2>
            <p className="text-neutral-white/80 leading-relaxed">
              We built Kiews around simple workflow composition, clear actions, understandable templates,
              and operator confidence. The product works because it hides complexity without removing
              capability.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="mb-6 text-3xl font-bold text-white">What We Shipped</h2>
          <ul className="space-y-4 text-neutral-white/80">
            {shippedAreas.map((area) => (
              <li key={area} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="mb-6 text-3xl font-bold text-white">Key Takeaways</h2>
          <ul className="space-y-4 text-neutral-white/80">
            {results.map((result) => (
              <li key={result} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-light" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 rounded-3xl border border-accent/20 bg-accent/10 p-8">
          <h2 className="mb-4 text-3xl font-bold text-white">Want this level of focus for your product?</h2>
          <p className="mb-6 text-neutral-white/80">
            Bring your workflow, product challenge, or adoption problem. We&apos;ll translate it into
            a clearer system and a cleaner path to production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://cal.com/akshay1/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-accent px-8 py-3 font-semibold text-neutral-charcoal transition-transform hover:scale-[1.02] text-center"
            >
              Book a Strategy Call
            </a>
            <Link href="/#contact" className="inline-block rounded-full border border-white/20 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10 text-center">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
