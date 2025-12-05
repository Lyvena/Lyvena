'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaRobot, FaCubes, FaArrowRight, FaCheck, FaExternalLinkAlt, FaCode, FaDatabase, FaBrain, FaLink, FaWallet, FaCog, FaShieldAlt, FaBolt } from 'react-icons/fa'

const products = [
  {
    id: 'intelekt',
    name: 'Intelekt',
    tagline: 'AI-Powered Web Development Platform',
    heroDescription: 'The future of building software is here. Intelekt combines cutting-edge AI with powerful development tools to revolutionize how you create web applications.',
    fullDescription: 'Intelekt is an intelligent web development platform that puts the power of AI at your fingertips. With built-in content management, AI-powered code generation, and virtual CEO & PM assistants, you can build production-ready applications faster than ever before.',
    icon: FaRobot,
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    bgGradient: 'from-violet-500/20 via-purple-500/20 to-indigo-500/20',
    link: 'https://intelekt.live',
    status: 'Live',
    features: [
      {
        icon: FaBrain,
        title: 'AI Code Generation',
        description: 'Generate high-quality code with natural language prompts powered by advanced AI models.',
      },
      {
        icon: FaDatabase,
        title: 'Built-in CMS',
        description: 'Manage your content seamlessly with an integrated content management system.',
      },
      {
        icon: FaRobot,
        title: 'AI CEO & PM',
        description: 'Virtual assistants that help you plan, prioritize, and execute your projects effectively.',
      },
      {
        icon: FaBolt,
        title: 'Mojo Powered',
        description: 'Built on Mojo and ChromaDB for lightning-fast performance and intelligent data handling.',
      },
    ],
    highlights: [
      'Natural language to code conversion',
      'Intelligent project management',
      'Real-time collaboration',
      'Production-ready deployments',
      'Smart content workflows',
      'AI-assisted debugging',
    ],
  },
  {
    id: 'kiews',
    name: 'Kiews',
    tagline: 'No-Code Blockchain Integration Platform',
    heroDescription: 'Connect to NEAR Protocol in just a few clicks. No coding required. Kiews makes blockchain technology accessible to everyone.',
    fullDescription: 'Kiews provides ready-to-use NEAR Protocol integrations for 10+ popular no-code and low-code platforms. Whether you\'re building on Webflow, Zapier, or Make, Kiews helps you integrate blockchain functionality into your projects without writing a single line of code.',
    icon: FaCubes,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    bgGradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
    link: 'https://kiews.xyz',
    status: 'Live',
    features: [
      {
        icon: FaLink,
        title: '10+ Integrations',
        description: 'Connect with Webflow, Zapier, Make, Hubspot, AppGyver, and many more platforms.',
      },
      {
        icon: FaWallet,
        title: 'Wallet Connect',
        description: 'Easy user authentication and wallet connection through NEAR Protocol.',
      },
      {
        icon: FaCog,
        title: 'Smart Contracts',
        description: 'Call view and change methods on smart contracts without coding knowledge.',
      },
      {
        icon: FaShieldAlt,
        title: 'Secure by Design',
        description: 'FunctionCall keys protect user data while maintaining full functionality.',
      },
    ],
    highlights: [
      'Webflow integration',
      'Zapier automation',
      'Make (Integromat) support',
      'AppGyver compatibility',
      'Hubspot connection',
      'Flutter & Bildr ready',
    ],
    integrations: [
      'Webflow', 'Zapier', 'Make', 'AppGyver', 'Hubspot', 
      'Contentful', 'Carrd CMS', 'Flutter', 'Bildr', 'Butter CMS'
    ],
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">Our Products</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Tools That{' '}
              <span className="gradient-text">Transform</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We don't just build for clients—we build products that push the boundaries of what's possible. 
              Explore our suite of innovative tools powered by AI and blockchain technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Detail Sections */}
      {products.map((product, productIndex) => (
        <section 
          key={product.id}
          id={product.id}
          className={`section-padding relative overflow-hidden ${productIndex % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: productIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={productIndex % 2 === 1 ? 'lg:order-2' : ''}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.gradient}`}>
                    <product.icon className="text-3xl text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs font-bold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                    {product.status}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
                  {product.name}
                </h2>
                <p className={`text-xl font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-6`}>
                  {product.tagline}
                </p>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  {product.fullDescription}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {product.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/80">
                      <FaCheck className={`text-sm bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`} style={{ color: productIndex === 0 ? '#8b5cf6' : '#f59e0b' }} />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all`}
                >
                  Visit {product.name}
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </motion.div>

              {/* Features Card */}
              <motion.div
                initial={{ opacity: 0, x: productIndex % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={productIndex % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className={`bg-gradient-to-br ${product.bgGradient} backdrop-blur-sm rounded-3xl p-8 border border-white/10`}>
                  <h3 className="text-2xl font-bold text-white mb-8">Key Features</h3>
                  <div className="space-y-6">
                    {product.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                          <feature.icon className="text-white text-lg" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                          <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Integrations for Kiews */}
                  {product.integrations && (
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h4 className="text-white font-semibold mb-4">Supported Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.integrations.map((integration, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white/80 rounded-full"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-accent/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Have an Idea for a Product?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We're always exploring new frontiers. If you have a vision for a product that could change the world, let's build it together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary">
                Let's Talk
              </Link>
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
