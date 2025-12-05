'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaRocket, FaCubes, FaArrowRight, FaCode, FaRobot, FaLink } from 'react-icons/fa'

const products = [
  {
    id: 'intelekt',
    name: 'Intelekt',
    tagline: 'AI-Powered Web Development',
    description: 'The future of building software. Intelekt is an intelligent web development platform featuring built-in CMS, AI CEO & PM assistants, powered by cutting-edge Mojo and ChromaDB technology.',
    features: [
      'AI-powered code generation',
      'Built-in content management system',
      'AI CEO & PM assistants',
      'Powered by Mojo & ChromaDB',
    ],
    icon: FaRobot,
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    bgGradient: 'from-violet-500/10 via-purple-500/10 to-indigo-500/10',
    link: 'https://intelekt.live',
  },
  {
    id: 'kiews',
    name: 'Kiews',
    tagline: 'No-Code Blockchain Integration',
    description: 'Connect to NEAR Protocol in just a few clicks. Kiews provides ready-to-use integrations for 10+ no-code platforms, making blockchain accessible to everyone.',
    features: [
      '10+ platform integrations',
      'Webflow, Zapier, Make & more',
      'No coding required',
      'NEAR Protocol powered',
    ],
    icon: FaCubes,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    bgGradient: 'from-amber-500/10 via-orange-500/10 to-red-500/10',
    link: 'https://kiews.xyz',
  },
]

export default function Products() {
  return (
    <section
      id="products"
      className="section-padding bg-gradient-to-b from-neutral-charcoal via-neutral-charcoal to-primary-dark relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">Our Products</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Innovation in Action
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Powerful tools we've built to push the boundaries of what's possible with AI and blockchain technology.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className={`relative h-full bg-gradient-to-br ${product.bgGradient} backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Product Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.gradient}`}>
                    <product.icon className="text-3xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-4`}>
                  {product.tagline}
                </p>
                <p className="text-white/70 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-white/80">
                      <span className={`w-1.5 h-1.5 bg-gradient-to-r ${product.gradient} rounded-full`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-lg hover:shadow-${product.id === 'intelekt' ? 'violet' : 'amber'}-500/25 transition-all group-hover:gap-4`}
                >
                  Explore {product.name}
                  <FaArrowRight className="text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products CTA */}
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
            View all products
            <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
