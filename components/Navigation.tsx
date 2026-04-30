'use client'

import { useState, useEffect, useRef, useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaChevronDown, FaRobot, FaHome, FaBolt, FaBriefcase, FaCubes } from 'react-icons/fa'

const productSubMenu = [
  { name: 'Intelekt', href: '/products/intelekt', icon: FaRobot, description: 'AI-Native MVP Builder', gradient: 'from-violet-500 to-indigo-500' },
  { name: 'Prospera Havens', href: '/products/prospera-havens', icon: FaHome, description: 'AI-Powered Real Estate', gradient: 'from-cyan-500 to-teal-500' },
  { name: 'Mojoflow', href: '/products/mojoflow', icon: FaBolt, description: 'Workflow Automation', gradient: 'from-orange-500 to-amber-500' },
  { name: 'Seerist', href: '/products/seerist', icon: FaBriefcase, description: 'Revenue Operating System', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Kiews', href: '/products/kiews', icon: FaCubes, description: 'No-Code Blockchain', gradient: 'from-amber-500 to-orange-500' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)
  const productsButtonRef = useRef<HTMLButtonElement>(null)
  const dropdownId = useId()
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/about' },
    { name: 'Stories', href: '/stories' },
    { name: 'Contact', href: '/#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsProductsOpen(false)
        productsButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const isActive = (href: string) => {
    const [basePath, hash] = href.split('#')
    if (href === '/') return pathname === '/'
    if (hash) return pathname === '/'
    return pathname === basePath || pathname.startsWith(`${basePath}/`)
  }

  const isProductsActive = pathname.startsWith('/products')

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-charcoal/90 backdrop-blur-xl shadow-lg border-b border-white/10'
            : 'bg-neutral-charcoal/55 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md">
              <span className="text-2xl font-display font-bold text-white">
                Lyvena
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Home link */}
              <Link
                href="/"
                className={`relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
                  isActive('/') ? 'text-accent' : 'text-white/80 hover:text-white'
                }`}
              >
                Home
                {isActive('/') && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  />
                )}
              </Link>

              {/* Services link */}
              <Link
                href="/#services"
                className={`relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
                  isActive('/#services') ? 'text-accent' : 'text-white/80 hover:text-white'
                }`}
              >
                Services
              </Link>

              {/* Products dropdown */}
              <div ref={productsRef} className="relative">
                <button
                  ref={productsButtonRef}
                  type="button"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  onMouseEnter={() => setIsProductsOpen(true)}
                  className={`relative text-sm font-medium transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
                    isProductsActive ? 'text-accent' : 'text-white/80 hover:text-white'
                  }`}
                  aria-expanded={isProductsOpen}
                  aria-controls={dropdownId}
                  aria-haspopup="menu"
                >
                  Products
                  <FaChevronDown className={`text-[10px] transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                  {isProductsActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      onMouseLeave={() => setIsProductsOpen(false)}
                      id={dropdownId}
                      role="menu"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-neutral-charcoal/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/30 overflow-hidden"
                    >
                      <div className="p-2">
                        {productSubMenu.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            onClick={() => setIsProductsOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            role="menuitem"
                          >
                            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                              <product.icon className="text-white text-sm" />
                            </div>
                            <div>
                              <p className="text-white text-sm font-medium group-hover:text-accent transition-colors">{product.name}</p>
                              <p className="text-white/40 text-xs">{product.description}</p>
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-white/10 mt-1 pt-1">
                          <Link
                            href="/products"
                            onClick={() => setIsProductsOpen(false)}
                            className="flex items-center justify-center px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-accent text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            role="menuitem"
                          >
                            View All Products →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining nav links */}
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
                    isActive(link.href)
                      ? 'text-accent'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Language Switcher & CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/#contact"
                className="px-6 py-2.5 bg-accent text-neutral-charcoal font-semibold rounded-full hover:bg-accent-light transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-neutral-charcoal/95 backdrop-blur-xl pt-24 overflow-y-auto">
              <div className="flex flex-col items-center gap-6 p-6">
                {/* Home */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}>
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${isActive('/') ? 'text-accent' : 'text-white'}`}
                  >
                    Home
                  </Link>
                </motion.div>

                {/* Services */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <Link
                    href="/#services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${isActive('/#services') ? 'text-accent' : 'text-white'}`}
                  >
                    Services
                  </Link>
                </motion.div>

                {/* Products with expandable sub-menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <button
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className={`text-2xl font-medium flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${isProductsActive ? 'text-accent' : 'text-white'}`}
                    aria-expanded={isMobileProductsOpen}
                  >
                    Products
                    <FaChevronDown className={`text-sm transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col items-center gap-3 mt-4 overflow-hidden"
                      >
                        {productSubMenu.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            onClick={() => { setIsMobileMenuOpen(false); setIsMobileProductsOpen(false); }}
                            className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                          >
                            <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                              <product.icon className="text-white text-xs" />
                            </div>
                            <span className="text-lg">{product.name}</span>
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          onClick={() => { setIsMobileMenuOpen(false); setIsMobileProductsOpen(false); }}
                          className="text-accent text-sm font-medium mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                        >
                          View All Products →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* About, Stories, Contact */}
                {navLinks.slice(2).map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 3) * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-2xl font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm ${
                        isActive(link.href) ? 'text-accent' : 'text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-4 flex flex-col items-center gap-4"
                >
                  <Link
                    href="/#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-8 py-3 bg-accent text-neutral-charcoal font-semibold rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
