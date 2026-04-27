import Link from 'next/link'
import Footer from '@/components/Footer'
import { stories } from '@/lib/stories'

export default function Stories() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      <section className="section-padding pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-primary-light">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Lyvena Notes
            </h1>
            <p className="text-xl text-neutral-white/90 max-w-2xl mx-auto">
              Practical writing on AI product delivery, responsible rollout, and what it takes to
              move from pilot to production.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {stories.map((post) => (
              <article key={post.slug} className="card border border-white/5 bg-white hover:shadow-lg transition-shadow">
                <Link href={`/stories/${post.slug}`}>
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr] md:items-start">
                      <div className="rounded-2xl bg-gradient-to-br from-primary to-secondary p-6 text-white">
                        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                          {post.category}
                        </p>
                        <p className="text-sm text-white/80">{post.readTime}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-medium text-neutral-charcoal/70">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-charcoal mb-4 hover:text-primary transition-colors line-clamp-3">
                          {post.title}
                        </h2>
                        <p className="text-base md:text-lg text-neutral-charcoal/80 leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 text-accent font-semibold hover:text-primary transition-colors">
                      Read More →
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want help turning one of these ideas into a working system?
            </h2>
            <p className="text-lg text-neutral-white/90 mb-8">
              Bring the workflow, the product question, or the rollout constraint. We will help map
              the next step.
            </p>
            <Link
              href="/#contact"
              className="btn-primary inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
