'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/company/lyvena/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/lyvena', label: 'GitHub' },
  ]

  const productLinks = [
    { label: 'Intelekt', href: '/products/intelekt' },
    { label: 'Prospera Havens', href: '/products/prospera-havens' },
    { label: 'Mojoflow', href: '/products/mojoflow' },
    { label: 'Seerist', href: '/products/seerist' },
    { label: 'Kiews', href: '/products/kiews' },
  ]

  const quickLinks = [
    { label: 'Services', href: '/#services' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Stories', href: '/stories' },
    { label: 'Proof', href: '/#proof' },
    { label: 'Contact', href: '/#contact' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ]

  return (
    <footer className="relative overflow-hidden bg-[#0d0f12] text-white">
      {/* Background */}
      <div className="absolute inset-0 dot-grid-white opacity-15" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[100px]" />

      {/* Top CTA bar */}
      <div className="relative z-10 border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                Ready to ship something real?
              </h3>
              <p className="text-white/45 text-sm">
                Book a free 30-min strategy call — no commitment required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://cal.com/akshay1/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
              >
                Book a Strategy Call
                <FaArrowRight className="text-xs" />
              </a>
              <Link
                href="/#contact"
                className="px-6 py-3 border border-white/15 text-white/70 hover:text-accent hover:border-accent/40 rounded-full font-semibold text-sm transition-all duration-300 text-center"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <h3 className="text-3xl font-display font-bold mb-4 gradient-text-static hover:opacity-80 transition-opacity cursor-pointer">
                Lyvena
              </h3>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Applied AI systems, product engineering, and responsible delivery
              for teams that need more than a demo. Built with integrity.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/40 transition-all duration-300 glass"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/55 hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/55 hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/8 mt-2">
                <Link
                  href="/products"
                  className="text-accent text-xs font-semibold hover:text-accent-light transition-colors"
                >
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-white/45 leading-relaxed">
              <p>
                <a
                  href="mailto:info@lyvena.xyz"
                  className="text-accent hover:text-accent-light transition-colors font-medium"
                >
                  info@lyvena.xyz
                </a>
              </p>
              <p className="text-xs leading-relaxed">
                Beta Building, Oficina 6<br />
                Próspera ZEDE, St. John&apos;s Bay<br />
                Roatán, Islas de Bahia 34101<br />
                Honduras
              </p>
            </div>

            {/* Mini stats */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { val: '5+', label: 'Products' },
                { val: '3', label: 'Industries' },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-white/8 glass p-3 text-center">
                  <div className="text-lg font-display font-bold gradient-text-static">{s.val}</div>
                  <div className="text-xs text-white/35">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/8 pt-8">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()}{' '}
            <Link href="/" className="hover:text-accent transition-colors">
              Lyvena
            </Link>
            . All rights reserved.
          </p>
          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/30 text-xs hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
