'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import { FaLinkedin, FaCalendarAlt } from 'react-icons/fa'

const team = [
  {
    name: 'Akshay',
    role: 'Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/Akshay155/',
    description: 'Leads product direction, client strategy, and the practical application of AI across every engagement.',
  },
  {
    name: 'Aryna Verchenko',
    role: 'Chief Designer & COO',
    linkedin: 'https://www.linkedin.com/in/unicornixa/',
    description: 'Shapes design quality, product clarity, and the operating discipline behind every delivery.',
  },
]

const values = [
  {
    title: 'Specificity over hype',
    description: 'We scope AI around real operating bottlenecks, not trend-chasing. Every project starts with a clear problem.',
  },
  {
    title: 'Proof over promises',
    description: 'We ship measured pilots with real instrumentation. You see results before you scale.',
  },
  {
    title: 'Delivery discipline',
    description: 'Discovery, prototype, instrumentation, and rollout are connected. No handoff gaps, no surprises.',
  },
  {
    title: 'Trustworthy design',
    description: 'Human review paths, fallback states, and authorship clarity are product requirements — not afterthoughts.',
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero */}
      <section className="section-padding pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-display font-bold text-white mb-4"
            >
              About Lyvena
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-white/95 max-w-2xl"
            >
              An Orthodox Christian company building applied AI systems with integrity, clear delivery, and responsible rollout.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                AI that solves real problems
              </h2>
              <p className="text-lg text-neutral-white/80 leading-relaxed mb-6">
                Lyvena turns ambiguous AI ambition into clear product direction, real systems, and delivery plans your team can actually run. We are an Orthodox Christian company, and that identity shapes how we think about human dignity, responsibility, and the kinds of systems worth building.
              </p>
              <p className="text-lg text-neutral-white/80 leading-relaxed mb-6">
                We focus on specific internal tools, product features, and rollout strategies with evidence behind them — not vague promises about &ldquo;AI transformation.&rdquo;
              </p>
              <p className="text-lg text-neutral-white/80 leading-relaxed">
                Strong positioning, strong UX, and strong operating discipline make us the partner teams trust when AI needs to actually work.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-3">What We Do</h3>
                  <p className="text-neutral-white/80">
                    Applied AI systems, product engineering, and responsible delivery for teams that need more than prototypes — guided by integrity, stewardship, and human-centered technology.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-3">Our Values</h3>
                  <ul className="space-y-2 text-neutral-white/80">
                    {values.map((v) => (
                      <li key={v.title} className="flex items-start">
                        <span className="text-accent mr-3 font-bold mt-0.5">&#10003;</span>
                        <span><strong className="text-white">{v.title}</strong> — {v.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-gradient-to-br from-neutral-charcoal/50 to-primary-dark/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent/80">Our Team</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Leadership
            </h2>
            <p className="text-xl text-neutral-white/80 max-w-2xl mx-auto">
              Product direction and design quality — the two disciplines that make AI delivery credible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-br from-neutral-charcoal/50 to-primary-dark/50 border border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-accent font-semibold text-lg">{member.role}</p>
                  </div>
                  <p className="text-neutral-white/80 text-base leading-relaxed mb-6">
                    {member.description}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-semibold"
                  >
                    <FaLinkedin className="text-2xl" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use AI */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent/80">Our Approach</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              How We Use AI in Delivery
            </h2>
            <p className="text-xl text-neutral-white/70 max-w-2xl mx-auto">
              AI accelerates every phase of our work — with human judgment and quality gates at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Research & Scoping',
                description: 'AI summarizes, clusters, and compares options while humans stay accountable for direction and priority.',
              },
              {
                title: 'Design & Prototyping',
                description: 'AI accelerates copy drafts, prototype logic, and UI exploration — refined with editorial and product judgment.',
              },
              {
                title: 'Build & Delivery',
                description: 'AI handles code generation, testing, and documentation with clear review steps, clear owners, and defined quality bars.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-accent/20 bg-gradient-to-br from-neutral-charcoal/50 to-primary-dark/50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-neutral-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-charcoal mb-4">
            Ready to turn AI ambition into a real product?
          </h2>
          <p className="text-lg text-neutral-charcoal/90 mb-8">
            Start with a focused conversation about the workflow, product, and constraints that matter most to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/akshay1/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <FaCalendarAlt />
              Book a Strategy Call
            </a>
            <Link href="/#contact" className="btn-secondary inline-block text-center">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
