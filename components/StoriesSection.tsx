'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StoriesSection() {
  const recentArticles = [
    {
      title: 'Mojo vs Python: Why Mojo Might Be the Future of AI Coding',
      excerpt: 'Discover why Mojo, the new superset of Python, is revolutionizing AI development with speeds up to 35,000 times faster than Python.',
      slug: 'mojo-vs-python-future-ai-coding',
      category: 'AI Development',
      image: 'https://cdn.marblism.com/2reCTwroN9v.webp',
    },
    {
      title: 'MIT SEAL: The Self-Adapting Language Models Redefining AI Learning',
      excerpt: 'Discover how MIT\'s SEAL technology enables AI models to learn and improve themselves autonomously without human intervention.',
      slug: 'mit-seal-self-adapting-language-models',
      category: 'AI Research',
      image: 'https://cdn.marblism.com/gLWMW21Unfv.webp',
    },
    {
      title: 'Impacts of Artificial SuperIntelligence on Business, Society, and Technology',
      excerpt: 'Explore how ASI will transform business landscapes, reshape society, accelerate technological evolution, and raise critical ethical questions.',
      slug: 'asi-impacts-business-society-technology',
      category: 'AI Impact',
      image: 'https://cdn.marblism.com/fAzOas6TVc3.webp',
    },
  ]

  return (
    <section id="stories" className="section-padding bg-gradient-to-br from-neutral-dark via-neutral-dark to-primary-dark">
      <div className="max-w-7xl mx-auto">

        {/* Articles Grid */}
        <div className="space-y-12 mb-12">
          {recentArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/stories/${article.slug}`}>
                <div className={`h-full bg-gradient-to-br from-neutral-dark/50 to-primary-dark/50 border border-accent/20 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer group grid grid-cols-1 md:grid-cols-2 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  {/* Hero Image */}
                  <div className={`h-64 md:h-96 overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-neutral-white/70 text-base leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <div className="text-accent text-sm font-semibold group-hover:translate-x-2 transition-transform w-fit">
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
