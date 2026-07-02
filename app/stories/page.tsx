import Link from 'next/link'
import Footer from '@/components/Footer'
import { stories } from '@/lib/stories'

export default function Stories() {
  const [featured, ...remaining] = stories

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      <section className="section-padding pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-white opacity-20" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
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
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {featured && (
            <div className="mb-16">
              <Link href={`/stories/${featured.slug}`} className="group block">
                <article className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.03] rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                  <div className="p-8 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8 md:gap-12 items-center">
                      <div className="space-y-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-primary/20 text-primary-light border border-primary/30">
                            {featured.category}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm text-neutral-white/60">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {featured.readTime}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                          {featured.title}
                        </h2>
                        <p className="text-base md:text-lg text-neutral-white/70 leading-relaxed line-clamp-3">
                          {featured.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300 pt-2">
                          <span>Read Note</span>
                          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                      <div className="relative rounded-2xl bg-gradient-to-br from-primary via-primary-dark to-accent/30 p-8 aspect-[4/3] flex flex-col justify-between overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
                        <div className="relative z-10">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60 mb-2">Featured Note</p>
                          <p className="text-6xl font-bold text-white/10">01</p>
                        </div>
                        <div className="relative z-10 flex items-center justify-between text-white/80">
                          <span className="flex items-center gap-1.5 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {new Date(featured.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                          <svg className="w-8 h-8 text-white/20 group-hover:text-white/40 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remaining.map((post, index) => (
              <article key={post.slug} className="group relative bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-500 hover:border-primary/30 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-primary/5 flex flex-col">
                <Link href={`/stories/${post.slug}`} className="flex-1 flex flex-col">
                  <div className="relative h-40 bg-gradient-to-br from-primary/30 via-primary-dark/30 to-accent/10 flex items-start justify-between p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
                    <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                      {post.category}
                    </span>
                    <span className="relative z-10 text-5xl font-bold text-white/[0.06]">
                      {String(index + 2).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="flex items-center gap-1.5 text-xs text-neutral-white/50">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="flex items-center gap-1.5 text-xs text-neutral-white/50">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-neutral-white/60 leading-relaxed line-clamp-3 mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-accent font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
                      <span>Read Note</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-white opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
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
