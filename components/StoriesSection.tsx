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
      image: 'https://cdn.marblism.com/fAzOas6TVc3.webp',
    },
    {
      title: 'How Close Are We to Achieving Artificial SuperIntelligence?',
      excerpt: 'Explore the timeline, technical barriers, and expert predictions for achieving Artificial Superintelligence in the coming decades.',
      slug: 'artificial-superintelligence-timeline',
      category: 'AI Future',
      image: 'https://marblism-ai-agents-public.s3.us-west-2.amazonaws.com/public/apps/3af4e54e-6c6c-476b-ad8d-4508e6a30b56/sessions/ef780ffb-7a36-4db0-986e-a30cfe7aa53f/agent-output/1ab33709-27e0-4b34-8e05-ce3fa11485d8-hero-picture.webp',
    },
    {
      title: 'Generative AI in 2025: The Breakthroughs Powering Smarter Content & Code',
      excerpt: 'Explore the most significant generative AI breakthroughs of 2025, from agentic AI to multimodal integration and on-device capabilities.',
      slug: 'generative-ai-2025-breakthroughs',
      category: 'Generative AI',
      image: 'https://cdn.marblism.com/R_m8QmXdD_c.webp',
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
        <div className="grid grid-cols-1 gap-8 mb-12">
          {recentArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/stories/${article.slug}`}>
                <div className="h-full bg-gradient-to-br from-neutral-dark/50 to-primary-dark/50 border border-accent/20 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer group">
                  {/* Hero Image */}
                  <div className="h-64 md:h-80 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
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
