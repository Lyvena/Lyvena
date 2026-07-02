'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaArrowRight, FaSearch, FaFilter, FaFileAlt, FaChrome, FaChartBar, FaBullhorn, FaCheck, FaUsers, FaBriefcase, FaRocket, FaGlobe } from 'react-icons/fa'

const features = [
  {
    icon: FaSearch,
    title: 'Signal Intake',
    description: 'Capture opportunities from 13+ platforms including Upwork, LinkedIn, Contra, and more — all in one unified feed.',
  },
  {
    icon: FaFilter,
    title: 'AI Qualification',
    description: 'Automatically score leads, detect risks, and qualify opportunities using intelligent analysis.',
  },
  {
    icon: FaFileAlt,
    title: 'Proposal Generation',
    description: 'Go from signal to first proposal draft in under 60 seconds with AI-powered writing assistance.',
  },
  {
    icon: FaUsers,
    title: 'Team Review Queues',
    description: 'Collaborate on opportunities with shared review queues, comments, and approval workflows.',
  },
  {
    icon: FaChrome,
    title: 'Chrome Extension',
    description: 'Execute directly on platforms with the browser extension that brings Seerist context to every opportunity.',
  },
  {
    icon: FaChartBar,
    title: 'Pipeline Analytics',
    description: 'Track conversion rates, pipeline value, and team performance with real-time dashboards.',
  },
]

const workflow = [
  { step: 'Capture', description: 'Signals from 13+ platforms flow into your unified workspace', icon: FaSearch },
  { step: 'Shape', description: 'AI qualifies, scores, and prepares proposals automatically', icon: FaFilter },
  { step: 'Ship', description: 'Review, approve, and execute with your team in real-time', icon: FaRocket },
]

const stats = [
  { value: '412', label: 'Signals Captured' },
  { value: '84', label: 'Qualified Leads' },
  { value: '$118K', label: 'Pipeline Value' },
  { value: '<60s', label: 'To First Draft' },
]

const modes = [
  { title: 'Agency Pod', description: 'Multi-member teams with role-based access, shared pipelines, and collaborative review.' },
  { title: 'Consultant Mode', description: 'Solo operators managing their own pipeline with AI-powered leverage.' },
  { title: 'SaaS Services', description: 'Service-led SaaS companies managing customer acquisition at scale.' },
]

export default function SeeristPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero */}
      <section className="section-padding pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-blue-500/12 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[110px]" />
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-indigo-400/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
              <FaBriefcase className="text-xs" />
              Live
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Seerist
            </h1>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              Revenue Operating System
            </p>
            <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-10">
              Turn scattered opportunity hunting into a system that actually scales. Seerist consolidates
              opportunity capture, qualification, proposal generation, team review, and execution into one AI-assisted workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seerist.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105"
              >
                Visit Platform
                <FaArrowRight className="text-sm" />
              </a>
              <Link href="/products" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10">
                All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Mockup */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-blue-500/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-4 py-1.5 text-sm text-white/75 text-center">seerist.xyz</div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Pipeline */}
                  <div className="md:col-span-8 space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white font-semibold">Active Pipeline</h4>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-md">All Signals</span>
                        <span className="px-2 py-1 text-xs bg-white/5 text-white/40 rounded-md">Qualified</span>
                        <span className="px-2 py-1 text-xs bg-white/5 text-white/40 rounded-md">Proposals</span>
                      </div>
                    </div>
                    {[
                      { source: 'Upwork', title: 'AI Chat App Development', score: 92, value: '$15K', status: 'Qualified' },
                      { source: 'LinkedIn', title: 'Enterprise Dashboard Redesign', score: 87, value: '$28K', status: 'Proposal Sent' },
                      { source: 'Contra', title: 'Mobile App MVP', score: 78, value: '$12K', status: 'New Signal' },
                    ].map((item, idx) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.15 }}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                          <FaGlobe className="text-blue-400 text-sm" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className="text-white font-medium text-sm">{item.title}</p>
                            <span className="text-white/30 text-xs">via {item.source}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-cyan-400">Score: {item.score}%</span>
                            <span className="text-xs text-white/40">{item.value}</span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-md ${
                          item.status === 'Qualified' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'Proposal Sent' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-amber-500/20 text-amber-400'
                        }`}>
                          {item.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  {/* Sidebar stats */}
                  <div className="md:col-span-4 space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10">
                      <p className="text-white/75 text-xs mb-1">Pipeline Value</p>
                      <p className="text-2xl font-bold text-white">$118,400</p>
                      <p className="text-green-400 text-xs mt-1">+23% this week</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/75 text-xs mb-1">Conversion Rate</p>
                      <p className="text-2xl font-bold text-white">20.4%</p>
                      <p className="text-blue-400 text-xs mt-1">84 of 412 signals</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/75 text-xs mb-1">Avg. Proposal Time</p>
                      <p className="text-2xl font-bold text-white">47s</p>
                      <p className="text-cyan-400 text-xs mt-1">AI-assisted drafting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Capture. Shape. Ship.</h2>
            <p className="text-lg text-white/80">A systematic approach to revenue generation.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflow.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.step}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Complete Revenue Toolkit</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Everything you need to systematize opportunity capture and conversion.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modes */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Three Modes, One Platform</h2>
            <p className="text-lg text-white/80">Whether you&apos;re a solo consultant, agency, or SaaS company.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modes.map((mode, idx) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">{mode.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{mode.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-indigo-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Systematize Your Revenue
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
              Stop hunting for opportunities. Start building a system that captures, qualifies, and converts at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://seerist.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                Visit Platform <FaArrowRight className="text-sm" />
              </a>
              <Link href="/#contact" className="btn-primary">
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
