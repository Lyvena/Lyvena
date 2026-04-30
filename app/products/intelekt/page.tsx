'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaRobot, FaBrain, FaDatabase, FaBolt, FaCode, FaRocket, FaArrowRight, FaCogs, FaLayerGroup, FaMagic } from 'react-icons/fa'

const features = [
  {
    icon: FaBrain,
    title: 'AI Code Generation',
    description: 'Generate high-quality, production-ready code using natural language prompts powered by advanced AI models.',
  },
  {
    icon: FaDatabase,
    title: 'Built-in CMS',
    description: 'Manage your content seamlessly with an integrated content management system designed for modern workflows.',
  },
  {
    icon: FaRobot,
    title: 'AI CEO & PM Assistants',
    description: 'Virtual assistants that help you plan, prioritize, and execute your projects with intelligent decision-making support.',
  },
  {
    icon: FaBolt,
    title: 'Mojo Powered',
    description: 'Built on Mojo and ChromaDB for lightning-fast performance and intelligent vector-based data handling.',
  },
  {
    icon: FaCode,
    title: 'Full-Stack Scaffolding',
    description: 'Instantly scaffold complete applications with frontend, backend, and database layers configured out of the box.',
  },
  {
    icon: FaCogs,
    title: 'Smart Deployment',
    description: 'One-click deployment pipelines that handle testing, building, and shipping your applications to production.',
  },
]

const workflow = [
  { step: '01', title: 'Describe', description: 'Tell Intelekt what you want to build in plain language' },
  { step: '02', title: 'Generate', description: 'AI creates the architecture, code, and content structure' },
  { step: '03', title: 'Refine', description: 'Iterate with AI assistants to perfect every detail' },
  { step: '04', title: 'Ship', description: 'Deploy production-ready applications with one click' },
]

export default function IntelektPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-violet-500/15 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm font-medium mb-8">
              <FaRocket className="text-xs" />
              Under Development
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Intelekt
            </h1>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              AI-Native MVP Builder
            </p>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
              The future of building software. Intelekt combines cutting-edge AI with powerful development tools
              to help you go from idea to production-ready MVP faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://intelekt.live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-violet-500/25 transition-all hover:scale-105"
              >
                Visit Intelekt
                <FaArrowRight className="text-sm" />
              </a>
              <Link href="/products" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10">
                All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Mockup Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Browser mockup */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-violet-500/10">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-4 py-1.5 text-sm text-white/50 text-center">intelekt.live</div>
                </div>
              </div>
              {/* App content mockup */}
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Sidebar */}
                  <div className="md:col-span-3 space-y-3">
                    <div className="p-3 rounded-xl bg-violet-500/20 border border-violet-500/30">
                      <div className="flex items-center gap-2 text-violet-300 text-sm font-medium">
                        <FaMagic className="text-xs" /> AI Builder
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 text-white/50 text-sm">
                        <FaLayerGroup className="text-xs" /> Components
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 text-white/50 text-sm">
                        <FaDatabase className="text-xs" /> Content
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 text-white/50 text-sm">
                        <FaCogs className="text-xs" /> Deploy
                      </div>
                    </div>
                  </div>
                  {/* Main area */}
                  <div className="md:col-span-9 space-y-4">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20">
                      <p className="text-violet-300 text-sm font-medium mb-3">AI Prompt</p>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-white/70 text-sm font-mono">&quot;Build a SaaS dashboard with user auth, a data table, and chart components...&quot;</p>
                      </div>
                      <div className="mt-4 flex items-center gap-3">
                        <motion.div
                          animate={{ width: ['0%', '100%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                          className="h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                          style={{ maxWidth: '100%' }}
                        />
                      </div>
                      <p className="text-white/40 text-xs mt-2">Generating application structure...</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <p className="text-green-400 text-xs font-medium mb-1">Generated</p>
                        <p className="text-white/70 text-sm">12 Components</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="p-4 rounded-xl bg-white/5 border border-white/10"
                      >
                        <p className="text-blue-400 text-xs font-medium mb-1">Ready</p>
                        <p className="text-white/70 text-sm">API Routes</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Powerful Capabilities</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">Everything you need to build, manage, and deploy modern web applications with AI assistance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-white/60">From idea to deployed application in four simple steps.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workflow.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
                {idx < workflow.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
                    <FaArrowRight className="text-white/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Build Faster?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join the next generation of AI-powered development. Intelekt is currently under development — be among the first to experience it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://intelekt.live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                Visit Intelekt <FaArrowRight className="text-sm" />
              </a>
              <Link href="/#contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
