'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from '@/lib/i18n'

export default function Clients() {
  const t = useTranslations()
  const clients = [
    {
      name: 'NEAR Protocol',
      logo: '/logos/near-protocol.svg',
      url: 'https://near.org'
    },
    {
      name: 'SuperWorld',
      logo: '/logos/superworldapp.svg',
      url: 'https://www.superworldapp.com/'
    }
  ]

  return (
    <section className="py-16 bg-neutral-charcoal border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-white/50 text-sm uppercase tracking-widest font-medium">
            {t.clients.trustedBy}
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex items-center justify-center"
            >
              <div className="relative w-40 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={64}
                  className="object-contain filter brightness-0 invert opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  priority
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
