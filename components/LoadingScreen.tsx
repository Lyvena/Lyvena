'use client'

import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-light flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="text-7xl font-display font-bold text-white">
            Lyvena
          </h1>
        </motion.div>

        {/* Loading spinner */}
        <motion.div
          className="spinner mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        {/* Loading text */}
        <motion.p
          className="text-white text-lg mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Loading amazing experiences...
        </motion.p>
      </div>
    </div>
  )
}
