'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaArrowRight, FaUsers, FaHandshake, FaMoneyBillWave, FaShieldAlt, FaGlobeAmericas, FaRocket, FaCheck, FaStar, FaUserTie, FaCode, FaChartLine } from 'react-icons/fa'

const features = [
  {
    icon: FaUsers,
    title: 'Senior LatAm Talent',
    description: 'Access top-tier software developers from Latin America with 5+ years of experience and strong English skills.',
  },
  {
    icon: FaMoneyBillWave,
    title: '100% Transparent Compensation',
    description: 'Developers keep all their earnings. Monthly USD payments via ACH with complete pay transparency.',
  },
  {
    icon: FaShieldAlt,
    title: 'Guaranteed PTO & Severance',
    description: 'Full benefits including guaranteed paid time off and severance protection for every developer.',
  },
  {
    icon: FaRocket,
    title: 'Rapid Redeployment',
    description: 'If a role is eliminated, developers get quickly redeployed to a new position — no gaps in employment.',
  },
  {
    icon: FaUserTie,
    title: 'Career Development',
    description: 'Profile optimization, interview prep, onboarding support, and ongoing career growth assistance.',
  },
  {
    icon: FaGlobeAmericas,
    title: 'Country Communities',
    description: 'Dedicated Slack channels for each country, building connections between developers across the region.',
  },
]

const process = [
  { step: 'Find', description: 'Browse curated opportunities at top US startups', icon: '🔍' },
  { step: 'Match', description: 'Get matched with roles that fit your skills and goals', icon: '🎯' },
  { step: 'Hire', description: 'Seamless interview and hiring process', icon: '✅' },
  { step: 'Manage', description: 'Onboarding, payroll, and ongoing support', icon: '⚙️' },
  { step: 'Retain', description: 'Career growth and long-term partnership', icon: '🚀' },
]

const stats = [
  { value: '600+', label: 'Jobs Placed' },
  { value: '5+', label: 'Years Experience Min' },
  { value: '100%', label: 'Pay Transparency' },
  { value: 'USD', label: 'Monthly Payments' },
]

export default function RemotelyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-purple-500/12 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-violet-400/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
              <FaStar className="text-xs" />
              Client Project
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Remotely
            </h1>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-6">
              Get Hired at a Top U.S. Tech Startup
            </p>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10">
              A recruitment platform connecting senior Latin American software developers with fast-growing US startups
              for full-time remote positions. 100% transparent, developer-first.
            </p>
            <a
              href="https://remotely.works/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all hover:scale-105"
            >
              Visit Remotely
              <FaArrowRight className="text-sm" />
            </a>
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
                <div className="text-4xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Mockup */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-purple-500/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-4 py-1.5 text-sm text-white/50 text-center">remotely.works</div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Job listings */}
                  <div className="md:col-span-8 space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">Open Positions</h4>
                      <span className="text-purple-400 text-sm">120+ roles</span>
                    </div>
                    {[
                      { title: 'Senior Full-Stack Engineer', company: 'AI Startup (Series B)', salary: '$140K-$170K', tech: ['React', 'Node.js', 'AWS'] },
                      { title: 'Staff Backend Developer', company: 'Fintech (Series A)', salary: '$150K-$180K', tech: ['Python', 'PostgreSQL', 'K8s'] },
                      { title: 'Lead Mobile Engineer', company: 'HealthTech (Seed)', salary: '$120K-$150K', tech: ['React Native', 'TypeScript'] },
                    ].map((job, idx) => (
                      <motion.div
                        key={job.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.15 }}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/20 transition-all"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="text-white font-medium">{job.title}</h5>
                            <p className="text-white/50 text-sm">{job.company}</p>
                          </div>
                          <span className="text-purple-400 font-semibold text-sm">{job.salary}</span>
                        </div>
                        <div className="flex gap-2">
                          {job.tech.map(t => (
                            <span key={t} className="px-2 py-0.5 text-xs bg-purple-500/10 text-purple-300 rounded-md">{t}</span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  {/* Developer profile */}
                  <div className="md:col-span-4 space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-3">
                        <FaCode className="text-white text-xl" />
                      </div>
                      <p className="text-white font-semibold text-center">Developer Profile</p>
                      <p className="text-white/50 text-xs text-center mt-1">Optimized & Ready</p>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/50">Experience</span>
                          <span className="text-white">8 years</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/50">Match Score</span>
                          <span className="text-green-400">94%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-white/50">Status</span>
                          <span className="text-purple-400">Active</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <FaChartLine className="text-purple-400 text-2xl mx-auto mb-2" />
                      <p className="text-white font-semibold">600+</p>
                      <p className="text-white/50 text-xs">Developers Placed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-white/60">From discovery to long-term career success in five steps.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {process.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{item.step}</h3>
                <p className="text-white/50 text-xs">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Developer-First Platform</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">Built to put developers first with transparent compensation and comprehensive support.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-orange-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Connecting Talent with Opportunity
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Remotely is a platform Lyvena helped build, connecting LatAm developers with top US startups. Explore open positions or start your own project with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://remotely.works/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                Visit Remotely <FaArrowRight className="text-sm" />
              </a>
              <Link href="/#contact" className="btn-primary">
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
