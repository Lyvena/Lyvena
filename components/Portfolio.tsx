'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import { useTranslations } from '@/lib/i18n'

const projects = [
  {
    id: 1,
    title: 'Kiews',
    subtitle: 'No-Code NEAR Integration',
    category: 'Blockchain',
    description: 'Democratizing access to NEAR Protocol through no-code platform',
    fullDescription: 'A groundbreaking no-code platform that enables non-technical users to build and deploy NEAR Protocol integrations. Kiews features a visual workflow builder, smart contract templates, testing sandbox, and comprehensive monitoring dashboard.',
    tech: ['NEAR Protocol', 'WebFlow', 'Rust', 'JavaScript'],
    gradient: 'from-orange-500 to-yellow-500',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    impact: '500+ users, $5M+ transaction volume, 92% satisfaction',
    caseStudyLink: '/case-study',
  },
  {
    id: 2,
    title: 'St. Joachim and Anne Clinic',
    subtitle: 'Medical Website',
    category: 'Web Design & Development',
    description: 'Modern medical website designed and developed for advanced bariatric surgery clinic',
    fullDescription: 'A comprehensive, patient-focused website designed and developed for St. Joachim and Anne Clinic, a premier medical facility specializing in advanced weight loss surgery and obesity treatment. The platform features a compassionate and professional design, detailed procedure information for gastric bypass, sleeve gastrectomy, and gastric band surgeries, along with patient resources and streamlined appointment scheduling.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Cloudflare'],
    gradient: 'from-emerald-500 to-teal-500',
    imageUrl: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    impact: 'Enhanced patient engagement, streamlined consultations',
    websiteLink: 'https://stja-clinic.com/',
  },
  {
    id: 3,
    title: 'Entersekt',
    subtitle: 'Financial Security Platform',
    category: 'Web Development',
    description: 'Corporate website for leading financial authentication company',
    fullDescription: 'A professional corporate website developed for Entersekt, a leading financial authentication company that shields customers from AI-driven scams and modern financial fraud. The platform showcases their award-winning Context Aware™ Authentication solutions, fraud prevention services, and account takeover protection for banking institutions worldwide.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    gradient: 'from-violet-500 to-purple-600',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    impact: 'Award-winning authentication innovation, trusted by leading banks',
    websiteLink: 'https://www.entersekt.com/',
  },
  {
    id: 4,
    title: 'Remotely',
    subtitle: 'Global Talent Platform',
    category: 'Backend & Automation',
    description: 'Talent platform connecting global developers with elite US startup jobs',
    fullDescription: 'Remotely is a comprehensive talent platform that connects top software engineers worldwide with full-time, long-term positions at fast-growing US startups. We developed the robust backend infrastructure, database architecture, and automation systems that power their matching algorithms, candidate management, invoice processing, PTO tracking, and contractor management platform.',
    tech: ['Node.js', 'PostgreSQL', 'Automation', 'API Integration'],
    gradient: 'from-cyan-500 to-blue-600',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    impact: 'Streamlined hiring process, automated contractor management',
    websiteLink: 'https://www.remotely.works/',
  },
  {
    id: 5,
    title: 'JW Fishers',
    subtitle: 'Underwater Search Equipment',
    category: 'Web Design & Development',
    description: 'Professional website for leading underwater search equipment manufacturer',
    fullDescription: 'A comprehensive website designed and developed for JW Fishers, a world-renowned manufacturer of underwater search equipment trusted by law enforcement, military, and commercial industries worldwide. The platform showcases their cutting-edge products including ROVs, side scan sonar systems, underwater metal detectors (rated #1 by US Homeland Security), and underwater cameras serving defense, first responders, offshore oil & gas, and scientific research sectors.',
    tech: ['Webflow', 'CSS', 'JavaScript', 'Responsive Design'],
    gradient: 'from-blue-600 to-cyan-500',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    impact: 'Enhanced product visibility, trusted by US Homeland Security',
    websiteLink: 'https://www.jwfishers.com/',
  },
  {
    id: 6,
    title: 'SuperWorld',
    subtitle: 'Virtual Real Estate Platform',
    category: 'Web3 & Blockchain',
    description: 'Virtual real estate platform mapping digital assets to real-world locations',
    fullDescription: 'SuperWorld is an innovative virtual real estate platform that maps digital assets onto real-world locations, enabling users to buy, sell, and monetize virtual land corresponding to any place on Earth. Powered by AI and blockchain technology, the platform features NFT creation, DAO communities, and a $SPWR token ecosystem on Base. Users can personalize the world around them with content, recommendations, events, and bookings while earning from real-world activity on their virtual properties.',
    tech: ['React', 'Blockchain', 'AI', 'Web3', 'Base'],
    gradient: 'from-purple-600 to-indigo-600',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    impact: 'Pioneering virtual real estate, backed by leading VCs',
    websiteLink: 'https://www.superworldapp.com/',
  },
]

export default function Portfolio() {
  const t = useTranslations()
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section
      id="portfolio"
      className="section-padding bg-gradient-to-b from-neutral-charcoal to-neutral-charcoal relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">{t.portfolio.label}</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            {t.portfolio.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t.portfolio.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 cursor-pointer h-full"
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
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-charcoal via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold flex items-center gap-2">
                      {t.portfolio.viewProject} <FaExternalLinkAlt className="text-sm" />
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-accent/80 text-sm font-medium mb-3">{project.subtitle}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-md">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary shine"
          >
            {t.portfolio.startProject}
          </button>
        </motion.div>
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
              <div className="h-72 relative overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} opacity-50 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <span className="text-accent text-sm font-semibold mb-2 block">{selectedProject.category}</span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-1">
                      {selectedProject.title}
                    </h3>
                    <p className="text-white/80">{selectedProject.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-primary mb-3">{t.portfolio.aboutProject}</h4>
                  <p className="text-lg text-neutral-charcoal leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-primary mb-3">{t.portfolio.impact}</h4>
                  <p className="text-neutral-charcoal">{selectedProject.impact}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-primary mb-3">{t.portfolio.techStack}</h4>
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
                      {t.portfolio.readCaseStudy}
                    </a>
                  ) : (selectedProject as any).websiteLink ? (
                    <a
                      href={(selectedProject as any).websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full md:w-auto inline-block text-center"
                    >
                      {t.portfolio.visitWebsite}
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
                      {t.portfolio.startProject}
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
