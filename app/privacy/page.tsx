'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-neutral-white/90">
              Effective Date: November 7, 2025
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
              <p className="text-neutral-charcoal/70 italic">
                Last Updated: November 7, 2025
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">1. Introduction</h2>
                <p className="text-neutral-charcoal/80 leading-relaxed">
                  Lyvena ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://lyvena.xyz/ and use our AI-driven web development services.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">2. Information We Collect</h2>

                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">2.1 Personal Information</h3>
                    <p className="text-neutral-charcoal/80 mb-3">We may collect personal information that you voluntarily provide, including:</p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-charcoal/80">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Business information (company name, job title, business requirements)</li>
                      <li>Payment information (processed through secure third-party payment processors)</li>
                      <li>Communications and correspondence with us</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">2.2 Automatically Collected Information</h3>
                    <p className="text-neutral-charcoal/80 mb-3">We automatically collect certain information when you visit our website:</p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-white/80">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Device information and operating system</li>
                      <li>Website usage patterns and analytics data</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Referral sources and pages visited</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">2.3 Technical Information</h3>
                    <p className="text-neutral-charcoal/80 mb-3">In providing our AI development services, we may collect:</p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-white/80">
                      <li>Project specifications and requirements</li>
                      <li>Website performance data</li>
                      <li>Development preferences and feedback</li>
                      <li>Usage statistics of delivered solutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
                <p className="text-neutral-charcoal/80 mb-3">We use collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80">
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our AI-driven web development services</li>
                  <li><strong>Communication:</strong> To respond to inquiries, provide customer support, and send service-related notifications</li>
                  <li><strong>Business Operations:</strong> To process transactions, manage accounts, and fulfill contractual obligations</li>
                  <li><strong>Analytics:</strong> To analyze website usage patterns and improve user experience</li>
                  <li><strong>Marketing:</strong> To send promotional materials and updates about our services (with your consent)</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                  <li><strong>Security:</strong> To protect against fraud, unauthorized access, and security threats</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-neutral-charcoal/80 mb-3">We may share your information in the following circumstances:</p>

                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">4.1 Service Providers</h3>
                    <p className="text-neutral-charcoal/80 mb-3">We may share information with trusted third-party service providers who assist in:</p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-white/80">
                      <li>Website hosting and maintenance</li>
                      <li>Payment processing</li>
                      <li>Analytics and performance monitoring</li>
                      <li>Customer relationship management</li>
                      <li>Marketing and communication services</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">4.2 Legal Requirements</h3>
                    <p className="text-neutral-charcoal/80 mb-3">We may disclose information when required by law or to:</p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-white/80">
                      <li>Comply with legal processes, court orders, or government requests</li>
                      <li>Protect our rights, property, or safety</li>
                      <li>Investigate potential violations of our terms of service</li>
                      <li>Prevent fraud or security threats</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">4.3 Business Transfers</h3>
                    <p className="text-neutral-charcoal/80">In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">5. Data Security</h2>
                <p className="text-neutral-charcoal/80 mb-3">We implement appropriate technical and organizational measures to protect your information, including:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Regular security assessments and updates</li>
                  <li>Secure data storage and backup systems</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">6. Data Retention</h2>
                <p className="text-neutral-charcoal/80 mb-3">We retain your information for as long as necessary to:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80 mb-3">
                  <li>Provide our services and fulfill contractual obligations</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Achieve legitimate business purposes</li>
                </ul>
                <p className="text-neutral-charcoal/80">Personal information is typically retained for the duration of our business relationship and for a reasonable period thereafter as required by law.</p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">7. Your Privacy Rights</h2>
                <p className="text-neutral-charcoal/80 mb-3">Depending on your location, you may have the following rights:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80 mb-3">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your information in a portable format</li>
                  <li><strong>Objection:</strong> Object to certain processing of your information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where consent is the legal basis</li>
                </ul>
                <p className="text-neutral-charcoal/80">To exercise these rights, please contact us using the information provided in Section 10.</p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-neutral-charcoal/80 mb-3">We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80 mb-3">
                  <li>Enable website functionality</li>
                  <li>Analyze website performance and usage</li>
                  <li>Personalize content and user experience</li>
                  <li>Facilitate marketing and advertising</li>
                </ul>
                <p className="text-neutral-charcoal/80">You can manage cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality.</p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">9. International Data Transfers</h2>
                <p className="text-neutral-charcoal/80 mb-3">Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during such transfers, including:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80">
                  <li>Standard contractual clauses</li>
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Other legally recognized transfer mechanisms</li>
                </ul>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">10. Contact Information</h2>
                <p className="text-neutral-charcoal/80 mb-3">For questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                <div className="bg-white border border-primary/20 rounded-lg p-6 text-neutral-charcoal/80 shadow-md">
                  <p><strong>Lyvena</strong></p>
                  <p>Email: <a href="mailto:info@lyvena.xyz" className="text-secondary hover:text-primary transition-colors">info@lyvena.xyz</a></p>
                  <p>Website: <a href="https://lyvena.xyz/" className="text-secondary hover:text-primary transition-colors">https://lyvena.xyz/</a></p>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-neutral-charcoal/80 mb-3">We may update this Privacy Policy periodically to reflect changes in our practices, services, or legal requirements. We will notify you of material changes by:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80 mb-3">
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending email notifications for significant changes (where applicable)</li>
                </ul>
                <p className="text-neutral-charcoal/80">Your continued use of our services after such modifications constitutes acceptance of the updated Privacy Policy.</p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">12. Third-Party Links</h2>
                <p className="text-neutral-charcoal/80">Our website may contain links to third-party websites or services. This Privacy Policy does not apply to such third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
              </div>

              {/* Back to Home */}
              <div className="border-t border-neutral-charcoal/10 pt-8 mt-12">
                <Link
                  href="/"
                  className="text-secondary hover:text-primary transition-colors font-semibold"
                >
                  ← Back to Home
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
