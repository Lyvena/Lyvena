'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaComments, FaTimes } from 'react-icons/fa'

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Chat bubble button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 p-4 bg-accent text-white rounded-full shadow-lg hover:shadow-2xl transition-shadow z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat"
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaComments className="text-2xl" />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 left-8 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
              <h3 className="font-bold text-lg">Quick Inquiry</h3>
              <p className="text-sm opacity-90">We typically reply within minutes</p>
            </div>

            {/* Chat body */}
            <div className="p-4 space-y-4">
              <div className="bg-neutral-gray rounded-lg p-3">
                <p className="text-sm text-neutral-charcoal">
                  👋 Hi! How can we help you today?
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                    setIsOpen(false)
                  }}
                  className="w-full text-left p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  💼 Start a project
                </button>
                <button
                  onClick={() => {
                    const servicesSection = document.getElementById('services')
                    servicesSection?.scrollIntoView({ behavior: 'smooth' })
                    setIsOpen(false)
                  }}
                  className="w-full text-left p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  🔍 Learn about our services
                </button>
                <button
                  onClick={() => {
                    const portfolioSection = document.getElementById('proof')
                    portfolioSection?.scrollIntoView({ behavior: 'smooth' })
                    setIsOpen(false)
                  }}
                  className="w-full text-left p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  📂 View our work
                </button>
              </div>
            </div>

            {/* Chat footer */}
            <div className="p-4 bg-neutral-gray/30 text-center text-xs text-neutral-charcoal/70">
              Powered by Lyvena AI
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
