import Link from 'next/link'

const shippedAreas = [
  'A simplified no-code product concept around NEAR integrations',
  'A clearer workflow abstraction for non-technical operators',
  'A case study narrative focused on accessibility and delivery tradeoffs',
]

const lessons = [
  'No-code products only feel simple if the workflow model is clear.',
  'Credibility improves when product claims stay close to what can be shown and explained.',
  'The strongest proof is the combination of product concept, implementation detail, and rollout thinking.',
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
            Kiews and the challenge of making blockchain workflows usable
          </h1>
          <p className="max-w-3xl text-lg text-white/85">
            Kiews is the strongest concrete product story currently present in the Lyvena brand.
            The opportunity is less about hype and more about showing how technical complexity can
            be turned into a clearer operator experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="mb-4 text-2xl font-bold text-accent">The problem</h2>
            <p className="text-neutral-white/80 leading-relaxed">
              Many blockchain integrations are still hard to adopt because the workflow model is
              technical before it is useful. Kiews is compelling when it is framed as a product
              that reduces that friction for non-technical teams.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="mb-4 text-2xl font-bold text-accent">The product angle</h2>
            <p className="text-neutral-white/80 leading-relaxed">
              The product story works best when it emphasizes simple workflow composition, clear
              actions, understandable templates, and operator confidence over blockchain jargon.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="mb-6 text-3xl font-bold text-white">What this case study should prove</h2>
          <ul className="space-y-4 text-neutral-white/80">
            {shippedAreas.map((area) => (
              <li key={area} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="mb-6 text-3xl font-bold text-white">What Lyvena can learn from it</h2>
          <ul className="space-y-4 text-neutral-white/80">
            {lessons.map((lesson) => (
              <li key={lesson} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary-light" />
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 rounded-3xl border border-accent/20 bg-accent/10 p-8">
          <h2 className="mb-4 text-3xl font-bold text-white">Want this level of focus for your own product?</h2>
          <p className="mb-6 text-neutral-white/80">
            Bring the workflow, product challenge, or adoption problem. Lyvena can help translate
            it into a clearer system and a cleaner rollout path.
          </p>
          <Link href="/#contact" className="inline-block rounded-full bg-accent px-8 py-3 font-semibold text-neutral-charcoal transition-transform hover:scale-[1.02]">
            Talk to Lyvena
          </Link>
        </div>
      </div>
    </section>
  )
}
