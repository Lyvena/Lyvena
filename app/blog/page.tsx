'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  slug: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: '2',
    title: 'AI Agents Are Changing the Game: How Lyvena Delivers Websites and Apps Faster Than Ever',
    excerpt: 'Discover how AI development agents are revolutionizing the development process, delivering projects 70% faster with superior quality.',
    date: 'November 6, 2025',
    author: 'Lyvena Team',
    category: 'AI Agents',
    slug: 'ai-agents-changing-game',
    image: 'https://marblism-ai-agents-public.s3.us-west-2.amazonaws.com/public/apps/3af4e54e-6c6c-476b-ad8d-4508e6a30b56/sessions/ef780ffb-7a36-4db0-986e-a30cfe7aa53f/agent-output/e1443083-b99c-41e3-aefa-9a4095e4310e-hero-picture.webp',
  },
  {
    id: '1',
    title: 'Responsible AI, Real Results: Building Scalable Digital Solutions That Last',
    excerpt: 'Discover how responsible AI development practices create digital solutions that scale effectively and deliver lasting value.',
    date: 'November 6, 2025',
    author: 'Lyvena Team',
    category: 'AI Development',
    slug: 'responsible-ai-real-results',
    image: 'https://marblism-ai-agents-public.s3.us-west-2.amazonaws.com/public/apps/3af4e54e-6c6c-476b-ad8d-4508e6a30b56/sessions/ef780ffb-7a36-4db0-986e-a30cfe7aa53f/agent-output/c231cced-c53d-4ae2-8a7a-16464710ac52-hero-picture.webp',
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-dark via-neutral-dark to-primary-dark">
      {/* Header */}
      <section className="section-padding pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-primary-light">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              Lyvena Blog
            </h1>
            <p className="text-xl text-neutral-white/90 max-w-2xl mx-auto">
              Insights, strategies, and best practices for building responsible AI solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Image */}
                    <div className="md:col-span-1 h-64 md:h-auto overflow-hidden rounded-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm text-neutral-dark/60">{post.date}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-3 hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-neutral-dark/70 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-neutral-dark/60">By {post.author}</span>
                        <span className="text-accent font-semibold hover:text-primary transition-colors">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Digital Future?
            </h2>
            <p className="text-lg text-neutral-white/90 mb-8">
              Let's discuss how responsible AI can solve your business challenges.
            </p>
            <Link
              href="#contact"
              className="btn-primary inline-block"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
