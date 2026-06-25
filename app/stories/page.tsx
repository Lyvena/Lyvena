import Link from 'next/link'
import Footer from '@/components/Footer'
import { stories } from '@/lib/stories'

export default function Stories() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      <section className="section-padding pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-white opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">Lyvena Notes</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Practical thinking on <span className="gradient-text">AI delivery</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-white/90 max-w-2xl mx-auto leading-relaxed">
              Fewer trend takes, more operating advice: what to ship, how to measure it, and how to keep teams trusting the system after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {stories.map((post, index) => (
              <article key={post.slug} className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/5">
                <Link href={`/stories/${post.slug}`}>
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr] md:items-start">
                      <div className="relative rounded-2xl bg-gradient-to-br from-primary to-secondary p-6 text-white min-h-[180px] flex flex-col justify-between group-hover:scale-105 transition-transform duration-500">
                        <div>
                          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                            {post.category}
                          </p>
                          <div className="flex items-center gap-4 text-white/80">
                            <span className="flex items-center gap-1.5">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-12 h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm font-medium text-neutral-white/70">
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-accent transition-colors line-clamp-3 group-hover:translate-x-1 transition-transform duration-300">
                          {post.title}
                        </h2>
                        <p className="text-base md:text-lg text-neutral-white/70 leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300">
                          <span>Read Note</span>
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-white opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want help turning one of these ideas into a working system?
            </h2>
            <p className="text-lg text-neutral-white/90 mb-8">
              Bring the workflow, the product question, or the rollout constraint. We will help map the next step.
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