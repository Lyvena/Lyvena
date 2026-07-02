'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaCubes, FaArrowRight, FaLink, FaWallet, FaCog, FaShieldAlt, FaCode, FaPlug, FaGithub, FaCheck } from 'react-icons/fa'

const features = [
  {
    icon: FaLink,
    title: '10+ Integrations',
    description: 'Connect with Webflow, Zapier, Make, Hubspot, AppGyver, and many more no-code platforms.',
  },
  {
    icon: FaWallet,
    title: 'Wallet Connect',
    description: 'Easy user authentication and wallet connection through NEAR Protocol\'s secure infrastructure.',
  },
  {
    icon: FaCog,
    title: 'Smart Contract Calls',
    description: 'Call view and change methods on smart contracts without writing a single line of code.',
  },
  {
    icon: FaShieldAlt,
    title: 'Secure by Design',
    description: 'FunctionCall keys protect user data while maintaining full functionality — privacy first.',
  },
  {
    icon: FaCode,
    title: 'Token Transfers',
    description: 'Send and receive NEAR tokens directly from your no-code application with simple configuration.',
  },
  {
    icon: FaPlug,
    title: '150+ Connections',
    description: 'Through Make integration alone, connect NEAR Protocol to over 150 popular platforms and services.',
  },
]

const integrations = [
  { name: 'Webflow', color: 'from-blue-500 to-indigo-500' },
  { name: 'Zapier', color: 'from-orange-500 to-red-500' },
  { name: 'Make', color: 'from-purple-500 to-violet-500' },
  { name: 'HubSpot', color: 'from-orange-500 to-amber-500' },
  { name: 'AppGyver', color: 'from-cyan-500 to-blue-500' },
  { name: 'Flutter', color: 'from-blue-400 to-cyan-400' },
  { name: 'Butter CMS', color: 'from-yellow-500 to-amber-500' },
  { name: 'Bildr', color: 'from-green-500 to-emerald-500' },
  { name: 'Contentful', color: 'from-blue-500 to-sky-500' },
  { name: 'Carrd CMS', color: 'from-pink-500 to-rose-500' },
  { name: 'Tilda', color: 'from-yellow-400 to-orange-400' },
]

const capabilities = [
  'User authentication via FunctionCall keys',
  'View method calls on smart contracts',
  'Change method calls on smart contracts',
  'Token transfers (NEAR)',
  'Contract method parsing',
  'No-code configuration',
]

export default function KiewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero */}
      <section className="section-padding pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[520px] h-[520px] bg-amber-500/12 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 w-[380px] h-[380px] bg-red-500/10 rounded-full blur-[110px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-400/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-medium mb-8">
              <FaCubes className="text-xs" />
              Live
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Kiews
            </h1>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
              No-Code Blockchain Integration
            </p>
            <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-10">
              Integrate NEAR Protocol into your projects in minutes, not months. Kiews provides ready-to-use
              blockchain integrations for 10+ popular no-code and low-code platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://kiews.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-amber-500/25 transition-all hover:scale-105"
              >
                Visit Platform
                <FaArrowRight className="text-sm" />
              </a>
              <a
                href="https://github.com/Kiews-OU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Grid Mockup */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Supported Platforms</h2>
            <p className="text-lg text-white/80">Connect NEAR Protocol to the tools you already use.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, idx) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <FaPlug className="text-white text-lg" />
                </div>
                <p className="text-white font-semibold">{integration.name}</p>
                <p className="text-white/40 text-xs mt-1">NEAR Protocol</p>
              </motion.div>
            ))}
            {/* More platforms card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-center flex flex-col items-center justify-center"
            >
              <div className="text-3xl font-display font-bold text-amber-400 mb-1">150+</div>
              <p className="text-white/80 text-sm">More via Make</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Mockup */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-amber-500/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-4 py-1.5 text-sm text-white/75 text-center">kiews.xyz</div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Configuration panel */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold text-lg mb-4">Integration Setup</h4>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/75 text-xs mb-2">Platform</p>
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                        <FaPlug className="text-amber-400 text-sm" />
                        <span className="text-white text-sm">Webflow</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/75 text-xs mb-2">Contract</p>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        <code className="text-amber-300 text-xs">app.kiews.near</code>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/75 text-xs mb-2">Method</p>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        <code className="text-green-300 text-xs">get_user_balance()</code>
                      </div>
                    </div>
                  </div>
                  {/* Result panel */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold text-lg mb-4">Live Preview</h4>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <p className="text-green-400 text-sm font-medium">Connected to NEAR</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/75">Account</span>
                          <span className="text-white font-mono">user.near</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/75">Balance</span>
                          <span className="text-amber-400 font-mono">24.5 NEAR</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/75">Status</span>
                          <span className="text-green-400">Active</span>
                        </div>
                      </div>
                    </motion.div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/75 text-xs mb-2">Embed Code</p>
                      <pre className="text-xs text-amber-300/70 bg-white/5 p-3 rounded-lg overflow-x-auto">
{`<script src="kiews.xyz/embed.js"
  data-contract="app.kiews.near"
  data-method="get_user_balance">
</script>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Built for Everyone</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Making blockchain accessible — no coding required.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Core Capabilities</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={cap}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white text-xs" />
                </div>
                <span className="text-white/80">{cap}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-amber-900/30 via-orange-900/30 to-red-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Start Building with Blockchain
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
              Kiews is open-source and free to use. Integrate NEAR Protocol into your project today — no blockchain experience required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://kiews.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                Visit Platform <FaArrowRight className="text-sm" />
              </a>
              <a
                href="https://github.com/Kiews-OU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
