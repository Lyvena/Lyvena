'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [displayText, setDisplayText] = useState('')
  const fullText = 'AI for Good | Ethical AI Research & Engineering'
  const [showCursor, setShowCursor] = useState(true)

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)

    return () => clearInterval(typingInterval)
  }, [])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Neural network particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }

    const particles: Particle[] = []
    const particleCount = 80
    const connectionDistance = 150

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 212, 255, 0.8)'
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            const opacity = (1 - distance / connectionDistance) * 0.5
            ctx.strokeStyle = `rgba(10, 108, 116, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light"
    >
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      />

      {/* Ocean wave overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          className="absolute bottom-0 w-full wave-animation"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#00D4FF"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
            className="text-6xl md:text-8xl font-display font-bold text-white mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Lyvena
          </motion.h1>

          {/* Typing animation tagline */}
          <div className="mb-8 min-h-[4rem] flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-accent inline-block">
              {displayText}
              <span
                className={`inline-block w-1 h-8 md:h-10 bg-accent ml-1 ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </h2>
          </div>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-neutral-white mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            Transform your ideas into stunning digital experiences
            <br />
            with cutting-edge technology
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToContact}
            className="btn-primary text-lg glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Get in touch with Lyvena"
          >
            Get In Touch
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
