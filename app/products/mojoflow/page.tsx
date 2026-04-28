'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaBolt, FaArrowRight, FaRobot, FaCogs, FaChartLine, FaMagic, FaPlug, FaSync, FaStream, FaLayerGroup } from 'react-icons/fa'

const features = [
  {
    icon: FaBolt,
    title: 'AI-Powered Workflows',
    description: 'Create intelligent automation flows that adapt and optimize themselves using advanced AI models.',
  },
  {
    icon: FaSync,
    title: 'Smart Triggers',
    description: 'Automatically trigger workflows based on events, schedules, or AI-detected patterns in your data.',
  },
  {
    icon: FaPlug,
    title: 'Universal Connectors',
    description: 'Connect to hundreds of apps and services with pre-built integrations that work out of the box.',
  },
  {
    icon: FaChartLine,
    title: 'Performance Analytics',
    description: 'Monitor workflow performance with real-time analytics and AI-generated optimization suggestions.',
  },
  {
    icon: FaLayerGroup,
    title: 'Visual Builder',
    description: 'Design complex workflows visually with a drag-and-drop interface — no coding required.',
  },
  {
    icon: FaRobot,
    title: 'AI Decision Nodes',
    description: 'Add AI-powered decision points that analyze data and route workflows intelligently.',
  },
]

const useCases = [
  { title: 'Sales Automation', description: 'Automate lead scoring, follow-ups, and pipeline management with AI intelligence.' },
  { title: 'Content Workflows', description: 'Streamline content creation, review, and publishing across platforms.' },
  { title: 'Data Processing', description: 'Transform, clean, and analyze data automatically with smart pipelines.' },
  { title: 'Customer Support', description: 'Route tickets, suggest responses, and escalate issues intelligently.' },
]

export default function MojoflowPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-orange-500/12 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-400/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-8">
              <FaBolt className="text-xs" />
              Under Development
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Mojoflow
            </h1>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              AI-Powered Workflow Automation
            </p>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
              Supercharge your productivity with intelligent workflow automation. Mojoflow combines visual workflow design
              with AI-powered decision making to automate your most complex business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://intelekt.live/mojoflow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/25 transition-all hover:scale-105"
              >
                Visit Mojoflow
                <FaArrowRight className="text-sm" />
              </a>
              <Link href="/products" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10">
                All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Mockup */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-orange-500/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-4 py-1.5 text-sm text-white/50 text-center">intelekt.live/mojoflow</div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                {/* Workflow visualization */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-center">
                  {[
                    { label: 'Trigger', sublabel: 'New Lead', color: 'from-orange-500 to-amber-500', icon: FaBolt },
                    { label: 'AI Analyze', sublabel: 'Score Lead', color: 'from-amber-500 to-yellow-500', icon: FaRobot },
                    { label: 'Decision', sublabel: 'Route', color: 'from-yellow-500 to-orange-500', icon: FaCogs },
                    { label: 'Action', sublabel: 'Send Email', color: 'from-orange-500 to-red-500', icon: FaMagic },
                  ].map((node, idx) => (
                    <motion.div
                      key={node.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.15 }}
                      className="flex items-center gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg mb-2`}>
                          <node.icon className="text-white text-xl" />
                        </div>
                        <p className="text-white font-semibold text-sm">{node.label}</p>
                        <p className="text-white/40 text-xs">{node.sublabel}</p>
                      </div>
                      {idx < 3 && (
                        <div className="hidden md:block">
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.3 }}
                          >
                            <FaArrowRight className="text-orange-400/40 text-lg mx-4" />
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
                {/* Status bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="mt-8 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-white/60 text-sm flex-1">Workflow running — <span className="text-orange-300">247 leads processed today</span>, 89% accuracy score</p>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">Active</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Intelligent Automation</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">Build workflows that think, adapt, and optimize themselves.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Built for Every Team</h2>
            <p className="text-lg text-white/60">Automate workflows across departments and use cases.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-white/10 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                  <FaStream className="text-white text-sm" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{useCase.title}</h3>
                  <p className="text-white/60 text-sm">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-900/30 via-amber-900/30 to-yellow-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Automate with Intelligence
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Mojoflow is currently under development. Be among the first to experience AI-powered workflow automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://intelekt.live/mojoflow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                Visit Mojoflow <FaArrowRight className="text-sm" />
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
