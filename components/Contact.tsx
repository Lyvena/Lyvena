'use client'

import { useState } from 'react'
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setShowEmailFallback(false)

    try {
      // Submit to HubSpot via their Forms API
      const hubspotData = {
        fields: [
          { name: 'firstname', value: formData.name },
          { name: 'email', value: formData.email },
          { name: 'company', value: formData.organization },
          { name: 'message', value: `Budget: ${formData.budget || 'Not specified'}\nTimeline: ${formData.timeline || 'Not specified'}\n\n${formData.message}` },
        ],
        context: {
          pageUri: typeof window !== 'undefined' ? window.location.href : 'https://lyvena.xyz',
          pageName: 'Contact Form',
        },
      }

      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/244179468/your-form-guid',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(hubspotData),
        }
      )

      if (!response.ok) {
        setIsSubmitting(false)
        setError('We could not submit your request right now. Please try again or use email below.')
        setShowEmailFallback(true)
        return
      }

      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => {
        setFormData({ name: '', email: '', organization: '', budget: '', timeline: '', message: '' })
        setSubmitted(false)
      }, 5000)
    } catch {
      setIsSubmitting(false)
      setError('Network error while sending your request. Please try again or use email below.')
      setShowEmailFallback(true)
    }
  }

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent/80">
            Get Started
          </p>
          <h2 className="mb-4 text-4xl font-display font-bold text-white md:text-5xl">
            Ready to build something real?
          </h2>
          <p className="text-xl text-neutral-white/85">
            Tell us what&apos;s slow, messy, expensive, or blocked today and we&apos;ll map the shortest path forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="bg-gradient-to-br from-neutral-charcoal/50 to-primary-dark/50 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-neutral-white/70">We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/60 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/60 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-white mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/60 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                      placeholder="Company or team"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-white mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                      >
                        <option value="">Select range</option>
                        <option value="Under $5K">Under $5K</option>
                        <option value="$5K - $15K">$5K - $15K</option>
                        <option value="$15K - $50K">$15K - $50K</option>
                        <option value="$50K - $100K">$50K - $100K</option>
                        <option value="$100K+">$100K+</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-white mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1-2 weeks">1-2 weeks</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      What do you need help with? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/60 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors resize-none"
                      placeholder="Describe the workflow, product, or AI challenge you're facing..."
                    />
                  </div>

                  {error && (
                    <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {showEmailFallback && (
                    <p className="text-sm text-neutral-white/85">
                      Need an immediate fallback? Email{' '}
                      <a href="mailto:info@lyvena.xyz" className="text-accent hover:text-white underline underline-offset-2 transition-colors">
                        info@lyvena.xyz
                      </a>
                      .
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Right side - Booking + Info */}
          <div className="space-y-6">
            {/* Book a Call - Primary CTA */}
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-3">Prefer a live conversation?</h3>
              <p className="text-neutral-white/85 mb-6">
                Book a free 30-minute strategy call. We&apos;ll discuss your project, identify the best approach, and outline next steps.
              </p>
              <a
                href="https://cal.com/akshay1/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-center"
              >
                <FaCalendarAlt />
                Book a 30-Min Call
              </a>
            </div>

            {/* How We Work */}
            <div className="rounded-2xl border border-neutral-white/10 bg-neutral-charcoal/50 p-8">
              <h3 className="mb-4 text-xl font-bold text-white">Our Delivery Process</h3>
              <ol className="space-y-3">
                {[
                  { step: '1', label: 'Audit', desc: 'Map the workflow and define success criteria' },
                  { step: '2', label: 'Design', desc: 'Create the AI experience and review paths' },
                  { step: '3', label: 'Pilot', desc: 'Ship a measured pilot with instrumentation' },
                  { step: '4', label: 'Scale', desc: 'Roll out what the team can own and maintain' },
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/20 text-accent text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <div>
                      <span className="text-white font-semibold">{item.label}</span>
                      <span className="text-neutral-white/80 text-sm"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Email fallback */}
            <div className="rounded-2xl border border-neutral-white/10 bg-neutral-charcoal/50 p-6 text-center">
              <p className="text-neutral-white/85 text-sm">
                Or email us directly at{' '}
                <a href="mailto:info@lyvena.xyz" className="text-accent hover:text-white transition-colors font-medium">
                  info@lyvena.xyz
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
