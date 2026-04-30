import Link from 'next/link'
import Footer from '@/components/Footer'
import { stories } from '@/lib/stories'

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }))
}

export default function StoryArticle({ params }: { params: { slug: string } }) {
  const article = stories.find((story) => story.slug === params.slug)

  if (!article) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">Article Not Found</h1>
          <Link href="/stories" className="btn-primary inline-block">
            Back to Notes
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-3xl bg-gradient-to-br from-primary to-secondary p-10 text-white shadow-xl">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <span className="rounded-full bg-white/10 px-3 py-1 font-semibold">{article.category}</span>
              <span>{article.readTime}</span>
              <span>
                {new Date(article.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-display font-bold md:text-6xl">{article.title}</h1>
            <p className="max-w-3xl text-lg text-white/85">{article.excerpt}</p>
          </div>

          <article className="space-y-10">
            {article.sections.map((section) => (
              <section key={section.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h2 className="mb-4 text-3xl font-bold text-white">{section.title}</h2>
                <div className="space-y-4 text-lg leading-relaxed text-neutral-white/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>

          <div className="mt-12 border-t border-neutral-white/10 pt-8">
            <Link
              href="/stories"
              className="text-accent hover:text-accent/80 transition-colors font-semibold"
            >
              ← Back to Notes
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to apply this to your own team?
          </h2>
          <p className="text-lg text-neutral-white/90 mb-8">
            Bring the workflow or product question and we will help shape the next credible step.
          </p>
          <Link href="/#contact" className="btn-primary inline-block">
            Start a Conversation
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
