'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaLinkedin } from 'react-icons/fa'

export default function About() {
  const team = [
    {
      name: 'Andriy',
      role: 'Founder & CEO',
      linkedin: 'https://www.linkedin.com/in/Akshay155/',
      description: 'Visionary leader driving Lyvena\'s mission to develop AI for good.',
    },
    {
      name: 'Aryna',
      role: 'Chief Designer & COO',
      linkedin: 'https://www.linkedin.com/in/unicornixa/',
      description: 'Creative strategist ensuring ethical design and operational excellence.',
    },
  ]

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
              About Lyvena
            </h1>
            <p className="text-xl text-neutral-white/90 max-w-2xl mx-auto">
              Pioneering ethical AI development for a better future
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
                Lyvena is an Orthodox Christian company dedicated to researching and developing Artificial SuperIntelligence with a clear purpose: <span className="text-accent font-semibold">AI for Good</span>.
              </p>
              <p className="text-lg text-neutral-white/80 leading-relaxed mb-6">
                We believe that artificial intelligence should be developed with ethical principles, transparency, and a commitment to creating equitable digital futures. Our work is grounded in values that prioritize human flourishing and responsible innovation.
              </p>
              <p className="text-lg text-neutral-white/80 leading-relaxed">
                Every solution we build is designed to amplify human potential, solve meaningful problems, and contribute positively to society.
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
                    To pioneer ethical AI development that serves humanity and reflects our commitment to responsible innovation.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-3">Our Values</h3>
                  <ul className="space-y-2 text-neutral-white/80">
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Ethical AI development with transparency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Commitment to positive social impact</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Cutting-edge technology with integrity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Inclusive and accessible solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-dark/50 to-primary-dark/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-neutral-white/70 max-w-2xl mx-auto">
              Visionary leaders driving Lyvena's mission forward
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
                <div className="bg-gradient-to-br from-neutral-dark/50 to-primary-dark/50 border border-accent/20 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300">
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
                    className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-semibold"
                  >
                    <FaLinkedin className="text-xl" />
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Employees Section */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Our AI Employees
            </h2>
            <p className="text-xl text-neutral-white/70 max-w-2xl mx-auto">
              Meet our team of AI Employees working to scale your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'SEO Blog Writer',
                description: 'Writes SEO-optimized blog posts that make Google happy, your audience obsessed, and your competitors deeply uncomfortable',
                image: 'https://www.marblism.com/ai-employees/writer.png',
              },
              {
                name: 'Executive Assistant (Eva)',
                description: 'Crafts email replies, filters out junk emails, manages your calendar and takes meeting notes — so you look productive',
                image: 'https://www.marblism.com/ai-employees/eva.png',
              },
              {
                name: 'Community Manager (Sonny)',
                description: 'Turns your social media into a lead-generating machine — without you having to dance on camera',
                image: 'https://www.marblism.com/ai-employees/sonny.png',
              },
              {
                name: 'Lead Generation (Stan)',
                description: 'Finds leads, sends cold emails and follow-ups — turning "not interested" into "where do I sign?"',
                image: 'https://www.marblism.com/ai-employees/stan.png',
              },
              {
                name: 'Legal Assistant (Linda)',
                description: 'Answers your contract questions and clarifies legal documents — so you can stop pretending you read them',
                image: 'https://www.marblism.com/ai-employees/linda.png',
              },
              {
                name: 'Receptionist (Rachel)',
                description: 'Answers calls while you focus on what matters. Professional, reliable, and always available',
                image: 'https://www.marblism.com/ai-employees/rachel.png',
              },
            ].map((employee, index) => (
              <motion.div
                key={employee.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-neutral-dark/50 to-primary-dark/50 border border-accent/20 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(employee.name)
                      }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">{employee.name}</h3>
                    <p className="text-neutral-white/80 text-sm leading-relaxed mb-4 flex-grow">
                      {employee.description}
                    </p>
                    <a
                      href="https://www.marblism.com/?via=1178f3"
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <a
              href="https://www.marblism.com/?via=1178f3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Explore Our AI Employees
            </a>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build the Future Together?
            </h2>
            <p className="text-lg text-neutral-white/90 mb-8">
              Join us in developing AI for good. Let's create solutions that make a positive impact.
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
