'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaGlobe, FaArrowRight, FaCubes, FaMap, FaMobileAlt, FaUsers, FaImage, FaCalendarAlt, FaCoins, FaVrCardboard, FaStar } from 'react-icons/fa'

const features = [
  {
    icon: FaMap,
    title: 'Virtual Real Estate',
    description: 'Buy, sell, and own virtual real estate tied to real-world locations worldwide — powered by NFTs and blockchain.',
  },
  {
    icon: FaImage,
    title: 'NFT Creation & Minting',
    description: 'Create and mint NFTs directly on the platform with an intuitive, user-friendly interface.',
  },
  {
    icon: FaVrCardboard,
    title: 'Augmented Reality',
    description: 'Experience location-based AR that overlays digital content on real-world environments.',
  },
  {
    icon: FaUsers,
    title: 'Community Maps',
    description: 'Build customizable business profiles and personal maps with pins, recommendations, and curated content.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Event Hosting',
    description: 'Host events with integrated ticketing, bringing together virtual and physical experiences.',
  },
  {
    icon: FaCoins,
    title: '$SPWR Token',
    description: 'The SuperWorld ecosystem token on Base chain, powering transactions and community rewards.',
  },
]

const highlights = [
  'Digital Twin Builder',
  'NFT Salon & Drops',
  'Star Chamber Community',
  'AI-Powered Discovery',
  'Commission-Based Earnings',
  'Global Virtual Real Estate',
]

export default function SuperWorldPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero */}
      <section className="section-padding pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-sky-500/12 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[110px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-sm font-medium mb-8">
              <FaStar className="text-xs" />
              Client Build
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              SuperWorld
            </h1>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Make the World Yours
            </p>
            <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-10">
              A location-based augmented reality platform where users buy, sell, and monetize virtual real estate
              tied to real-world locations. Combining NFTs, AR, and blockchain technology.
            </p>
            <a
              href="https://www.superworldapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-sky-500/25 transition-all hover:scale-105"
            >
              Visit Platform
              <FaArrowRight className="text-sm" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Globe Mockup */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-sky-500/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-4 py-1.5 text-sm text-white/75 text-center">superworldapp.com</div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                {/* Virtual real estate mockup */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    {/* Map visualization */}
                    <div className="relative h-64 md:h-80 rounded-xl bg-gradient-to-br from-sky-900/50 via-blue-900/50 to-indigo-900/50 border border-white/10 overflow-hidden">
                      {/* Grid lines */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(8)].map((_, i) => (
                          <div key={`h-${i}`} className="absolute w-full h-px bg-sky-400" style={{ top: `${(i + 1) * 12.5}%` }} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                          <div key={`v-${i}`} className="absolute h-full w-px bg-sky-400" style={{ left: `${(i + 1) * 8.33}%` }} />
                        ))}
                      </div>
                      {/* Location pins */}
                      {[
                        { top: '30%', left: '25%', label: 'Paris', price: '$2.4K' },
                        { top: '45%', left: '60%', label: 'Tokyo', price: '$3.1K' },
                        { top: '55%', left: '15%', label: 'NYC', price: '$5.2K' },
                        { top: '65%', left: '45%', label: 'Dubai', price: '$1.8K' },
                      ].map((pin, idx) => (
                        <motion.div
                          key={pin.label}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.2 }}
                          className="absolute"
                          style={{ top: pin.top, left: pin.left }}
                        >
                          <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md text-xs">
                              <span className="text-white font-medium">{pin.label}</span>
                              <span className="text-cyan-400 ml-1">{pin.price}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      <div className="absolute bottom-4 left-4 px-3 py-2 bg-black/40 backdrop-blur-sm rounded-lg">
                        <p className="text-white/80 text-xs">Virtual Real Estate Map</p>
                        <p className="text-white font-semibold text-sm">64.8B parcels mapped</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-sky-500/10 to-cyan-500/10 border border-white/10">
                      <p className="text-white/75 text-xs mb-1">$SPWR Token</p>
                      <p className="text-2xl font-bold text-white">Base Chain</p>
                      <p className="text-sky-400 text-xs mt-1">Live & Trading</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/75 text-xs mb-1">NFTs Minted</p>
                      <p className="text-2xl font-bold text-white">250K+</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/75 text-xs mb-1">Platform</p>
                      <p className="text-lg font-bold text-white">AR + Web3</p>
                      <p className="text-white/40 text-xs mt-1">iOS & Android</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Platform Features</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">A comprehensive ecosystem for virtual real estate, NFTs, and augmented reality.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Ecosystem Highlights</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-sky-500/10 to-cyan-500/10 border border-white/10"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <FaStar className="text-white text-xs" />
                </div>
                <span className="text-white/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-sky-900/30 via-cyan-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Explore the Virtual World
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
              SuperWorld is a pioneering AR platform that Lyvena helped bring to life. Explore virtual real estate tied to real-world locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.superworldapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
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
