'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaCubes, FaArrowRight, FaRobot, FaHome, FaBolt, FaBriefcase } from 'react-icons/fa'
import { useTranslations } from '@/lib/i18n'

export default function Products() {
  const t = useTranslations()

  const products = [
    {
      id: 'intelekt',
      name: 'Intelekt',
      tagline: 'AI-Native MVP Builder',
      description: 'The future of building software — AI-powered code generation, built-in CMS, and virtual CEO & PM assistants.',
      icon: FaRobot,
      gradient: 'from-violet-500 via-purple-500 to-indigo-500',
      bgGradient: 'from-violet-500/10 via-purple-500/10 to-indigo-500/10',
      link: '/products/intelekt',
    },
    {
      id: 'prospera-havens',
      name: 'Prospera Havens',
      tagline: 'AI-Powered Caribbean Real Estate',
      description: 'Discover, buy, sell, and invest in Caribbean real estate with AI-powered insights and crypto-friendly infrastructure.',
      icon: FaHome,
      gradient: 'from-cyan-500 via-teal-500 to-blue-500',
      bgGradient: 'from-cyan-500/10 via-teal-500/10 to-blue-500/10',
      link: '/products/prospera-havens',
    },
    {
      id: 'mojoflow',
      name: 'Mojoflow',
      tagline: 'AI-Powered Workflow Automation',
      description: 'Supercharge your productivity with intelligent workflow automation and AI-powered decision making.',
      icon: FaBolt,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      bgGradient: 'from-orange-500/10 via-amber-500/10 to-yellow-500/10',
      link: '/products/mojoflow',
    },
    {
      id: 'seerist',
      name: 'Seerist',
      tagline: 'Revenue Operating System',
      description: 'Turn scattered opportunity hunting into a system that scales — from 13+ platforms to qualified pipeline.',
      icon: FaBriefcase,
      gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
      bgGradient: 'from-blue-500/10 via-cyan-500/10 to-indigo-500/10',
      link: '/products/seerist',
    },
    {
      id: 'kiews',
      name: 'Kiews',
      tagline: 'No-Code Blockchain Integration',
      description: 'Connect to NEAR Protocol in clicks. Ready-to-use integrations for 10+ no-code platforms.',
      icon: FaCubes,
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      bgGradient: 'from-amber-500/10 via-orange-500/10 to-red-500/10',
      link: '/products/kiews',
    },
  ]

  return (
    <section
      id="products"
      className="section-padding bg-gradient-to-b from-neutral-charcoal via-neutral-charcoal to-primary-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">{t.products.label}</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            {t.products.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.products.description}
          </p>
        </motion.div>

        {/* Top row - 2 large cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {products.slice(0, 2).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link href={product.link}>
                <div className={`relative h-full bg-gradient-to-br ${product.bgGradient} backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.gradient}`}>
                        <product.icon className="text-3xl text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-4`}>
                      {product.tagline}
                    </p>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {product.description}
                    </p>
                    <span className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full`}>
                      {t.products.explore} {product.name}
                      <FaArrowRight className="text-sm" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom row - 3 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.slice(2).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 2) * 0.15 }}
              className="group"
            >
              <Link href={product.link}>
                <div className={`relative h-full bg-gradient-to-br ${product.bgGradient} backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${product.gradient}`}>
                        <product.icon className="text-2xl text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-3`}>
                      {product.tagline}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white/80 hover:text-accent font-semibold transition-colors text-sm">
                      Learn More <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/80 hover:text-accent font-semibold transition-colors"
          >
            {t.products.viewAll}
            <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
