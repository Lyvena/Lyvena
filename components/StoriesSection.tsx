import Link from 'next/link'
import { stories } from '@/lib/stories'

export default function StoriesSection() {
  const recentArticles = stories.slice(0, 3)

  return (
    <section id="stories" className="section-padding bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent/80">
            Notes
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Practical thinking on AI delivery
          </h2>
          <p className="text-lg text-neutral-white/70 max-w-2xl mx-auto">
            Fewer trend takes, more operating advice: what to ship, how to measure it, and how to
            keep teams trusting the system after launch.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {recentArticles.map((article) => (
            <div
              key={article.slug}
              className="rounded-3xl border border-accent/15 bg-white/5 p-8 backdrop-blur transition-colors hover:border-accent/40"
            >
              <Link href={`/stories/${article.slug}`}>
                <div className="group h-full cursor-pointer">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {article.category}
                    </span>
                    <span className="text-xs text-neutral-white/50">{article.readTime}</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-accent">
                    {article.title}
                  </h3>
                  <p className="mb-6 text-neutral-white/70 leading-relaxed">{article.excerpt}</p>
                  <div className="text-sm font-semibold text-accent">Read note →</div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/stories" className="btn-primary inline-block">
            View All Notes
          </Link>
        </div>
      </div>
    </section>
  )
}
