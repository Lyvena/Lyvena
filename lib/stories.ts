export interface StorySection {
  title: string
  paragraphs: string[]
}

export interface Story {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  sections: StorySection[]
}

export const stories: Story[] = [
  {
    slug: 'launching-prospera-havens-ai-powered-real-estate',
    title: "Launching Prospera Havens: AI-Powered Real Estate in the World's Most Innovative City",
    excerpt:
      'A look at how Lyvena built a working real estate platform for the Próspera ZEDE, combining applied AI, fractional ownership, and Zaha Hadid architecture.',
    date: '2026-06-25',
    category: 'Case Study',
    readTime: '8 min read',
    sections: [],
  },
  {
    slug: 'ultimate-guide-agentic-ai-automated-coding',
    title: 'The Ultimate Guide to Agentic AI: Everything You Need to Succeed in Automated Coding',
    excerpt:
      'A deep dive into Agentic AI — autonomous systems that reason through architectures, debug complex environments, and manage entire project lifecycles.',
    date: '2026-06-25',
    category: 'Technical Guide',
    readTime: '12 min read',
    sections: [],
  },
  {
    slug: 'how-close-are-we-to-artificial-superintelligence',
    title: 'How Close Are We to Achieving Artificial Superintelligence in 2026?',
    excerpt:
      'An exploration of where we stand on the path to ASI, the technical barriers, shifting timelines, and what businesses should focus on today.',
    date: '2026-06-25',
    category: 'AI Research',
    readTime: '10 min read',
    sections: [],
  },
  {
    slug: 'impacts-of-asi-on-business-society-technology',
    title: 'Impacts of Artificial SuperIntelligence on Business, Society, and Technology',
    excerpt:
      'A practical look at how increasingly capable AI systems will reshape business workflows, societal structures, and technological evolution.',
    date: '2026-06-25',
    category: 'AI Research',
    readTime: '10 min read',
    sections: [],
  },
  {
    slug: 'mit-seal-self-adapting-language-models',
    title: 'MIT SEAL: The Self-Adapting Language Models Redefining AI Learning',
    excerpt:
      'How MIT\u2019s SEAL framework lets language models teach themselves new tasks on the fly \u2014 and what it means for applied AI delivery.',
    date: '2026-06-25',
    category: 'AI Research',
    readTime: '10 min read',
    sections: [],
  },
  {
    slug: 'mojo-vs-python-how-we-use-mojo-to-build-ai-systems-that-scale',
    title: 'Mojo vs Python: How We Use Mojo Today to Build AI Systems That Scale',
    excerpt:
      'How Lyvena uses Mojo alongside Python to bridge the gap between fast prototyping and production-grade AI systems.',
    date: '2026-06-25',
    category: 'Technical Guide',
    readTime: '9 min read',
    sections: [],
  },
  {
    slug: 'case-study-developing-kiews-no-code-near-protocol-integrations',
    title: 'Case Study: Developing Kiews \u2013 No-Code NEAR Protocol Integrations by Lyvena',
    excerpt:
      'How Lyvena built a no-code platform for NEAR Protocol integration using applied AI delivery \u2014 Audit, Design, Pilot, Scale.',
    date: '2026-06-25',
    category: 'Case Study',
    readTime: '12 min read',
    sections: [],
  },
]
