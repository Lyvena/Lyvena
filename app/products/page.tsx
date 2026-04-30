'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaRobot, FaCubes, FaArrowRight, FaExternalLinkAlt, FaHome, FaBolt, FaBriefcase, FaGlobe, FaUsers, FaStar } from 'react-icons/fa'

const products = [
  {
    id: 'intelekt',
    name: 'Intelekt',
    tagline: 'AI-Native MVP Builder',
    description: 'The future of building software. Intelekt combines cutting-edge AI with powerful development tools to help you go from idea to production-ready MVP faster than ever.',
    icon: FaRobot,
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    bgGradient: 'from-violet-500/20 via-purple-500/20 to-indigo-500/20',
    link: 'https://intelekt.live',
    page: '/products/intelekt',
    status: 'Under Development',
    statusColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    highlights: ['AI code generation', 'Built-in CMS', 'AI CEO & PM assistants', 'Mojo powered'],
  },
  {
    id: 'prospera-havens',
    name: 'Prospera Havens',
    tagline: 'AI-Powered Caribbean Real Estate',
    description: 'Discover, buy, sell, rent, and invest in Caribbean real estate in Prospera ZEDE with AI-powered insights, crypto-friendly infrastructure, and fractional investment.',
    icon: FaHome,
    gradient: 'from-cyan-500 via-teal-500 to-blue-500',
    bgGradient: 'from-cyan-500/20 via-teal-500/20 to-blue-500/20',
    link: 'https://prosperahavens.space',
    page: '/products/prospera-havens',
    status: 'Live',
    statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    highlights: ['AI Concierge', 'Crypto payments', 'Fractional investment', '1% tax rate'],
  },
  {
    id: 'mojoflow',
    name: 'Mojoflow',
    tagline: 'AI-Powered Workflow Automation',
    description: 'Supercharge your productivity with intelligent workflow automation that combines visual workflow design with AI-powered decision making.',
    icon: FaBolt,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    bgGradient: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20',
    link: 'https://intelekt.live/mojoflow',
    page: '/products/mojoflow',
    status: 'Under Development',
    statusColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    highlights: ['Visual builder', 'AI decision nodes', 'Smart triggers', 'Universal connectors'],
  },
  {
    id: 'seerist',
    name: 'Seerist',
    tagline: 'Revenue Operating System',
    description: 'Turn scattered opportunity hunting into a system that scales. Capture, qualify, and convert opportunities from 13+ platforms in one AI-assisted workspace.',
    icon: FaBriefcase,
    gradient: 'from-blue-500 via-cyan-500 to-indigo-500',
    bgGradient: 'from-blue-500/20 via-cyan-500/20 to-indigo-500/20',
    link: 'https://seerist.xyz',
    page: '/products/seerist',
    status: 'Live',
    statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    highlights: ['13+ platform intake', 'AI qualification', '<60s proposals', 'Pipeline analytics'],
  },
  {
    id: 'kiews',
    name: 'Kiews',
    tagline: 'No-Code Blockchain Integration',
    description: 'Integrate NEAR Protocol into your projects in minutes. Ready-to-use blockchain integrations for 10+ popular no-code and low-code platforms.',
    icon: FaCubes,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    bgGradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
    link: 'https://kiews.xyz',
    page: '/products/kiews',
    status: 'Live',
    statusColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    highlights: ['10+ integrations', 'No coding required', 'NEAR Protocol', 'Open source'],
  },
]

const clientProjects = [
  {
    id: 'superworld',
    name: 'SuperWorld',
    tagline: 'Make the World Yours',
    description: 'Location-based augmented reality platform for buying, selling, and monetizing virtual real estate tied to real-world locations.',
    icon: FaGlobe,
    gradient: 'from-sky-500 via-cyan-500 to-blue-500',
    link: 'https://www.superworldapp.com/',
    page: '/clients/superworld',
  },
  {
    id: 'remotely',
    name: 'Remotely',
    tagline: 'Get Hired at a Top U.S. Tech Startup',
    description: 'Recruitment platform connecting senior Latin American developers with fast-growing US startups for full-time remote positions.',
    icon: FaUsers,
    gradient: 'from-purple-500 via-pink-500 to-orange-500',
    link: 'https://remotely.works/',
    page: '/clients/remotely',
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-20 relative overflow-hidden">
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
              We don&apos;t just build for clients — we build products that push the boundaries of what&apos;s possible.
              Explore our suite of innovative tools powered by AI and blockchain technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative h-full bg-gradient-to-br ${product.bgGradient} backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${product.gradient}`}>
                        <product.icon className="text-2xl text-white" />
                      </div>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full border ${product.statusColor}`}>
                        {product.status}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-4`}>
                      {product.tagline}
                    </p>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {product.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm text-white/80">
                          <span className={`w-1.5 h-1.5 bg-gradient-to-r ${product.gradient} rounded-full`} />
                          {h}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={product.page}
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-lg transition-all`}
                      >
                        Learn More <FaArrowRight className="text-sm" />
                      </Link>
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 transition-all"
                      >
                        Visit <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Projects */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">Client Projects</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Built for Our Clients
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Projects we&apos;ve delivered for innovative companies across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                      <project.icon className="text-xl text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-bold bg-sky-500/20 text-sky-400 rounded-full border border-sky-500/30">
                      Client Project
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                  <p className={`font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-3`}>
                    {project.tagline}
                  </p>
                  <p className="text-white/60 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={project.page}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-full hover:shadow-lg transition-all text-sm`}
                    >
                      View Project <FaArrowRight className="text-xs" />
                    </Link>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 transition-all text-sm"
                    >
                      Visit Site <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              We&apos;re always exploring new frontiers. If you have a vision for a product that could change the world, let&apos;s build it together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary">
                Let&apos;s Talk
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
