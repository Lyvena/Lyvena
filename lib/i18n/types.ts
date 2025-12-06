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
    backToHome: string
  }
  // About Page
  aboutPage: {
    hero: {
      title: string
      description: string
    }
    mission: {
      title: string
      description1: string
      description2: string
      description3: string
    }
    vision: {
      title: string
      description: string
    }
    values: {
      title: string
      items: string[]
    }
    aiTeam: {
      title: string
      description: string
      learnMore: string
      members: {
        penny: { role: string; description: string }
        eva: { role: string; description: string }
        sonny: { role: string; description: string }
        stan: { role: string; description: string }
        linda: { role: string; description: string }
        rachel: { role: string; description: string }
      }
    }
    leadership: {
      title: string
      description: string
      members: {
        aryna: { role: string; description: string }
        akshay: { role: string; description: string }
      }
    }
    cta: {
      title: string
      description: string
      button: string
    }
  }
  // Products Page
  productsPage: {
    hero: {
      label: string
      title: string
      titleHighlight: string
      description: string
    }
    keyFeatures: string
    supportedPlatforms: string
    visit: string
    live: string
    intelekt: {
      tagline: string
      heroDescription: string
      fullDescription: string
      features: {
        aiCodeGen: { title: string; description: string }
        builtInCms: { title: string; description: string }
        aiCeoPm: { title: string; description: string }
        mojoPowered: { title: string; description: string }
      }
      highlights: string[]
    }
    kiews: {
      tagline: string
      heroDescription: string
      fullDescription: string
      features: {
        integrations: { title: string; description: string }
        walletConnect: { title: string; description: string }
        smartContracts: { title: string; description: string }
        secureByDesign: { title: string; description: string }
      }
      highlights: string[]
    }
    cta: {
      title: string
      description: string
      primaryButton: string
      secondaryButton: string
    }
  }
  // Terms Page
  termsPage: {
    title: string
    effectiveDate: string
    lastUpdated: string
    sections: {
      acceptance: { title: string; content: string }
      aboutLyvena: { title: string; content: string }
      servicesDescription: { title: string; intro: string; items: string[]; outro: string }
      userObligations: { title: string; intro: string; items: string[] }
      intellectualProperty: {
        title: string
        lyvenaRights: { title: string; content: string }
        clientRights: { title: string; content: string }
        thirdPartyRights: { title: string; content: string }
      }
      paymentTerms: { title: string; items: string[] }
      serviceAvailability: { title: string; content: string }
      limitationOfLiability: { title: string; intro: string; items: string[] }
      indemnification: { title: string; content: string }
      privacy: { title: string; content: string }
      termination: { title: string; intro: string; items: string[] }
      modifications: { title: string; content: string }
      governingLaw: { title: string; content: string }
      severability: { title: string; content: string }
      entireAgreement: { title: string; content: string }
      contactInfo: { title: string; intro: string }
    }
    copyright: string
  }
  // Privacy Page
  privacyPage: {
    title: string
    effectiveDate: string
    lastUpdated: string
    sections: {
      introduction: { title: string; content: string }
      informationWeCollect: {
        title: string
        personalInfo: { title: string; intro: string; items: string[] }
        autoCollected: { title: string; intro: string; items: string[] }
        technicalInfo: { title: string; intro: string; items: string[] }
      }
      howWeUse: { title: string; intro: string; items: string[] }
      infoSharing: {
        title: string
        intro: string
        serviceProviders: { title: string; intro: string; items: string[] }
        legalRequirements: { title: string; intro: string; items: string[] }
        businessTransfers: { title: string; content: string }
      }
      dataSecurity: { title: string; intro: string; items: string[] }
      dataRetention: { title: string; intro: string; items: string[]; outro: string }
      privacyRights: { title: string; intro: string; items: string[]; outro: string }
      cookies: { title: string; intro: string; items: string[]; outro: string }
      internationalTransfers: { title: string; intro: string; items: string[] }
      contactInfo: { title: string; intro: string }
      changes: { title: string; intro: string; items: string[]; outro: string }
      thirdPartyLinks: { title: string; content: string }
    }
  }
}
