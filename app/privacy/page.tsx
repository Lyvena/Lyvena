'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useTranslations } from '@/lib/i18n'

export default function PrivacyPolicy() {
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
              {t.privacyPage.title}
            </h1>
            <p className="text-xl text-neutral-white/90">
              {t.privacyPage.effectiveDate}
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
                {t.privacyPage.lastUpdated}
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.introduction.title}</h2>
                <p className="text-neutral-charcoal/80 leading-relaxed">
                  {t.privacyPage.sections.introduction.content}
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.informationWeCollect.title}</h2>

                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">{t.privacyPage.sections.informationWeCollect.personalInfo.title}</h3>
                    <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.informationWeCollect.personalInfo.intro}</p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                      {t.privacyPage.sections.informationWeCollect.personalInfo.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">{t.privacyPage.sections.informationWeCollect.autoCollected.title}</h3>
                    <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.informationWeCollect.autoCollected.intro}</p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                      {t.privacyPage.sections.informationWeCollect.autoCollected.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">{t.privacyPage.sections.informationWeCollect.technicalInfo.title}</h3>
                    <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.informationWeCollect.technicalInfo.intro}</p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                      {t.privacyPage.sections.informationWeCollect.technicalInfo.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.howWeUse.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.howWeUse.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                  {t.privacyPage.sections.howWeUse.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.infoSharing.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.infoSharing.intro}</p>

                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">{t.privacyPage.sections.infoSharing.serviceProviders.title}</h3>
                    <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.infoSharing.serviceProviders.intro}</p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                      {t.privacyPage.sections.infoSharing.serviceProviders.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">{t.privacyPage.sections.infoSharing.legalRequirements.title}</h3>
                    <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.infoSharing.legalRequirements.intro}</p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                      {t.privacyPage.sections.infoSharing.legalRequirements.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">{t.privacyPage.sections.infoSharing.businessTransfers.title}</h3>
                    <p className="text-neutral-charcoal/80">{t.privacyPage.sections.infoSharing.businessTransfers.content}</p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.dataSecurity.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.dataSecurity.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                  {t.privacyPage.sections.dataSecurity.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.dataRetention.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.dataRetention.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80 mb-3">
                  {t.privacyPage.sections.dataRetention.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-neutral-charcoal/80">{t.privacyPage.sections.dataRetention.outro}</p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.privacyRights.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.privacyRights.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80 mb-3">
                  {t.privacyPage.sections.privacyRights.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-neutral-charcoal/80">{t.privacyPage.sections.privacyRights.outro}</p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.cookies.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.cookies.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80 mb-3">
                  {t.privacyPage.sections.cookies.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-neutral-charcoal/80">{t.privacyPage.sections.cookies.outro}</p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.internationalTransfers.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.internationalTransfers.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                  {t.privacyPage.sections.internationalTransfers.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.contactInfo.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.contactInfo.intro}</p>
                <div className="bg-white border border-primary/20 rounded-lg p-6 text-neutral-charcoal/80 shadow-md">
                  <p><strong>Lyvena</strong></p>
                  <p>Email: <a href="mailto:info@lyvena.xyz" className="text-secondary hover:text-primary transition-colors">info@lyvena.xyz</a></p>
                  <p>Website: <a href="https://lyvena.xyz/" className="text-secondary hover:text-primary transition-colors">https://lyvena.xyz/</a></p>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.changes.title}</h2>
                <p className="text-neutral-charcoal/80 mb-3">{t.privacyPage.sections.changes.intro}</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80 mb-3">
                  {t.privacyPage.sections.changes.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <p className="text-neutral-charcoal/80">{t.privacyPage.sections.changes.outro}</p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{t.privacyPage.sections.thirdPartyLinks.title}</h2>
                <p className="text-neutral-charcoal/80">{t.privacyPage.sections.thirdPartyLinks.content}</p>
              </div>

              {/* Back to Home */}
              <div className="border-t border-neutral-charcoal/10 pt-8 mt-12">
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
