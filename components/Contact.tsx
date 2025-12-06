'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { useTranslations } from '@/lib/i18n'

export default function Contact() {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectIdea: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0A6C74', '#00D4FF', '#F8F9FA'],
        })

        setIsSubmitting(false)
        setSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', projectIdea: '', message: '' })
          setSubmitted(false)
        }, 3000)
      } else {
        alert(t.contact.error.send)
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert(t.contact.error.send)
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark relative overflow-hidden"
    >
      {/* Animated background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">{t.contact.label}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-neutral-charcoal/50 to-primary-dark/50 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm hover:border-accent/40 transition-all duration-300">
              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {t.contact.success.title}
                  </h3>
                  <p className="text-neutral-white/80">
                    {t.contact.success.message}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectIdea"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      {t.contact.form.projectIdea}
                    </label>
                    <input
                      type="text"
                      id="projectIdea"
                      name="projectIdea"
                      value={formData.projectIdea}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder={t.contact.form.projectIdeaPlaceholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/40 focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder={t.contact.form.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Why choose us */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">{t.contact.whyPartner.title}</h3>
              <ul className="space-y-4">
                {t.contact.whyPartner.reasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span className="text-neutral-white/90">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
