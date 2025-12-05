'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

interface StoryPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  slug: string
  image: string
}

const storyPosts: StoryPost[] = [
  {
    id: '7',
    title: 'Mojo vs Python: Why Mojo Might Be the Future of AI Coding',
    excerpt: 'Discover why Mojo, the new superset of Python, is revolutionizing AI development with speeds up to 35,000 times faster than Python.',
    date: 'November 7, 2025',
    author: 'Lyvena Team',
    category: 'AI Development',
    slug: 'mojo-vs-python-future-ai-coding',
    image: 'https://cdn.marblism.com/2reCTwroN9v.webp',
  },
  {
    id: '6',
    title: 'MIT SEAL: The Self-Adapting Language Models Redefining AI Learning',
    excerpt: 'Discover how MIT\'s SEAL technology enables AI models to learn and improve themselves autonomously without human intervention.',
    date: 'November 6, 2025',
    author: 'Lyvena Team',
    category: 'AI Research',
    slug: 'mit-seal-self-adapting-language-models',
    image: 'https://cdn.marblism.com/gLWMW21Unfv.webp',
  },
  {
    id: '5',
    title: 'Impacts of Artificial SuperIntelligence on Business, Society, and Technology',
    excerpt: 'Explore how ASI will transform business landscapes, reshape society, accelerate technological evolution, and raise critical ethical questions.',
    date: 'November 6, 2025',
    author: 'Lyvena Team',
    category: 'AI Impact',
    slug: 'asi-impacts-business-society-technology',
    image: 'https://cdn.marblism.com/fAzOas6TVc3.webp',
  },
  {
    id: '4',
    title: 'How Close Are We to Achieving Artificial SuperIntelligence?',
    excerpt: 'Explore the timeline, technical barriers, and expert predictions for achieving Artificial Superintelligence in the coming decades.',
    date: 'November 6, 2025',
    author: 'Lyvena Team',
    category: 'AI Future',
    slug: 'artificial-superintelligence-timeline',
    image: 'https://marblism-ai-agents-public.s3.us-west-2.amazonaws.com/public/apps/3af4e54e-6c6c-476b-ad8d-4508e6a30b56/sessions/ef780ffb-7a36-4db0-986e-a30cfe7aa53f/agent-output/1ab33709-27e0-4b34-8e05-ce3fa11485d8-hero-picture.webp',
  },
  {
    id: '3',
    title: 'Generative AI in 2025: The Breakthroughs Powering Smarter Content & Code',
    excerpt: 'Explore the most significant generative AI breakthroughs of 2025, from agentic AI to multimodal integration and on-device capabilities.',
    date: 'November 6, 2025',
    author: 'Lyvena Team',
    category: 'Generative AI',
    slug: 'generative-ai-2025-breakthroughs',
    image: 'https://cdn.marblism.com/R_m8QmXdD_c.webp',
  },
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

export default function Stories() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
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
              Lyvena Stories
            </h1>
            <p className="text-xl text-neutral-white/90 max-w-2xl mx-auto">
              Insights, strategies, and best practices for building responsible AI solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {storyPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/stories/${post.slug}`}>
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
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-sm font-medium text-neutral-charcoal/70">{post.date}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-charcoal mb-4 hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-base md:text-lg text-neutral-charcoal/70 leading-relaxed mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-neutral-charcoal">By {post.author}</span>
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
      <Footer />
    </main>
  )
}
