'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useTranslations } from '@/lib/i18n'

export default function TermsOfService() {
  const t = useTranslations()
  
  return (
    <main className="min-h-screen bg-neutral-cream">
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-primary-light relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              {t.termsPage.title}
            </h1>
            <p className="text-xl text-neutral-white/90">
              {t.termsPage.effectiveDate}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose max-w-none text-neutral-charcoal/90"
          >
            <div className="space-y-8">
              {/* Last Updated */}
              <p className="text-neutral-charcoal/80 italic">
                {t.termsPage.lastUpdated}
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.acceptance.title}</h2>
                <p className="text-neutral-charcoal/80 leading-relaxed">
                  {t.termsPage.sections.acceptance.content}
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.aboutLyvena.title}</h2>
                <p className="text-neutral-charcoal/80 leading-relaxed">
                  {t.termsPage.sections.aboutLyvena.content}
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.servicesDescription.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.termsPage.sections.servicesDescription.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80 mb-3">
                  {t.termsPage.sections.servicesDescription.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-neutral-charcoal/80">{t.termsPage.sections.servicesDescription.outro}</p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.userObligations.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.termsPage.sections.userObligations.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                  {t.termsPage.sections.userObligations.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.intellectualProperty.title}</h2>

                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">{t.termsPage.sections.intellectualProperty.lyvenaRights.title}</h3>
                    <p className="text-neutral-charcoal/80">{t.termsPage.sections.intellectualProperty.lyvenaRights.content}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">{t.termsPage.sections.intellectualProperty.clientRights.title}</h3>
                    <p className="text-neutral-charcoal/80">{t.termsPage.sections.intellectualProperty.clientRights.content}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">{t.termsPage.sections.intellectualProperty.thirdPartyRights.title}</h3>
                    <p className="text-neutral-charcoal/80">{t.termsPage.sections.intellectualProperty.thirdPartyRights.content}</p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.paymentTerms.title}</h2>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                  {t.termsPage.sections.paymentTerms.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.serviceAvailability.title}</h2>
                <p className="text-neutral-charcoal/80">{t.termsPage.sections.serviceAvailability.content}</p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.limitationOfLiability.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3 font-semibold">{t.termsPage.sections.limitationOfLiability.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                  {t.termsPage.sections.limitationOfLiability.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.indemnification.title}</h2>
                <p className="text-neutral-charcoal/80">{t.termsPage.sections.indemnification.content}</p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.privacy.title}</h2>
                <p className="text-neutral-charcoal/80">{t.termsPage.sections.privacy.content} <Link href="/privacy" className="text-secondary hover:text-primary transition-colors">Privacy Policy</Link></p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.termination.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.termsPage.sections.termination.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                  {t.termsPage.sections.termination.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.modifications.title}</h2>
                <p className="text-neutral-charcoal/80">{t.termsPage.sections.modifications.content}</p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.governingLaw.title}</h2>
                <p className="text-neutral-charcoal/80">{t.termsPage.sections.governingLaw.content}</p>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.severability.title}</h2>
                <p className="text-neutral-charcoal/80">{t.termsPage.sections.severability.content}</p>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.entireAgreement.title}</h2>
                <p className="text-neutral-charcoal/80">{t.termsPage.sections.entireAgreement.content}</p>
              </div>

              {/* Section 16 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.termsPage.sections.contactInfo.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.termsPage.sections.contactInfo.intro}</p>
                <div className="bg-white border border-primary/20 rounded-lg p-6 text-neutral-charcoal/80 shadow-md">
                  <p>Email: <a href="mailto:info@lyvena.xyz" className="text-secondary hover:text-primary transition-colors">info@lyvena.xyz</a></p>
                  <p>Website: <a href="https://lyvena.xyz/" className="text-secondary hover:text-primary transition-colors">https://lyvena.xyz/</a></p>
                </div>
              </div>

              {/* Copyright */}
              <div className="border-t border-neutral-charcoal/10 pt-8 mt-12">
                <p className="text-neutral-charcoal/70 text-center">{t.termsPage.copyright}</p>
              </div>

              {/* Back to Home */}
              <div>
                <Link
                  href="/"
                  className="text-secondary hover:text-primary transition-colors font-semibold"
                >
                  {t.common.backToHome}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
