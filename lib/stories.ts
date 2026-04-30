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
    slug: 'building-ai-products-teams-adopt',
    title: 'Building AI Products That Teams Actually Adopt',
    excerpt:
      'The gap between a working AI prototype and a product teams use every day is almost never a technical problem. It is an adoption problem — and it starts with how the system is introduced.',
    date: '2026-04-30',
    category: 'Product Delivery',
    readTime: '5 min read',
    sections: [
      {
        title: 'Why prototypes stall',
        paragraphs: [
          'Most AI prototypes fail to become products because they were scoped around what AI can do, not what the team actually needs. A demo that impresses leadership rarely matches the messy reality of the workflow it is supposed to improve.',
          'Adoption requires trust, and trust requires familiarity. If team members encounter an AI tool for the first time at launch, they are already behind.',
        ],
      },
      {
        title: 'Involve users before launch',
        paragraphs: [
          'The teams with the best AI adoption involve end users during the pilot, not just in testing. When someone sees their own inputs producing useful outputs early, they arrive at launch with confidence instead of skepticism.',
          'Early involvement also surfaces the edge cases that matter most: the unusual request, the time-sensitive exception, the workflow step that was not in the scope document.',
        ],
      },
      {
        title: 'Design for the handoff',
        paragraphs: [
          'Every AI product has a moment where control transfers — from the system to a human, or from a human to the system. That handoff needs to be designed explicitly: who acts, on what signal, with what context.',
          'Products that skip this design have high initial adoption and fast dropout. Products that get it right become infrastructure.',
        ],
      },
      {
        title: 'Measure what operators care about',
        paragraphs: [
          'Usage metrics matter, but adoption is ultimately measured by outcomes: did cycle time drop, did quality improve, did the team stop avoiding the workflow? Those are the numbers that justify the next phase.',
          'Define them before launch. Agree on them with the team. Review them at 30 and 90 days. That cadence is what separates a real rollout from a pilot that quietly disappears.',
        ],
      },
    ],
  },
  {
    slug: 'shipping-ai-products-with-proof',
    title: 'Shipping AI Products With Proof, Not Hype',
    excerpt:
      'The fastest way to lose trust in AI is to promise magic. The fastest way to earn it is to show narrow, reliable wins and the controls behind them.',
    date: '2026-04-20',
    category: 'AI Delivery',
    readTime: '5 min read',
    sections: [
      {
        title: 'Why buyers are skeptical',
        paragraphs: [
          'Most AI pitches still sound like a future keynote instead of an operating plan. Teams hear claims about transformation, but they rarely see where the model fits, who reviews the output, or how success will be measured.',
          'That skepticism is healthy. In production environments, a useful AI workflow is usually specific, auditable, and connected to one painful bottleneck.',
        ],
      },
      {
        title: 'What credible AI delivery looks like',
        paragraphs: [
          'Credible delivery starts with a narrow use case, a clear owner, and a baseline. If a team cannot describe the manual process today, it is too early to automate it.',
          'The second ingredient is evidence. Buyers need example inputs, example outputs, fallback paths, and a record of what still requires human approval.',
        ],
      },
      {
        title: 'The Lyvena approach',
        paragraphs: [
          'We scope AI around real workflows first, then design the product surface, evaluation loop, and rollout plan together. That keeps strategy, engineering, and risk management aligned from the start.',
          'The result is not a vague innovation story. It is a system your team can actually run.',
        ],
      },
    ],
  },
  {
    slug: 'responsible-ai-for-operators',
    title: 'Responsible AI For Operators, Not Just Policy Decks',
    excerpt:
      'Responsible AI matters most when it changes the day-to-day operating model: data handling, review steps, escalation paths, and measurement.',
    date: '2026-04-16',
    category: 'Responsible AI',
    readTime: '4 min read',
    sections: [
      {
        title: 'Responsibility has to be operational',
        paragraphs: [
          'A principles page is useful, but it does not protect users by itself. Responsibility becomes real when teams define where data comes from, what the model can do, what it must never do, and how exceptions are handled.',
          'That is why we treat policy, UX, and implementation as one system instead of three separate workstreams.',
        ],
      },
      {
        title: 'Design choices matter',
        paragraphs: [
          'The product interface often determines whether AI feels safe. Good interfaces expose confidence, show traceability when it matters, and make escalation easy.',
          'Bad interfaces hide uncertainty, blur authorship, and encourage over-trust. That is a design failure as much as an engineering failure.',
        ],
      },
      {
        title: 'What teams should implement early',
        paragraphs: [
          'Define approved use cases, red-line workflows, reviewer roles, and post-launch metrics before broad rollout. These pieces are cheaper to add at the beginning than after internal trust is lost.',
          'Responsible AI is not slower product work. It is better product work.',
        ],
      },
    ],
  },
  {
    slug: 'from-ai-audit-to-production',
    title: 'From AI Audit To Production In A Way Teams Can Sustain',
    excerpt:
      'Many organizations jump from excitement to implementation too quickly. A better path is audit, pilot, instrumentation, and then scale.',
    date: '2026-04-10',
    category: 'Strategy',
    readTime: '6 min read',
    sections: [
      {
        title: 'Start with the operating reality',
        paragraphs: [
          'An AI audit should identify where work is slow, repetitive, expensive, or inconsistent. The goal is not to find the flashiest demo. The goal is to find the clearest leverage point.',
          'We usually look for workflows with enough repetition to matter and enough structure to evaluate.',
        ],
      },
      {
        title: 'Pilot with instrumentation',
        paragraphs: [
          'A pilot should answer practical questions: Did cycle time improve? Did quality hold? Did users trust the output? What still needed human intervention?',
          'Without instrumentation, pilots become storytelling exercises. With instrumentation, they become rollout decisions.',
        ],
      },
      {
        title: 'Scale only what the team can own',
        paragraphs: [
          'A production AI system needs owners, maintenance habits, and clear expectations. If no one can explain how the system is behaving after launch, the team is not ready to scale it.',
          'Sustainable adoption comes from simple systems with clear accountability, not from maximum complexity.',
        ],
      },
    ],
  },
]
