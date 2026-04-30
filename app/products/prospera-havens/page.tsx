'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaHome, FaChartLine, FaRobot, FaBitcoin, FaGlobeAmericas, FaArrowRight, FaSearch, FaHandshake, FaMoneyBillWave, FaShieldAlt, FaBuilding, FaStar } from 'react-icons/fa'

const features = [
  {
    icon: FaRobot,
    title: 'AI Concierge',
    description: 'Get guided through property discovery and transactions with an intelligent AI assistant that understands your needs.',
  },
  {
    icon: FaChartLine,
    title: 'Premium Intelligence',
    description: 'Quick valuations, investor briefs, neighborhood reports, and document drafts — all powered by AI at accessible prices.',
  },
  {
    icon: FaBitcoin,
    title: 'Crypto-Friendly',
    description: 'Bitcoin as legal tender, crypto payments accepted. Invest in Caribbean real estate with the currency of the future.',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Fractional Investment',
    description: 'Start from as low as $100 through Fracta.city on Base blockchain with 6-12% target annual returns.',
  },
  {
    icon: FaShieldAlt,
    title: '1% Tax Rate',
    description: 'Prospera ZEDE offers one of the lowest effective tax rates in the world — just 1% for property owners.',
  },
  {
    icon: FaGlobeAmericas,
    title: '40+ Country Community',
    description: 'Join a diverse community of investors and residents from over 40 countries in this Caribbean paradise.',
  },
]

const services = [
  { title: 'Quick Valuations', price: '$1', description: 'Instant AI-powered property valuations' },
  { title: 'Investor Briefs', price: '$1.50', description: 'Comprehensive investment analysis reports' },
  { title: 'Neighborhood Reports', price: '$0.25', description: 'Detailed area insights and comparisons' },
  { title: 'Document Drafts', price: '$3', description: 'AI-generated legal and transaction documents' },
]

const stats = [
  { value: '8+', label: 'Developments' },
  { value: '12+', label: 'Properties' },
  { value: '$76K', label: 'Starting From' },
  { value: '40+', label: 'Countries' },
]

export default function ProsperaHavensPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero */}
      <section className="section-padding pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[520px] h-[520px] bg-cyan-500/12 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-blue-500/10 rounded-full blur-[110px]" />
          <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-teal-400/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-8">
              <FaHome className="text-xs" />
              Live
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Prospera Havens
            </h1>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent mb-6">
              AI-Powered Caribbean Real Estate
            </p>
            <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-10">
              Discover, buy, sell, rent, and invest in Caribbean real estate in Prospera ZEDE — an autonomous
              economic zone on Roatan Island, Honduras. Crypto-friendly, AI-powered, and built for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://prosperahavens.space"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-cyan-500/25 transition-all hover:scale-105"
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
        <div className="max-w-5xl mx-auto">
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
                <div className="text-4xl font-display font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Property Mockup */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-4 py-1.5 text-sm text-white/75 text-center">prosperahavens.space</div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Property cards mockup */}
                  {[
                    { name: 'Ocean View Villa', price: '$285,000', beds: 3, tag: 'Featured' },
                    { name: 'Beach Front Condo', price: '$156,000', beds: 2, tag: 'New' },
                    { name: 'Mountain Retreat', price: '$76,000', beds: 1, tag: 'Investment' },
                  ].map((property, idx) => (
                    <motion.div
                      key={property.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.15 }}
                      className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 overflow-hidden"
                    >
                      {/* Property image placeholder */}
                      <div className="h-32 bg-gradient-to-br from-cyan-600/30 via-teal-500/20 to-blue-600/30 relative">
                        <div className="absolute top-3 left-3 px-2 py-1 text-xs font-bold bg-cyan-500/90 text-white rounded-md">
                          {property.tag}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-white font-semibold mb-1">{property.name}</h4>
                        <p className="text-cyan-400 font-bold text-lg mb-2">{property.price}</p>
                        <div className="flex items-center gap-2 text-white/75 text-xs">
                          <FaHome className="text-xs" /> {property.beds} Beds
                          <span className="ml-auto flex items-center gap-1"><FaStar className="text-yellow-400" /> Prospera ZEDE</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* AI Concierge bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <FaRobot className="text-white text-sm" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/85 text-sm">AI Concierge: <span className="text-cyan-300">&quot;I found 3 properties matching your criteria in Prospera ZEDE. Would you like a detailed investor brief?&quot;</span></p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Why Prospera Havens</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">The smartest way to invest in Caribbean real estate, powered by AI and blockchain.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Services */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Premium Intelligence</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">AI-powered services to make smarter real estate decisions.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-white/10 text-center hover:border-cyan-500/30 transition-all"
              >
                <div className="text-3xl font-display font-bold text-cyan-400 mb-2">{service.price}</div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-cyan-900/30 via-teal-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Your Caribbean Investment Awaits
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
              Start exploring properties in Prospera ZEDE today. With crypto-friendly infrastructure, AI-powered insights, and fractional investment options starting at $100.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://prosperahavens.space"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
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
