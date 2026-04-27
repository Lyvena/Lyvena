import Link from 'next/link'
import Footer from '@/components/Footer'
import { FaLinkedin } from 'react-icons/fa'

export default function About() {
  const team = [
    {
      name: 'Akshay',
      role: 'Founder & CEO',
      linkedin: 'https://www.linkedin.com/in/Akshay155/',
      description: 'Leads product direction, positioning, and the practical application of AI in shipped systems.',
    },
    {
      name: 'Aryna Verchenko',
      role: 'Chief Designer & COO',
      linkedin: 'https://www.linkedin.com/in/unicornixa/',
      description: 'Shapes design quality, product clarity, and the operating discipline behind delivery.',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      <section className="section-padding pt-32 pb-16 bg-gradient-to-br from-primary via-primary-dark to-primary-light relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
              About Lyvena
            </h1>
            <p className="text-xl text-neutral-white/90 max-w-2xl mx-auto">
              An Orthodox Christian company focused on applied AI systems, credible delivery, and
              responsible rollout.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                What Lyvena should be known for
              </h2>
              <p className="text-lg text-neutral-white/80 leading-relaxed mb-6">
                Lyvena is at its best when it focuses on turning ambiguous AI ambition into clear
                product direction, real systems, and delivery plans teams can actually run. We are
                an Orthodox Christian company, and that identity shapes how we think about human
                dignity, responsibility, and the kinds of systems worth building.
              </p>
              <p className="text-lg text-neutral-white/80 leading-relaxed mb-6">
                That means narrowing the promise: not everything about AI, but specific internal
                tools, product features, and rollout strategies with evidence behind them.
              </p>
              <p className="text-lg text-neutral-white/80 leading-relaxed">
                Strong positioning, strong UX, and strong operating discipline are the combination
                that can make the company memorable.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-3">Core Offer</h3>
                  <p className="text-neutral-white/80">
                    Applied AI systems, product engineering, and responsible delivery for teams that
                    need more than prototypes, guided by an Orthodox Christian view of integrity,
                    stewardship, and human-centered technology.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent mb-3">What the site should signal</h3>
                  <ul className="space-y-2 text-neutral-white/80">
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Specificity over hype</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Proof over placeholder metrics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Delivery structure over vague promises</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-3 font-bold">•</span>
                      <span>Trustworthy design over novelty</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-neutral-charcoal/50 to-primary-dark/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Leadership
            </h2>
            <p className="text-xl text-neutral-white/80 max-w-2xl mx-auto">
              The current team already covers the two disciplines the brand should emphasize most:
              product direction and design quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div
                key={member.name}
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
                    <span className="text-sm">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              How Lyvena should talk about AI internally
            </h2>
            <p className="text-xl text-neutral-white/80 max-w-2xl mx-auto">
              This is more credible than listing novelty “AI employees.” Show the operating system,
              not the joke.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Research and scoping',
                description: 'Use AI to summarize, cluster, compare options, and draft initial requirements while keeping humans accountable for direction.',
              },
              {
                title: 'Content and prototyping',
                description: 'Use AI to accelerate copy drafts, prototype logic, and rapid UI exploration, then refine with editorial and product judgment.',
              },
              {
                title: 'Operations and follow-through',
                description: 'Use AI for internal leverage only when there is a clear review step, clear owner, and a defined quality bar.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-accent/20 bg-gradient-to-br from-neutral-charcoal/50 to-primary-dark/50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-neutral-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-charcoal mb-4">
              Ready to turn AI ambition into a real product plan?
            </h2>
            <p className="text-lg text-neutral-charcoal/90 mb-8">
              Start with a focused conversation about the workflow, product surface, and rollout
              constraints that matter most.
            </p>
            <Link
              href="/#contact"
              className="btn-primary inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
