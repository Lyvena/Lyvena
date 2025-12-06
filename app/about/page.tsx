'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaLinkedin } from 'react-icons/fa'
import { useTranslations } from '@/lib/i18n'

export default function About() {
  const t = useTranslations()
  
  const team = [
    {
      name: 'Aryna Verchenko',
      role: t.aboutPage.leadership.members.aryna.role,
      linkedin: 'https://www.linkedin.com/in/unicornixa/',
      description: t.aboutPage.leadership.members.aryna.description,
    },
    {
      name: 'Akshay',
      role: t.aboutPage.leadership.members.akshay.role,
      linkedin: 'https://www.linkedin.com/in/Akshay155/',
      description: t.aboutPage.leadership.members.akshay.description,
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
              {t.aboutPage.hero.title}
            </h1>
            <p className="text-xl text-neutral-white/90 max-w-2xl mx-auto">
              {t.aboutPage.hero.description}
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
                {t.aboutPage.mission.title}
              </h2>
              <p className="text-lg text-neutral-white/80 leading-relaxed mb-6">
                {t.aboutPage.mission.description1.split('AI for Good')[0]}<span className="text-accent font-semibold">AI for Good</span>{t.aboutPage.mission.description1.split('AI for Good')[1] || '.'}
              </p>
              <p className="text-lg text-neutral-white/80 leading-relaxed mb-6">
                {t.aboutPage.mission.description2}
              </p>
              <p className="text-lg text-neutral-white/80 leading-relaxed">
                {t.aboutPage.mission.description3}
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
                  <h3 className="text-2xl font-bold text-accent mb-3">{t.aboutPage.vision.title}</h3>
                  <p className="text-neutral-white/80">
                    {t.aboutPage.vision.description}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-3">{t.aboutPage.values.title}</h3>
                  <ul className="space-y-2 text-neutral-white/80">
                    {t.aboutPage.values.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-3 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
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
              {t.aboutPage.aiTeam.title}
            </h2>
            <p className="text-xl text-neutral-white/80 max-w-2xl mx-auto">
              {t.aboutPage.aiTeam.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Penny',
                role: t.aboutPage.aiTeam.members.penny.role,
                description: t.aboutPage.aiTeam.members.penny.description,
                image: '/penny.webp',
                link: 'https://www.marblism.com/ai-employees/penny?via=1178f3',
              },
              {
                name: 'Eva',
                role: t.aboutPage.aiTeam.members.eva.role,
                description: t.aboutPage.aiTeam.members.eva.description,
                image: '/eva.webp',
                link: 'https://www.marblism.com/ai-employees/eva?via=1178f3',
              },
              {
                name: 'Sonny',
                role: t.aboutPage.aiTeam.members.sonny.role,
                description: t.aboutPage.aiTeam.members.sonny.description,
                image: '/sonny.webp',
                link: 'https://www.marblism.com/ai-employees/sonny?via=1178f3',
              },
              {
                name: 'Stan',
                role: t.aboutPage.aiTeam.members.stan.role,
                description: t.aboutPage.aiTeam.members.stan.description,
                image: '/stan.webp',
                link: 'https://www.marblism.com/ai-employees/stan?via=1178f3',
              },
              {
                name: 'Linda',
                role: t.aboutPage.aiTeam.members.linda.role,
                description: t.aboutPage.aiTeam.members.linda.description,
                image: '/linda.webp',
                link: 'https://www.marblism.com/ai-employees/linda?via=1178f3',
              },
              {
                name: 'Rachel',
                role: t.aboutPage.aiTeam.members.rachel.role,
                description: t.aboutPage.aiTeam.members.rachel.description,
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
                      {t.aboutPage.aiTeam.learnMore}
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
              {t.aboutPage.leadership.title}
            </h2>
            <p className="text-xl text-neutral-white/80 max-w-2xl mx-auto">
              {t.aboutPage.leadership.description}
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
              {t.aboutPage.cta.title}
            </h2>
            <p className="text-lg text-neutral-charcoal/90 mb-8">
              {t.aboutPage.cta.description}
            </p>
            <Link
              href="/#contact"
              className="btn-primary inline-block"
            >
              {t.aboutPage.cta.button}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
