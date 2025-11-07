'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-dark via-neutral-dark to-primary-dark">
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
              Terms of Service
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
            className="prose prose-invert max-w-none text-neutral-white/90"
          >
            <div className="space-y-8">
              {/* Last Updated */}
              <p className="text-neutral-white/70 italic">
                Last Updated: November 7, 2025
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-neutral-white/80 leading-relaxed">
                  By accessing or using the Lyvena website (https://lyvena.xyz/) and our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our website or services.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">2. About Lyvena</h2>
                <p className="text-neutral-white/80 leading-relaxed">
                  Lyvena is an AI development company that provides rapid website and web application development services powered by artificial intelligence. We deliver clean, high-quality code that saves time and money while offering superior flexibility compared to traditional manual coding or no-code solutions.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">3. Services Description</h2>
                <p className="text-neutral-white/80 mb-3">Our services include:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80 mb-3">
                  <li>AI-powered website development</li>
                  <li>Web application development</li>
                  <li>Custom coding solutions</li>
                  <li>Technical consultation and support</li>
                  <li>Related AI-driven development services</li>
                </ul>
                <p className="text-neutral-white/80">All services are provided subject to these Terms and any additional agreements executed between Lyvena and the client.</p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">4. User Obligations</h2>
                <p className="text-neutral-white/80 mb-3">By using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80">
                  <li>Provide accurate and complete information when requesting services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use our services for illegal, harmful, or unauthorized purposes</li>
                  <li>Respect intellectual property rights of Lyvena and third parties</li>
                  <li>Not attempt to reverse engineer, modify, or compromise our AI systems</li>
                  <li>Pay all fees and charges as agreed upon</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
                
                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-3">5.1 Lyvena's Rights</h3>
                    <p className="text-neutral-white/80">All proprietary technology, AI algorithms, methodologies, and intellectual property used in providing our services remain the exclusive property of Lyvena.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-3">5.2 Client Rights</h3>
                    <p className="text-neutral-white/80">Upon full payment, clients receive ownership rights to the final delivered code and websites created specifically for them, excluding any proprietary Lyvena technology or methodologies used in the development process.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-3">5.3 Third-Party Rights</h3>
                    <p className="text-neutral-white/80">We respect third-party intellectual property rights and expect our users to do the same.</p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">6. Payment Terms</h2>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80">
                  <li>Payment terms will be specified in individual service agreements</li>
                  <li>All fees are due as specified in the applicable agreement</li>
                  <li>Late payments may result in suspension of services</li>
                  <li>Refunds, if applicable, will be handled according to our refund policy</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">7. Service Availability</h2>
                <p className="text-neutral-white/80">While we strive to provide uninterrupted service, we do not guarantee that our services will be available 100% of the time. We may temporarily suspend services for maintenance, updates, or other operational reasons.</p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p className="text-neutral-white/80 mb-3 font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80">
                  <li>Lyvena's total liability shall not exceed the amount paid by the client for the specific service in question</li>
                  <li>We are not liable for indirect, incidental, consequential, or punitive damages</li>
                  <li>We provide services "as is" without warranties of any kind</li>
                  <li>We do not guarantee specific business outcomes or results from our services</li>
                </ul>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">9. Indemnification</h2>
                <p className="text-neutral-white/80">You agree to indemnify and hold harmless Lyvena from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.</p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">10. Privacy</h2>
                <p className="text-neutral-white/80">Your privacy is important to us. Please review our <Link href="/privacy" className="text-accent hover:text-white transition-colors">Privacy Policy</Link>, which governs the collection and use of your information.</p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">11. Termination</h2>
                <p className="text-neutral-white/80 mb-3">Either party may terminate the service relationship with appropriate notice as specified in individual agreements. Upon termination:</p>
                <ul className="list-disc list-inside space-y-2 text-neutral-white/80">
                  <li>All outstanding payments become immediately due</li>
                  <li>Access to ongoing services will be discontinued</li>
                  <li>Data retention will be handled according to our Privacy Policy</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">12. Modifications</h2>
                <p className="text-neutral-white/80">We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website with a new effective date. Continued use of our services after modifications constitutes acceptance of the updated Terms.</p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">13. Governing Law</h2>
                <p className="text-neutral-white/80">These Terms are governed by the laws of Próspera ZEDE, Honduras, without regard to conflict of law principles.</p>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">14. Severability</h2>
                <p className="text-neutral-white/80">If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">15. Entire Agreement</h2>
                <p className="text-neutral-white/80">These Terms, along with our Privacy Policy and any signed service agreements, constitute the entire agreement between you and Lyvena.</p>
              </div>

              {/* Section 16 */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">16. Contact Information</h2>
                <p className="text-neutral-white/80 mb-3">For questions about these Terms, please contact us at:</p>
                <div className="bg-gradient-to-br from-neutral-dark/50 to-primary-dark/50 border border-accent/20 rounded-lg p-6 text-neutral-white/80">
                  <p>Email: <a href="mailto:info@lyvena.xyz" className="text-accent hover:text-white transition-colors">info@lyvena.xyz</a></p>
                  <p>Website: <a href="https://lyvena.xyz/" className="text-accent hover:text-white transition-colors">https://lyvena.xyz/</a></p>
                </div>
              </div>

              {/* Copyright */}
              <div className="border-t border-neutral-white/10 pt-8 mt-12">
                <p className="text-neutral-white/70 text-center">© 2025 Lyvena. All rights reserved.</p>
              </div>

              {/* Back to Home */}
              <div>
                <Link
                  href="/"
                  className="text-accent hover:text-white transition-colors font-semibold"
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
