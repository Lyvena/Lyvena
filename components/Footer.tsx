'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'
import { useTranslations } from '@/lib/i18n'
import LanguageSwitcher from './LanguageSwitcher'

export default function Footer() {
  const t = useTranslations()
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/lyvena/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Lyvena/Lyvena', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:info@lyvena.xyz', label: 'Email' },
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
            <p className="text-neutral-white/80 leading-relaxed mb-6">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-neutral-charcoal transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <a
                  href="/stories"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  {t.nav.stories}
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
            <h4 className="text-lg font-semibold mb-4">{t.footer.products}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  {t.footer.allProducts}
                </Link>
              </li>
              <li>
                <a
                  href="https://intelekt.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  Intelekt
                </a>
              </li>
              <li>
                <a
                  href="https://kiews.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  Kiews
                </a>
              </li>
              <li>
                <a
                  href="https://prosperahavens.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-white/80 hover:text-accent transition-colors"
                >
                  Prospera havens
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.getInTouch}</h4>
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

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-white/50 text-sm border-t border-neutral-white/10 pt-8">
          <p>© {new Date().getFullYear()} <Link href="/" className="hover:text-accent transition-colors">Lyvena</Link>. {t.footer.copyright}</p>
          <LanguageSwitcher variant="compact" />
        </div>
      </div>
    </footer>
  )
}
