'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaLinkedin } from 'react-icons/fa'

export default function About() {
  const team = [
    {
      name: 'Aryna Verchenko',
      role: 'Chief Designer & COO',
      linkedin: 'https://www.linkedin.com/in/unicornixa/',
      description: 'Creative visionary and operational leader, bringing artistry and precision to everything we build. Aryna ensures our solutions are as beautiful as they are functional.',
    },
    {
      name: 'Akshay',
      role: 'Founder & CEO',
      linkedin: 'https://www.linkedin.com/in/Akshay155/',
      description: 'Founder and driving force behind Lyvena\'s mission to develop AI for good. Akshay leads with conviction that technology can—and must—serve humanity\'s highest aspirations.',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
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
              About Lyvena
            </h1>
            <p className="text-xl text-neutral-white/90 max-w-2xl mx-auto">
              Where faith meets innovation. Building AI that serves humanity with purpose, integrity, and hope.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-white/80 leading-relaxed mb-6">
                Lyvena is an Orthodox Christian company on a mission to develop Artificial SuperIntelligence that truly serves humanity. Our purpose is clear: <span className="text-accent font-semibold">AI for Good</span>.
              </p>
              <p className="text-lg text-neutral-white/80 leading-relaxed mb-6">
                We believe the most powerful technology should be built on the strongest foundation—one of ethics, transparency, and genuine care for human flourishing. Every line of code we write reflects our commitment to responsible innovation.
              </p>
              <p className="text-lg text-neutral-white/80 leading-relaxed">
                From healthcare to education, fintech to Web3, we partner with organizations who share our vision of technology that elevates, empowers, and unites.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-3">Our Vision</h3>
                  <p className="text-neutral-white/80">
                    A world where artificial intelligence amplifies human potential, protects human dignity, and advances the common good—built by people who believe technology can be a force for genuine transformation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-3">Our Values</h3>
                  <ul className="space-y-2 text-neutral-white/80">
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Faith as our foundation, excellence as our standard</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Technology in service of human flourishing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Transparency in everything we build and do</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Long-term thinking over short-term gains</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Meet Our AI Team
            </h2>
            <p className="text-xl text-neutral-white/80 max-w-2xl mx-auto">
              The intelligent assistants who help us deliver exceptional results—efficiently, ethically, and with care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Penny',
                role: 'SEO Blog Writer',
                description: 'Penny lovingly crafts SEO-optimized blog posts that help our audience discover valuable content and keeps our online presence thriving.',
                image: '/penny.webp',
                link: 'https://www.marblism.com/ai-employees/penny?via=1178f3',
              },
              {
                name: 'Eva',
                role: 'Executive Assistant',
                description: 'Eva thoughtfully manages our emails, organizes our calendar, and captures meeting notes — helping our team stay focused on what matters most.',
                image: '/eva.webp',
                link: 'https://www.marblism.com/ai-employees/eva?via=1178f3',
              },
              {
                name: 'Sonny',
                role: 'Community Manager',
                description: 'Sonny nurtures our social media community with engaging content, building meaningful connections and helping our message reach those who need it.',
                image: '/sonny.webp',
                link: 'https://www.marblism.com/ai-employees/sonny?via=1178f3',
              },
              {
                name: 'Stan',
                role: 'Lead Generation Specialist',
                description: 'Stan warmly reaches out to potential partners, building relationships through thoughtful follow-ups and genuine conversations.',
                image: '/stan.webp',
                link: 'https://www.marblism.com/ai-employees/stan?via=1178f3',
              },
              {
                name: 'Linda',
                role: 'Legal Assistant',
                description: 'Linda patiently guides us through contract questions and legal documents, ensuring we understand every detail with clarity and confidence.',
                image: '/linda.webp',
                link: 'https://www.marblism.com/ai-employees/linda?via=1178f3',
              },
              {
                name: 'Rachel',
                role: 'Receptionist',
                description: 'Rachel warmly greets every caller with care and professionalism, ensuring everyone who reaches out feels welcomed and supported around the clock.',
                image: '/rachel.webp',
                link: 'https://www.marblism.com/ai-employees/rachel?via=1178f3',
              },
            ].map((employee, index) => (
              <motion.div
                key={employee.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-neutral-charcoal/50 to-primary-dark/50 border border-accent/20 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 h-full flex flex-col">
                  <div className="overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(employee.name)
                      }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-1">{employee.name}</h3>
                    <p className="text-accent font-semibold text-lg mb-3">{employee.role}</p>
                    <p className="text-neutral-white/80 text-sm leading-relaxed mb-4 flex-grow">
                      {employee.description}
                    </p>
                    <a
                      href={employee.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-white transition-colors font-semibold text-sm"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-charcoal/50 to-primary-dark/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Leadership
            </h2>
            <p className="text-xl text-neutral-white/80 max-w-2xl mx-auto">
              The people behind the mission, committed to building AI that serves the greater good.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-neutral-charcoal/50 to-primary-dark/50 border border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-accent font-semibold text-lg">{member.role}</p>
                  </div>
                  <p className="text-neutral-white/80 text-base leading-relaxed mb-6">
                    {member.description}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-col items-center gap-2 text-accent hover:text-white transition-colors font-semibold"
                  >
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-charcoal mb-4">
              Let's Build Something Meaningful
            </h2>
            <p className="text-lg text-neutral-charcoal/90 mb-8">
              Ready to create technology that makes a real difference? We'd love to hear about your vision.
            </p>
            <Link
              href="/#contact"
              className="btn-primary inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
