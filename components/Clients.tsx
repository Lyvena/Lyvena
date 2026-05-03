'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { name: 'NEAR Protocol', logo: '/logos/near-protocol.svg', url: 'https://near.org' },
  { name: 'SuperWorldapp', logo: '/logos/superworldapp.svg', url: 'https://superworldapp.com' },
  { name: 'JW Fishers', logo: '/logos/jwfishers.svg', url: 'https://jwfishers.com' },
]

export default function Clients() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-charcoal to-[#0d0f12] py-20 px-6 md:px-12">
      <div className="absolute inset-0 dot-grid-white opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-accent/40" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent/70">Partners &amp; Ecosystem</p>
            <div className="h-px w-8 bg-accent/40" />
          </div>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            We&apos;ve shipped products and systems for innovative teams across industries
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-charcoal to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0f12] to-transparent z-10" />
          <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
              <a key={`${client.name}-${i}`} href={client.url} target="_blank" rel="noopener noreferrer"
                className="group flex-shrink-0 flex items-center justify-center w-44 h-20 rounded-2xl border border-white/8 glass hover:border-accent/30 transition-all duration-400" aria-label={client.name}>
                <Image src={client.logo} alt={client.name} width={120} height={50}
                  className="object-contain filter brightness-0 invert opacity-40 group-hover:opacity-80 transition-all duration-400 group-hover:scale-105 max-h-10" />
              </a>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
          {[
            { value: '3+', label: 'Industry Partners' },
            { value: '100%', label: 'Delivery Rate' },
            { value: '24h', label: 'Response Time' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-display font-bold text-accent mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
