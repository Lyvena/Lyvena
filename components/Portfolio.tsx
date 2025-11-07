'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'EthicalAI Chatbot',
    category: 'AI Solutions',
    description: 'Privacy-first conversational AI for customer support with bias detection',
    fullDescription: 'A revolutionary chatbot platform that prioritizes user privacy and ethical AI principles. Features real-time bias detection, transparent decision-making, and GDPR compliance.',
    tech: ['TensorFlow', 'Python', 'React', 'Node.js'],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    impact: '50% reduction in biased responses, 99.9% uptime',
  },
  {
    id: 2,
    title: 'Ocean Data Visualization',
    category: 'Design',
    description: 'Interactive dashboard for marine conservation data',
    fullDescription: 'Beautiful, accessible data visualization platform helping marine biologists track ocean health metrics and coral reef restoration progress.',
    tech: ['D3.js', 'React', 'Figma', 'PostgreSQL'],
    image: 'linear-gradient(135deg, #00D4FF 0%, #0A6C74 100%)',
    impact: 'Used by 15+ conservation organizations',
  },
  {
    id: 3,
    title: 'Fair Trade E-Commerce',
    category: 'Web Development',
    description: 'Ethical marketplace connecting artisans with global buyers',
    fullDescription: 'A fully responsive e-commerce platform that ensures fair compensation for artisans while providing transparent supply chain tracking.',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    impact: '$2M+ in fair trade transactions',
  },
  {
    id: 4,
    title: 'Climate Prediction Model',
    category: 'AI Solutions',
    description: 'Machine learning model for local climate forecasting',
    fullDescription: 'Advanced ML model helping Caribbean communities prepare for climate events with 85% accuracy in 7-day forecasts.',
    tech: ['PyTorch', 'Scikit-learn', 'FastAPI', 'Docker'],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    impact: '85% forecast accuracy, 10K+ users',
  },
  {
    id: 5,
    title: 'Accessible Learning Platform',
    category: 'Web Development',
    description: 'WCAG AAA compliant educational platform',
    fullDescription: 'Inclusive online learning platform with screen reader support, keyboard navigation, and multi-language accessibility features.',
    tech: ['React', 'Node.js', 'ARIA', 'WebAIM'],
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    impact: '100% WCAG AAA compliance',
  },
  {
    id: 6,
    title: 'Community Health Tracker',
    category: 'AI Solutions',
    description: 'Privacy-preserving health monitoring system',
    fullDescription: 'Federated learning-based health tracking app that keeps data on-device while contributing to community health insights.',
    tech: ['TensorFlow Lite', 'Flutter', 'Firebase', 'Blockchain'],
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    impact: 'Zero data breaches, 5K+ active users',
  },
  {
    id: 7,
    title: 'Kiews - No-Code NEAR Integration',
    category: 'Blockchain',
    description: 'Democratizing access to NEAR Protocol through no-code platform',
    fullDescription: 'A groundbreaking no-code platform that enables non-technical users to build and deploy NEAR Protocol integrations. Kiews features a visual workflow builder, smart contract templates, testing sandbox, and comprehensive monitoring dashboard.',
    tech: ['NEAR Protocol', 'WebFlow', 'Rust', 'JavaScript'],
    image: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
    impact: '500+ users, $5M+ transaction volume, 92% satisfaction',
    caseStudyLink: '/case-study',
  },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section
      id="portfolio"
      className="section-padding bg-gradient-to-br from-primary/5 via-neutral-white to-accent/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div
                className="card cursor-pointer overflow-hidden group h-full"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedProject(project)
                  }
                }}
                aria-label={`View details for ${project.title}`}
              >
                {/* Project thumbnail */}
                <div
                  className="h-64 relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-2xl font-display font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-90 mb-4">{project.category}</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-accent font-semibold">Click to learn more →</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <p className="text-neutral-dark/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-neutral-gray text-neutral-dark text-xs font-semibold rounded-full">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-6 right-6 p-2 bg-neutral-gray rounded-full hover:bg-primary hover:text-white transition-colors z-10"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Project hero */}
              <div
                className="h-64 relative"
                style={{ background: selectedProject.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-4xl font-display font-bold mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-lg opacity-90">{selectedProject.category}</p>
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-primary mb-3">About This Project</h4>
                  <p className="text-lg text-neutral-dark leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-primary mb-3">Impact</h4>
                  <p className="text-neutral-dark">{selectedProject.impact}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-primary mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-gray">
                  {selectedProject.caseStudyLink ? (
                    <a
                      href={selectedProject.caseStudyLink}
                      className="btn-primary w-full md:w-auto inline-block text-center"
                    >
                      Read Full Case Study
                    </a>
                  ) : (
                    <button
                      className="btn-primary w-full md:w-auto"
                      onClick={() => {
                        setSelectedProject(null)
                        const contactSection = document.getElementById('contact')
                        contactSection?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      Start Your Project
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
