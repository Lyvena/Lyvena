'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/lyvena/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Lyvena/Lyvena', label: 'GitHub' },
  ]

  return (
    <footer className="bg-neutral-charcoal text-white relative overflow-hidden border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/">
              <h3 className="text-3xl font-display font-bold mb-4 gradient-text hover:opacity-80 transition-opacity cursor-pointer">
                Lyvena
              </h3>
            </Link>
            <p className="text-neutral-white/80 leading-relaxed">
              An Orthodox Christian company pioneering Artificial SuperIntelligence for the good of humanity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['services', 'portfolio', 'contact'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="text-neutral-white/80 hover:text-accent transition-colors capitalize"
                  >
                    {section}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/about"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="/stories"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  Stories
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://kiews.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  Kiews
                </a>
              </li>
              <li>
                <a
                  href="https://intelekt.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  Intelekt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-neutral-white/80 text-sm leading-relaxed">
              <a href="mailto:info@lyvena.xyz" className="hover:text-accent transition-colors">
                info@lyvena.xyz
              </a>
              <br /><br />
              Beta Building, Oficina 6 Próspera ZEDE<br />
              St. John's Bay<br />
              Roatán<br />
              Islas de Bahia 34101<br />
              Honduras
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-neutral-charcoal transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="text-xl" />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-neutral-white/50 text-sm border-t border-neutral-white/10 pt-8">
          <p>© {new Date().getFullYear()} <Link href="/" className="hover:text-accent transition-colors">Lyvena</Link>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
