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
    <section id="stories" className="section-padding bg-neutral-cream relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">Our Blog</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-charcoal">
              Latest Insights
            </h2>
          </div>
          <Link href="/stories" className="mt-4 md:mt-0">
            <span className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-2">
              View all articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Articles Grid - Featured + 2 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2"
          >
            <Link href={`/stories/${recentArticles[0].slug}`}>
              <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-gray/20">
                <div className="h-64 lg:h-80 overflow-hidden">
                  <img
                    src={recentArticles[0].image}
                    alt={recentArticles[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block text-xs font-bold text-accent bg-accent/10 px-3 py-1.5 rounded-full mb-4">
                    {recentArticles[0].category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-charcoal mb-4 group-hover:text-primary transition-colors">
                    {recentArticles[0].title}
                  </h3>
                  <p className="text-neutral-charcoal/70 leading-relaxed mb-6">
                    {recentArticles[0].excerpt}
                  </p>
                  <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Other Articles */}
          {recentArticles.slice(1).map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <Link href={`/stories/${article.slug}`}>
                <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-gray/20 flex flex-col md:flex-row">
                  <div className="h-48 md:h-auto md:w-1/3 overflow-hidden flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="inline-block text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 w-fit">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-charcoal mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-neutral-charcoal/70 text-sm leading-relaxed line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <span className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read more
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
