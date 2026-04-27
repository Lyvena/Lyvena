'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaRobot, FaCubes, FaArrowRight, FaCheck, FaExternalLinkAlt, FaCode, FaDatabase, FaBrain, FaLink, FaWallet, FaCog, FaShieldAlt, FaBolt } from 'react-icons/fa'
import { useTranslations } from '@/lib/i18n'

const getProducts = (t: ReturnType<typeof useTranslations>) => [
  {
    id: 'intelekt',
    name: 'Intelekt',
    tagline: t.productsPage.intelekt.tagline,
    heroDescription: t.productsPage.intelekt.heroDescription,
    fullDescription: t.productsPage.intelekt.fullDescription,
    icon: FaRobot,
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    bgGradient: 'from-violet-500/20 via-purple-500/20 to-indigo-500/20',
    link: 'https://intelekt.live',
    status: t.productsPage.live,
    features: [
      {
        icon: FaBrain,
        title: t.productsPage.intelekt.features.aiCodeGen.title,
        description: t.productsPage.intelekt.features.aiCodeGen.description,
      },
      {
        icon: FaDatabase,
        title: t.productsPage.intelekt.features.builtInCms.title,
        description: t.productsPage.intelekt.features.builtInCms.description,
      },
      {
        icon: FaRobot,
        title: t.productsPage.intelekt.features.aiCeoPm.title,
        description: t.productsPage.intelekt.features.aiCeoPm.description,
      },
      {
        icon: FaBolt,
        title: t.productsPage.intelekt.features.mojoPowered.title,
        description: t.productsPage.intelekt.features.mojoPowered.description,
      },
    ],
    highlights: t.productsPage.intelekt.highlights,
  },
  {
    id: 'kiews',
    name: 'Kiews',
    tagline: t.productsPage.kiews.tagline,
    heroDescription: t.productsPage.kiews.heroDescription,
    fullDescription: t.productsPage.kiews.fullDescription,
    icon: FaCubes,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    bgGradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
    link: 'https://kiews.xyz',
    status: t.productsPage.live,
    features: [
      {
        icon: FaLink,
        title: t.productsPage.kiews.features.integrations.title,
        description: t.productsPage.kiews.features.integrations.description,
      },
      {
        icon: FaWallet,
        title: t.productsPage.kiews.features.walletConnect.title,
        description: t.productsPage.kiews.features.walletConnect.description,
      },
      {
        icon: FaCog,
        title: t.productsPage.kiews.features.smartContracts.title,
        description: t.productsPage.kiews.features.smartContracts.description,
      },
      {
        icon: FaShieldAlt,
        title: t.productsPage.kiews.features.secureByDesign.title,
        description: t.productsPage.kiews.features.secureByDesign.description,
      },
    ],
    highlights: t.productsPage.kiews.highlights,
    integrations: [
      'Webflow', 'Zapier', 'Make', 'AppGyver', 'Hubspot', 
      'Contentful', 'Carrd CMS', 'Flutter', 'Bildr', 'Butter CMS'
    ],
  },
]

export default function ProductsPage() {
  const t = useTranslations()
  const products = getProducts(t)
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">{t.productsPage.hero.label}</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              {t.productsPage.hero.title}{' '}
              <span className="gradient-text">{t.productsPage.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t.productsPage.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Detail Sections */}
      {products.map((product: any, productIndex: number) => (
        <section 
          key={product.id}
          id={product.id}
          className={`section-padding relative overflow-hidden ${productIndex % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: productIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={productIndex % 2 === 1 ? 'lg:order-2' : ''}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.gradient}`}>
                    <product.icon className="text-3xl text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs font-bold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                    {product.status}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
                  {product.name}
                </h2>
                <p className={`text-xl font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-6`}>
                  {product.tagline}
                </p>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  {product.fullDescription}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {product.highlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-white/80">
                      <FaCheck className={`text-sm bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`} style={{ color: productIndex === 0 ? '#8b5cf6' : '#f59e0b' }} />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-xl transition-all`}
                >
                  {t.productsPage.visit} {product.name}
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </motion.div>

              {/* Features Card */}
              <motion.div
                initial={{ opacity: 0, x: productIndex % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={productIndex % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className={`bg-gradient-to-br ${product.bgGradient} backdrop-blur-sm rounded-3xl p-8 border border-white/10`}>
                  <h3 className="text-2xl font-bold text-white mb-8">{t.productsPage.keyFeatures}</h3>
                  <div className="space-y-6">
                    {product.features.map((feature: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                          <feature.icon className="text-white text-lg" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                          <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Integrations for Kiews */}
                  {product.integrations && (
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h4 className="text-white font-semibold mb-4">{t.productsPage.supportedPlatforms}</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.integrations.map((integration: string, idx: number) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white/80 rounded-full"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-accent/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              {t.productsPage.cta.title}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {t.productsPage.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn-primary">
                {t.productsPage.cta.primaryButton}
              </Link>
              <Link href="/" className="btn-secondary">
                {t.productsPage.cta.secondaryButton}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
