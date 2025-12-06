export type Locale = 'en' | 'uk'

export interface Translations {
  // Meta
  meta: {
    title: string
    description: string
    keywords: string
    ogTitle: string
    ogDescription: string
  }
  // Navigation
  nav: {
    home: string
    services: string
    portfolio: string
    about: string
    stories: string
    contact: string
    getStarted: string
  }
  // Hero
  hero: {
    tagline: string
    taglineHighlight: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
  }
  // Services
  services: {
    label: string
    title: string
    description: string
    aiAutomation: {
      title: string
      description: string
      details: string
      features: string[]
    }
    webDev: {
      title: string
      description: string
      details: string
      features: string[]
    }
    design: {
      title: string
      description: string
      details: string
      features: string[]
    }
    ctaPrimary: string
    ctaSecondary: string
  }
  // About/Values
  about: {
    label: string
    title: string
    description: string
    values: {
      ethicalAI: {
        title: string
        description: string
      }
      privacy: {
        title: string
        description: string
      }
      sustainability: {
        title: string
        description: string
      }
      community: {
        title: string
        description: string
      }
      innovation: {
        title: string
        description: string
      }
      transparency: {
        title: string
        description: string
      }
    }
    ctaPrimary: string
    ctaSecondary: string
  }
  // Products
  products: {
    label: string
    title: string
    description: string
    intelekt: {
      tagline: string
      description: string
      features: string[]
    }
    kiews: {
      tagline: string
      description: string
      features: string[]
    }
    explore: string
    viewAll: string
  }
  // Portfolio
  portfolio: {
    label: string
    title: string
    description: string
    viewProject: string
    aboutProject: string
    impact: string
    techStack: string
    readCaseStudy: string
    visitWebsite: string
    startProject: string
  }
  // Clients
  clients: {
    trustedBy: string
  }
  // Stories
  stories: {
    label: string
    title: string
    viewAll: string
    readArticle: string
    readMore: string
  }
  // Contact
  contact: {
    label: string
    title: string
    description: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      projectIdea: string
      projectIdeaPlaceholder: string
      message: string
      messagePlaceholder: string
      sending: string
      send: string
    }
    success: {
      title: string
      message: string
    }
    error: {
      send: string
    }
    whyPartner: {
      title: string
      reasons: string[]
    }
  }
  // Footer
  footer: {
    description: string
    quickLinks: string
    products: string
    allProducts: string
    getInTouch: string
    copyright: string
  }
  // Loading
  loading: string
  // Common
  common: {
    learnMore: string
  }
}
