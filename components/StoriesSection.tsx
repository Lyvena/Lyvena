'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { stories } from '@/lib/stories'

export default function StoriesSection() {
  const recentArticles = stories.slice(0, 3)
  return (
    <section id="stories" className="section-padding relative overflow-hidden bg-neutral-cream">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/6 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/6 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div className="mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Notes &amp; Thinking</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-neutral-charcoal leading-tight">
              Practical thinking on <span className="gradient-text-static">AI delivery</span>
            </h2>
            <p className="text-lg text-neutral-charcoal/55 leading-relaxed">
              Fewer trend takes, more operating advice: what to ship, how to measure it, and how to keep teams trusting the system after launch.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3 mb-12">
          {recentArticles.map((article, i) => (
            <motion.div key={article.slug}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }} className="group">
              <Link href={`/stories/${article.slug}`}>
                <div className="h-full bg-white rounded-3xl p-8 border border-neutral-gray/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/15">{article.category}</span>
                    <span className="text-xs text-neutral-charcoal/35 font-medium">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-charcoal mb-3 leading-snug group-hover:text-primary transition-colors duration-300">{article.title}</h3>
                  <p className="text-neutral-charcoal/55 text-sm leading-relaxed mb-6">{article.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Read note <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Link href="/stories" className="btn-primary inline-block">View All Notes</Link>
        </motion.div>
      </div>
    </section>
  )
}
