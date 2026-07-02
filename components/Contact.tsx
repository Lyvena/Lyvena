'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [showEmailFallback, setShowEmailFallback] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const HUBSPOT_PORTAL_ID = '244179468'
  const HUBSPOT_FORM_GUID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID || ''

  const submitToFormSubmit = async () => {
    const data = new FormData()
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('organization', formData.organization)
    data.append('budget', formData.budget || 'Not specified')
    data.append('timeline', formData.timeline || 'Not specified')
    data.append('message', formData.message)
    data.append('_subject', `New inquiry from ${formData.name}`)
    data.append('_captcha', 'true')
    data.append('_template', 'table')

    const res = await fetch('https://formsubmit.co/ajax/info@lyvena.xyz', {
      method: 'POST',
      body: data,
    })
    if (!res.ok) throw new Error('FormSubmit failed')
  }

  const submitToHubspot = async () => {
    if (!HUBSPOT_FORM_GUID) return

    await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { name: 'firstname', value: formData.name },
            { name: 'email', value: formData.email },
            { name: 'company', value: formData.organization },
            {
              name: 'message',
              value: `Budget: ${formData.budget || 'Not specified'}\nTimeline: ${formData.timeline || 'Not specified'}\n\n${formData.message}`,
            },
          ],
          context: {
            pageUri: typeof window !== 'undefined' ? window.location.href : 'https://lyvena.xyz',
            pageName: 'Contact Form',
          },
        }),
      }
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setShowEmailFallback(false)

    try {
      await Promise.allSettled([submitToFormSubmit(), submitToHubspot()])

      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => {
        setFormData({ name: '', email: '', organization: '', budget: '', timeline: '', message: '' })
        setSubmitted(false)
      }, 5000)
    } catch {
      setIsSubmitting(false)
      setError('Network error. Please try again or use email below.')
      setShowEmailFallback(true)
    }
  }

  const inputClass =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-accent/60 focus:outline-none focus:bg-white/8 transition-all duration-300 text-sm'

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-neutral-charcoal"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid-white opacity-30" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent/50" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent/80">
              Get Started
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
            Ready to build{' '}
            <span className="gradient-text-static">something real?</span>
          </h2>
          <p className="text-xl text-white/55 max-w-xl leading-relaxed">
            Tell us what&apos;s slow, messy, expensive, or blocked today — we&apos;ll map
            the shortest path forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-white/10 glass-dark p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-14"
                >
                  <div className="text-6xl mb-5">🎉</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-white/55">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-white/70 mb-2 uppercase tracking-wider">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-white/70 mb-2 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-xs font-semibold text-white/70 mb-2 uppercase tracking-wider">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Company or team name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold text-white/70 mb-2 uppercase tracking-wider">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="" className="bg-neutral-charcoal">Select range</option>
                        <option value="Under $5K" className="bg-neutral-charcoal">Under $5K</option>
                        <option value="$5K - $15K" className="bg-neutral-charcoal">$5K – $15K</option>
                        <option value="$15K - $50K" className="bg-neutral-charcoal">$15K – $50K</option>
                        <option value="$50K - $100K" className="bg-neutral-charcoal">$50K – $100K</option>
                        <option value="$100K+" className="bg-neutral-charcoal">$100K+</option>
                        <option value="Not sure yet" className="bg-neutral-charcoal">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-xs font-semibold text-white/70 mb-2 uppercase tracking-wider">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="" className="bg-neutral-charcoal">Select timeline</option>
                        <option value="ASAP" className="bg-neutral-charcoal">ASAP</option>
                        <option value="1-2 weeks" className="bg-neutral-charcoal">1–2 weeks</option>
                        <option value="1-3 months" className="bg-neutral-charcoal">1–3 months</option>
                        <option value="3-6 months" className="bg-neutral-charcoal">3–6 months</option>
                        <option value="Flexible" className="bg-neutral-charcoal">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-white/70 mb-2 uppercase tracking-wider">
                      What do you need help with? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Describe the workflow, product, or AI challenge you're facing..."
                    />
                  </div>

                  {error && (
                    <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {showEmailFallback && (
                    <p className="text-sm text-white/55 text-center">
                      Or email us at{' '}
                      <a href="mailto:info@lyvena.xyz" className="text-accent hover:text-white transition-colors">
                        info@lyvena.xyz
                      </a>
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Book a call CTA */}
            <div className="relative rounded-2xl border border-accent/20 overflow-hidden p-8 glass-dark">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center mb-5">
                  <FaCalendarAlt className="text-accent text-xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Prefer a live conversation?</h3>
                <p className="text-white/55 mb-6 text-sm leading-relaxed">
                  Book a free 30-minute strategy call. We&apos;ll discuss your project,
                  identify the best approach, and outline next steps.
                </p>
                <a
                  href="https://cal.com/akshay1/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FaCalendarAlt className="text-sm" />
                  Book a 30-Min Call
                </a>
              </div>
            </div>

            {/* 4-step process */}
            <div className="rounded-2xl border border-white/10 glass-dark p-8">
              <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider text-sm">
                Our Delivery Process
              </h3>
              <ol className="space-y-4">
                {[
                  { step: '01', label: 'Audit', desc: 'Map the workflow and define success criteria' },
                  { step: '02', label: 'Design', desc: 'Create the AI experience and review paths' },
                  { step: '03', label: 'Pilot', desc: 'Ship a measured pilot with instrumentation' },
                  { step: '04', label: 'Scale', desc: 'Roll out what the team can own and maintain' },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <div>
                      <span className="text-white font-semibold text-sm">{item.label}</span>
                      <span className="text-white/45 text-sm"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Email direct */}
            <div className="rounded-2xl border border-white/10 glass-dark p-6 text-center">
              <FaEnvelope className="text-white/30 text-2xl mx-auto mb-3" />
              <p className="text-white/50 text-sm">
                Prefer email?{' '}
                <a
                  href="mailto:info@lyvena.xyz"
                  className="text-accent hover:text-white transition-colors font-medium"
                >
                  info@lyvena.xyz
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
