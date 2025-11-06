'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StoriesSection() {
  const recentArticles = [
    {
      title: 'Impacts of Artificial SuperIntelligence on Business, Society, and Technology',
      excerpt: 'Explore how ASI will transform business landscapes, reshape society, accelerate technological evolution, and raise critical ethical questions.',
      slug: 'asi-impacts-business-society-technology',
      category: 'AI Impact',
    },
    {
      title: 'How Close Are We to Achieving Artificial SuperIntelligence?',
      excerpt: 'Explore the timeline, technical barriers, and expert predictions for achieving Artificial Superintelligence in the coming decades.',
      slug: 'artificial-superintelligence-timeline',
      category: 'AI Future',
    },
    {
      title: 'Generative AI in 2025: The Breakthroughs Powering Smarter Content & Code',
      excerpt: 'Explore the most significant generative AI breakthroughs of 2025, from agentic AI to multimodal integration and on-device capabilities.',
      slug: 'generative-ai-2025-breakthroughs',
      category: 'Generative AI',
    },
  ]

  return (
    <section id="stories" className="section-padding bg-gradient-to-br from-neutral-dark via-neutral-dark to-primary-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-neutral-white/70 max-w-2xl mx-auto">
            Explore our latest articles on AI development, responsible innovation, and the future of technology.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recentArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/stories/${article.slug}`}>
                <div className="h-full bg-gradient-to-br from-neutral-dark/50 to-primary-dark/50 border border-accent/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer group">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-neutral-white/70 text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="text-accent text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    Read More →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/stories">
            <button className="btn-primary">
              View All Articles
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
