'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCubes, FaArrowRight, FaRobot, FaHome, FaBolt, FaBriefcase } from 'react-icons/fa'

const products = [
  {
    id: 'intelekt', name: 'Intelekt', tagline: 'AI-Native MVP Builder',
    description: 'The future of building software — AI-powered code generation, built-in CMS, and virtual CEO & PM assistants.',
    icon: FaRobot, gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    bgGradient: 'from-violet-500/12 via-purple-500/8 to-indigo-500/12',
    borderColor: 'border-violet-500/20', glowColor: 'hover:shadow-violet-500/20',
    link: '/products/intelekt',
  },
  {
    id: 'prospera-havens', name: 'Prospera Havens', tagline: 'AI-Powered Caribbean Real Estate',
    description: 'Discover, buy, sell, and invest in Caribbean real estate with AI-powered insights and crypto-friendly infrastructure.',
    icon: FaHome, gradient: 'from-cyan-500 via-teal-500 to-blue-500',
    bgGradient: 'from-cyan-500/12 via-teal-500/8 to-blue-500/12',
    borderColor: 'border-cyan-500/20', glowColor: 'hover:shadow-cyan-500/20',
    link: '/products/prospera-havens',
  },
  {
    id: 'mojoflow', name: 'Mojoflow', tagline: 'AI-Powered Workflow Automation',
    description: 'Supercharge your productivity with intelligent workflow automation and AI-powered decision making.',
    icon: FaBolt, gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    bgGradient: 'from-orange-500/12 via-amber-500/8 to-yellow-500/12',
    borderColor: 'border-orange-500/20', glowColor: 'hover:shadow-orange-500/20',
    link: '/products/mojoflow',
  },
  {
    id: 'seerist', name: 'Seerist', tagline: 'Revenue Operating System',
    description: 'Turn scattered opportunity hunting into a system that scales — from 13+ platforms to qualified pipeline.',
    icon: FaBriefcase, gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
    bgGradient: 'from-blue-500/12 via-cyan-500/8 to-indigo-500/12',
    borderColor: 'border-blue-500/20', glowColor: 'hover:shadow-blue-500/20',
    link: '/products/seerist',
  },
  {
    id: 'kiews', name: 'Kiews', tagline: 'No-Code Blockchain Integration',
    description: 'Connect to NEAR Protocol in clicks. Ready-to-use integrations for 10+ no-code platforms.',
    icon: FaCubes, gradient: 'from-amber-500 via-orange-500 to-red-500',
    bgGradient: 'from-amber-500/12 via-orange-500/8 to-red-500/12',
    borderColor: 'border-amber-500/20', glowColor: 'hover:shadow-amber-500/20',
    link: '/products/kiews',
  },
]

export default function Products() {
  return (
    <section id="products" className="section-padding relative overflow-hidden bg-neutral-charcoal">
      <div className="absolute inset-0 dot-grid-white opacity-40" />
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-violet-500/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent/50" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent/80">Our Products</span>
            <div className="h-px w-8 bg-accent/50" />
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-5">
            Innovation <span className="gradient-text-gold">in Action</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Powerful tools we&apos;ve built to push the boundaries of what&apos;s possible with AI and emerging technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {products.slice(0, 2).map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }} className="group">
              <Link href={product.link}>
                <div className={`relative h-full bg-gradient-to-br ${product.bgGradient} rounded-3xl p-8 md:p-10 border ${product.borderColor} hover:border-white/20 transition-all duration-500 overflow-hidden hover:shadow-2xl ${product.glowColor}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 rounded-3xl`} />
                  <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.gradient} shadow-lg`}>
                        <product.icon className="text-3xl text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{product.name}</h3>
                    <p className={`text-base font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-4`}>{product.tagline}</p>
                    <p className="text-white/70 leading-relaxed mb-8 text-lg">{product.description}</p>
                    <span className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white font-bold rounded-full text-sm shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      Explore {product.name} <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {products.slice(2).map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (index + 2) * 0.15 }} className="group">
              <Link href={product.link}>
                <div className={`relative h-full bg-gradient-to-br ${product.bgGradient} rounded-3xl p-7 border ${product.borderColor} hover:border-white/20 transition-all duration-500 overflow-hidden hover:shadow-xl ${product.glowColor}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 rounded-3xl`} />
                  <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="relative z-10">
                    <div className="mb-5">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${product.gradient} shadow-md`}>
                        <product.icon className="text-xl text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">{product.name}</h3>
                    <p className={`text-xs font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-3`}>{product.tagline}</p>
                    <p className="text-white/65 text-sm leading-relaxed mb-5">{product.description}</p>
                    <span className="inline-flex items-center gap-2 text-white/70 group-hover:text-accent font-semibold transition-colors text-sm">
                      Learn More <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Link href="/products" className="inline-flex items-center gap-2 px-8 py-3 border border-white/15 text-white/80 hover:text-accent hover:border-accent/40 font-semibold rounded-full transition-all duration-300 glass">
            View All Products <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
