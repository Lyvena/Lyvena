'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'

function AnimatedCounter({ value }: { value: string }) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!match || !isInView) return
    const target = parseFloat(match[1])
    const duration = 1800
    const startTime = performance.now()
    const update = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(update)
      else setCount(target)
    }
    requestAnimationFrame(update)
  }, [isInView])
  if (!match) return <div ref={ref}>{value}</div>
  return <div ref={ref}>{count}{match[2]}</div>
}

function NeuralNetworkViz() {
  const nodes: [number, number][] = [
    [12,28],[12,50],[12,72],
    [32,18],[32,38],[32,58],[32,78],
    [52,28],[52,50],[52,72],
    [72,38],[72,62],
    [88,50],
  ]
  const connections: [number, number][] = [
    [0,3],[0,4],[1,3],[1,4],[1,5],[2,4],[2,5],[2,6],
    [3,7],[3,8],[4,7],[4,8],[4,9],[5,8],[5,9],[6,9],
    [7,10],[7,11],[8,10],[8,11],[9,10],[9,11],
    [10,12],[11,12],
  ]
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">
      {connections.map(([a, b], i) => (
        <motion.line key={`c-${i}`}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="#2E8B57" strokeWidth="0.35"
          initial={{ opacity: 0 }} animate={{ opacity: 0.35 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.04 }}
        />
      ))}
      {connections.slice(0, 8).map(([a, b], i) => (
        <motion.circle key={`f-${i}`} r="1" fill="#FFD700" fillOpacity="0.9"
          animate={{
            cx: [nodes[a][0], nodes[b][0]],
            cy: [nodes[a][1], nodes[b][1]],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 1.5 + i * 0.55, ease: 'linear' }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <motion.circle key={`n-${i}`} cx={x} cy={y} r="2.2"
          fill="#2E8B57" fillOpacity="0.35" stroke="#2E8B57" strokeWidth="0.6" strokeOpacity="0.7"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
        />
      ))}
      {[4, 8, 12].map((i) => (
        <motion.circle key={`p-${i}`} cx={nodes[i][0]} cy={nodes[i][1]} r="2.2"
          fill="none" stroke="#FFD700" strokeWidth="0.7"
          animate={{ r: [2.2, 7, 2.2], opacity: [0.9, 0, 0.9] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}
    </svg>
  )
}

const metrics = [
  { value: '5', label: 'Products Built' },
  { value: '7+', label: 'Projects Shipped' },
  { value: '3', label: 'Industries Served' },
  { value: '4-Step', label: 'Delivery Model' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-neutral-charcoal">
      <div className="absolute inset-0 dot-grid-white" />
      <div className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-10 md:px-12 lg:px-24 lg:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[70vh]">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 mb-7">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Applied AI · Real Delivery
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mb-6 text-5xl font-display font-bold leading-[1.08] text-white md:text-6xl lg:text-[4.5rem]">
              We build{' '}
              <span className="relative inline-block">
                <span className="gradient-text-static">AI systems</span>
                <motion.span className="absolute -bottom-1.5 left-0 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }} animate={{ width: '100%' }}
                  transition={{ duration: 0.9, delay: 0.9, ease: 'easeOut' }}
                />
              </span>{' '}
              that solve real problems.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl">
              Lyvena helps operators and product teams move from AI curiosity to
              production systems — internal tools, workflow automation,
              customer-facing AI features, and delivery plans with clear
              ownership, evaluation, and human review.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col gap-4 sm:flex-row">
              <a href="https://cal.com/akshay1/30min" target="_blank" rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-neutral-charcoal font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 warm-shadow">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaCalendarAlt className="relative text-base" />
                <span className="relative">Book a Strategy Call</span>
              </a>
              <Link href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:border-accent/60 hover:text-accent glass">
                See Our Products
                <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['🚀','🧠','⚡','🔒'].map((emoji, i) => (
                  <motion.div key={i} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.0 + i * 0.1 }}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm glass">
                    {emoji}
                  </motion.div>
                ))}
              </div>
              <p className="text-white/40 text-sm">Trusted by innovative teams worldwide</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 50, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex lg:col-span-5 items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-transparent to-accent/15 rounded-3xl blur-2xl animate-breathe" />
              <div className="relative rounded-3xl border border-white/10 glass overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <NeuralNetworkViz />
                <motion.div className="absolute top-4 right-4 glass-dark rounded-xl px-3 py-1.5 border border-accent/30"
                  animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <p className="text-accent text-xs font-bold tracking-wide">AI POWERED</p>
                  </div>
                </motion.div>
                <motion.div className="absolute bottom-4 left-4 glass-dark rounded-xl px-3 py-1.5 border border-primary/30"
                  animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-light animate-pulse" />
                    <p className="text-primary-light text-xs font-bold tracking-wide">PRODUCTION READY</p>
                  </div>
                </motion.div>
                <motion.div className="absolute top-4 left-4 glass-dark rounded-xl px-3 py-1.5 border border-white/10"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
                  <p className="text-white/50 text-xs">5+ products shipped</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <motion.div key={metric.label}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 glass p-5 overflow-hidden hover:border-accent/30 transition-all duration-400 cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="relative">
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1 counter-glow">
                  <AnimatedCounter value={metric.value} />
                </div>
                <p className="text-sm text-white/50 font-medium">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>
        <p className="text-white/25 text-xs tracking-[0.2em] uppercase font-medium">Explore</p>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  )
}
