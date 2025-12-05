'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaLock, FaLeaf, FaUsers, FaLightbulb, FaEye } from 'react-icons/fa'

const coreValues = [
  {
    icon: FaShieldAlt,
    title: 'Ethical AI',
    description: 'Prioritizing responsible and transparent AI development that respects human values and dignity',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: FaLock,
    title: 'Privacy First',
    description: 'Protecting user data and digital rights with industry-leading security practices',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: FaLeaf,
    title: 'Sustainability',
    description: 'Building technology that benefits the planet and promotes environmental stewardship',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: FaUsers,
    title: 'Community Impact',
    description: 'Empowering communities through accessible technology and meaningful social programs',
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    icon: FaLightbulb,
    title: 'Innovation',
    description: 'Pushing boundaries while maintaining ethical standards and user-centric design',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: FaEye,
    title: 'Transparency',
    description: 'Open communication and accountable practices in everything we do',
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-neutral-cream relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-charcoal mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-neutral-charcoal/70 max-w-3xl mx-auto">
            Lyvena is pioneering AI that puts people first. We believe technology should empower
            communities, protect privacy, and promote sustainability.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-gray/20 hover:border-primary/30 relative overflow-hidden group-hover:-translate-y-2">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.gradient} mb-6`}>
                  <value.icon className="text-2xl text-white" />
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-neutral-charcoal mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h4>

                {/* Description */}
                <p className="text-neutral-charcoal/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a href="/case-study" className="btn-primary">
              Read Case Studies
            </a>
            <a href="/about" className="btn-secondary">
              Learn More About Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
