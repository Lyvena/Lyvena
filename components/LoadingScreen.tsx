'use client'

import { motion } from 'framer-motion'
import { useTranslations } from '@/lib/i18n'

export default function LoadingScreen() {
  const t = useTranslations()
  
  return (
    <div className="fixed inset-0 bg-neutral-charcoal flex items-center justify-center z-50">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-display font-bold gradient-text">
            Lyvena
          </h1>
        </motion.div>

        {/* Modern loading bar */}
        <motion.div
          className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="text-white/60 text-sm mt-6 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t.loading}
        </motion.p>
      </div>
    </div>
  )
}
