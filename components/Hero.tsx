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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-cream via-primary/10 to-accent/20"
    >
      {/* Gentle organic background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating organic shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

        {/* Subtle wave pattern */}
        <svg className="absolute bottom-0 w-full opacity-30" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#4A7F5F"
            fillOpacity="0.15"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Brand */}
          <motion.h1
            className="text-6xl md:text-8xl font-display font-bold text-primary mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Lyvena
          </motion.h1>

          {/* Main Tagline */}
          <motion.h2
            className="text-2xl md:text-4xl font-semibold text-neutral-charcoal mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Empowering Humanity with Ethical Intelligence
          </motion.h2>

          {/* Value Proposition */}
          <motion.p
            className="text-lg md:text-xl text-neutral-charcoal/80 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We build AI solutions that solve real-world problems—from predicting patient needs
            to automating school systems—while respecting privacy, human dignity, and the planet.
          </motion.p>

          {/* Three Pillars */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">🏢</div>
              <h3 className="font-semibold text-neutral-charcoal mb-1">For Organizations</h3>
              <p className="text-sm text-neutral-charcoal/70">Automate with conscience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌍</div>
              <h3 className="font-semibold text-neutral-charcoal mb-1">For Communities</h3>
              <p className="text-sm text-neutral-charcoal/70">Technology that serves people</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-semibold text-neutral-charcoal mb-1">For the Future</h3>
              <p className="text-sm text-neutral-charcoal/70">Sustainable innovation</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg warm-shadow"
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

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-neutral-charcoal/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔒</span>
              <span>Privacy-First</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span>Sustainable</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤝</span>
              <span>Community-Driven</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
