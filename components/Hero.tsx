'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-accent/30 to-secondary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-primary/30 to-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-white/80 font-medium">AI for Good • Ethical Innovation</span>
          </motion.div>

          {/* Logo/Brand */}
          <motion.h1
            className="text-7xl md:text-9xl font-display font-bold mb-6 text-glow"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">Lyvena</span>
          </motion.h1>

          {/* Main Tagline */}
          <motion.h2
            className="text-2xl md:text-4xl font-semibold text-white/90 mb-6 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Empowering Humanity with{' '}
            <span className="text-accent">Ethical Intelligence</span>
          </motion.h2>

          {/* Value Proposition */}
          <motion.p
            className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We build AI solutions that solve real-world problems—from predicting patient needs
            to automating school systems—while respecting privacy, human dignity, and the planet.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg shine"
              aria-label="Start a conversation with Lyvena"
            >
              Start a Conversation
            </button>
            <a
              href="#services"
              className="btn-secondary text-lg"
              aria-label="Explore our services"
            >
              Explore Our Work
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
