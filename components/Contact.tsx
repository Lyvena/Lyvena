'use client'

import { useState } from 'react'
import confetti from 'canvas-confetti'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectIdea: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const subject = `Lyvena inquiry from ${formData.name}`
      const body = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Organization: ${formData.organization || 'Not provided'}`,
        `Project Idea: ${formData.projectIdea || 'Not provided'}`,
        '',
        formData.message,
      ].join('\n')

      window.location.href = `mailto:info@lyvena.xyz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0A6C74', '#00D4FF', '#F8F9FA'],
      })

      setIsSubmitting(false)
      setSubmitted(true)

      setTimeout(() => {
        setFormData({ name: '', email: '', organization: '', projectIdea: '', message: '' })
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Error sending message:', error)
      setError('Unable to open your email client. Please email info@lyvena.xyz directly.')
      setIsSubmitting(false)
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
            Contact
          </p>
          <h2 className="mb-4 text-4xl font-display font-bold text-white md:text-5xl">
            Bring a real workflow, product idea, or AI rollout question
          </h2>
          <p className="text-xl text-neutral-white/70">
            The best first conversations are concrete. Tell us what is slow, messy, expensive,
            or blocked today and we will map the shortest credible path forward.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-neutral-charcoal/50 to-primary-dark/50 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Thank You!
                  </h3>
                  <p className="text-neutral-white/70">
                    Your email draft is ready. Send it and we&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder="Company, team, or product"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="projectIdea"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Project Idea
                    </label>
                    <input
                      type="text"
                      id="projectIdea"
                      name="projectIdea"
                      value={formData.projectIdea}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder="Brief description of your project"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-neutral-charcoal/50 border border-accent/20 rounded-lg text-white placeholder-neutral-white/40 focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>

                  {error ? (
                    <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Preparing...' : 'Prepare Email'}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">What makes a good first engagement</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-neutral-white/90">A specific workflow or operator pain point</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-neutral-white/90">A product goal tied to adoption, speed, or quality</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-neutral-white/90">A team ready to pilot, measure, and iterate</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-neutral-white/90">A willingness to define human review and guardrails upfront</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-white/10 bg-neutral-charcoal/50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Prefer email?</h3>
              <p className="mb-3 text-neutral-white/70">
                Reach us directly at{' '}
                <a href="mailto:info@lyvena.xyz" className="text-accent transition-colors hover:text-white">
                  info@lyvena.xyz
                </a>
                .
              </p>
              <p className="text-sm text-neutral-white/55">
                Include the workflow, team, and outcome you care about most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
