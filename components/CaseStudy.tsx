'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CaseStudy() {
  const sections = [
    {
      title: 'Introduction',
      content: 'The blockchain ecosystem has experienced exponential growth over the past decade, yet accessibility remains one of its greatest challenges. At Lyvena, we recognized that while the NEAR Protocol offers exceptional functionality for developers, many businesses and creators without technical expertise were effectively locked out of its benefits. This case study documents our journey developing Kiews – a groundbreaking no-code platform that democratizes access to NEAR Protocol\'s powerful blockchain infrastructure.',
    },
    {
      title: 'The Challenge',
      content: 'In early 2024, our team identified a significant gap in the market: despite NEAR Protocol\'s developer-friendly environment, non-technical users faced substantial barriers to entry. Organizations wanted to leverage blockchain technology but lacked the specialized knowledge to implement complex smart contracts or interact with the NEAR ecosystem. Traditional integration required extensive knowledge of JavaScript and Rust, understanding of cryptographic principles, familiarity with Web3 infrastructure, and significant development resources and time. For many businesses, these requirements created an insurmountable obstacle to blockchain adoption.',
    },
  ]

  return (
    <section className="min-h-screen bg-neutral-darker text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 rounded-lg overflow-hidden"
        >
          <img
            src="https://marblism-ai-agents-public.s3.us-west-2.amazonaws.com/public/apps/3af4e54e-6c6c-476b-ad8d-4508e6a30b56/sessions/ef780ffb-7a36-4db0-986e-a30cfe7aa53f/agent-output/92c2744d-6a0c-4746-bb6d-2f1a0f435125-hero-picture.webp"
            alt="Kiews Case Study Hero"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-display font-bold mb-8 gradient-text"
        >
          Case Study: Developing Kiews – No-Code NEAR Protocol Integrations
        </motion.h1>

        {/* Introduction Section */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-accent">{section.title}</h2>
            <p className="text-neutral-white/80 leading-relaxed text-lg">{section.content}</p>
          </motion.div>
        ))}

        {/* Challenge Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 rounded-lg overflow-hidden"
        >
          <img
            src="https://marblism-ai-agents-public.s3.us-west-2.amazonaws.com/public/apps/3af4e54e-6c6c-476b-ad8d-4508e6a30b56/sessions/ef780ffb-7a36-4db0-986e-a30cfe7aa53f/agent-output/07cc1d3a-6f11-431c-be43-f4d660c5a861-no-code-vs-code-near-protocol-visualization-0.webp"
            alt="No-Code vs Code Visualization"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Project Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Project Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Eliminate Code Barriers', desc: 'Create an intuitive interface allowing users with zero programming knowledge to build and deploy NEAR Protocol integrations' },
              { title: 'Preserve Functionality', desc: 'Ensure no-code users could access the full range of NEAR Protocol capabilities' },
              { title: 'Accelerate Development', desc: 'Reduce integration time from weeks to hours' },
              { title: 'Maintain Security', desc: 'Implement robust security measures to protect user assets and data' },
            ].map((obj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-neutral-dark/50 p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-accent mb-2">{obj.title}</h3>
                <p className="text-neutral-white/70">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Our Approach</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Research & Discovery Phase</h3>
            <p className="text-neutral-white/80 leading-relaxed mb-4">
              We began with comprehensive research into the existing NEAR ecosystem, identifying pain points and opportunities. Our team conducted interviews with non-technical business leaders interested in blockchain, web developers without blockchain experience, NEAR Protocol core developers, and current NEAR dApp creators.
            </p>
            <p className="text-neutral-white/80 leading-relaxed">
              This research revealed that most potential users were enthusiastic about blockchain possibilities but intimidated by implementation complexities. We also discovered that a visual, workflow-based interface would be most effective for our target audience.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Technical Architecture</h3>
            <p className="text-neutral-white/80 leading-relaxed mb-4">
              Kiews' architecture was designed around three core components:
            </p>
            <ul className="space-y-3 text-neutral-white/80">
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">1.</span>
                <span><strong>Visual Interface Layer:</strong> A drag-and-drop environment built using WebFlow's advanced capabilities, allowing users to design their workflow visually</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">2.</span>
                <span><strong>Translation Engine:</strong> A sophisticated middleware system that converts visual commands into NEAR Protocol-compatible code</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 font-bold">3.</span>
                <span><strong>Execution Framework:</strong> A secure infrastructure handling the actual blockchain interactions and smart contract deployments</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Architecture Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 rounded-lg overflow-hidden"
        >
          <img
            src="https://marblism-ai-agents-public.s3.us-west-2.amazonaws.com/public/apps/3af4e54e-6c6c-476b-ad8d-4508e6a30b56/sessions/ef780ffb-7a36-4db0-986e-a30cfe7aa53f/agent-output/67a777b9-cafa-4ce3-9562-036f61d2dbe5-kiews-architecture-diagram-0.webp"
            alt="Kiews Architecture Diagram"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Key Features Development</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Smart Contract Templates',
                desc: 'We created a library of pre-built, customizable smart contract templates covering common use cases: NFT minting and marketplaces, token creation and management, DAO governance structures, and decentralized storage solutions.',
              },
              {
                title: 'Visual Workflow Builder',
                desc: 'The heart of Kiews is its visual workflow builder, allowing users to map out complete blockchain processes, define triggers and actions, set conditional logic, connect to external systems, and implement complex business rules through an intuitive drag-and-drop interface.',
              },
              {
                title: 'Testing Sandbox',
                desc: 'Security was paramount in our design. We developed a comprehensive testing sandbox enabling users to simulate transactions in a risk-free environment, identify potential issues before deployment, test performance under various conditions, and verify smart contract behavior.',
              },
              {
                title: 'Monitoring Dashboard',
                desc: 'For post-deployment oversight, we created a user-friendly monitoring dashboard providing real-time transaction tracking, performance analytics, error detection and alerting, and usage statistics and patterns.',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 5 }}
                className="bg-neutral-dark/50 p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-neutral-white/70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Implementation Challenges</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Abstraction vs. Control',
                desc: 'Finding the right balance between simplifying the interface while maintaining granular control over blockchain functionality proved difficult. We addressed this through a layered approach, with basic functions immediately accessible and advanced options available through progressive disclosure.',
              },
              {
                title: 'Performance Optimization',
                desc: 'Early prototypes suffered from performance issues when translating complex visual workflows into executable code. Our engineering team implemented a sophisticated caching system and parallel processing architecture to reduce translation time by 87%.',
              },
              {
                title: 'Security Considerations',
                desc: 'Creating a no-code platform that maintained NEAR Protocol\'s robust security was paramount. We implemented multi-layer authentication systems, automated security scanning of generated code, encrypted key management, and rate limiting and anomaly detection.',
              },
              {
                title: 'Cross-Chain Compatibility',
                desc: 'While focused on NEAR Protocol, we recognized users might need to interact with multiple blockchains. We designed Kiews with extensibility in mind, laying groundwork for future multi-chain support through NEAR\'s Chain Abstraction capabilities.',
              },
            ].map((challenge, idx) => (
              <motion.div
                key={idx}
                className="bg-neutral-dark/50 p-6 rounded-lg border border-red-500/20 hover:border-red-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-red-400 mb-2">{challenge.title}</h3>
                <p className="text-neutral-white/70">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results and Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Results and Impact</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Adoption Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: '500+', desc: 'Users onboarded in first 3 months' },
                { label: '78%', desc: 'With no previous blockchain experience' },
                { label: '2 days', desc: 'Average time-to-deployment' },
                { label: '92%', desc: 'User satisfaction rating' },
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-accent/20 to-primary/20 p-6 rounded-lg border border-accent/30"
                >
                  <div className="text-3xl font-bold text-accent mb-2">{metric.label}</div>
                  <p className="text-neutral-white/70">{metric.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Business Impact</h3>
            <ul className="space-y-3 text-neutral-white/80">
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Enabled 120+ new businesses to enter the NEAR ecosystem</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Created 300+ new smart contracts without code</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Processed over $5M in transaction volume</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">✓</span>
                <span>Reduced development costs for users by an average of 75%</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Client Success Story Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 rounded-lg overflow-hidden"
        >
          <img
            src="https://marblism-ai-agents-public.s3.us-west-2.amazonaws.com/public/apps/3af4e54e-6c6c-476b-ad8d-4508e6a30b56/sessions/ef780ffb-7a36-4db0-986e-a30cfe7aa53f/agent-output/4bc53634-23d6-4cdd-8267-24551915cfef-artisancraft-nft-marketplace-showcase-3.webp"
            alt="ArtisanCraft NFT Marketplace"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Client Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 bg-neutral-dark/50 p-8 rounded-lg border border-accent/30"
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Client Success Story: ArtisanCraft Marketplace</h2>
          <p className="text-neutral-white/80 leading-relaxed mb-4">
            One of our earliest adopters, ArtisanCraft, illustrates Kiews' potential. This artisan collective wanted to create a specialized NFT marketplace for handcrafted goods but lacked technical resources. Using Kiews, they:
          </p>
          <ul className="space-y-3 mb-6 text-neutral-white/80">
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">1.</span>
              <span>Designed and deployed their marketplace in just 9 days</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">2.</span>
              <span>Created a custom NFT minting system with provenance verification</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">3.</span>
              <span>Implemented a royalty distribution system for multiple artisans</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 font-bold">4.</span>
              <span>Connected their existing e-commerce platform through API integrations</span>
            </li>
          </ul>
          <p className="text-neutral-white/80 leading-relaxed">
            The result was a fully-functional NFT marketplace that preserved their brand identity while leveraging NEAR Protocol's speed and low transaction costs. Since launch, they've generated over $120,000 in NFT sales with zero technical maintenance required.
          </p>
        </motion.div>

        {/* Future Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Future Roadmap</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Short-term Priorities (Next 6 Months)</h3>
            <ul className="space-y-2 text-neutral-white/80">
              <li className="flex items-start">
                <span className="text-accent mr-3">→</span>
                <span>Expand template library with industry-specific solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">→</span>
                <span>Implement AI-assisted workflow optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">→</span>
                <span>Enhance analytics and reporting capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">→</span>
                <span>Launch community marketplace for user-created templates</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Long-term Vision (12-24 Months)</h3>
            <ul className="space-y-2 text-neutral-white/80">
              <li className="flex items-start">
                <span className="text-accent mr-3">→</span>
                <span>Multi-chain support beyond NEAR Protocol</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">→</span>
                <span>Advanced AI workflow generation from natural language descriptions</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">→</span>
                <span>Governance tools for decentralized organizations</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">→</span>
                <span>Enterprise-grade deployment options with dedicated infrastructure</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-lg border border-accent/30"
        >
          <h2 className="text-3xl font-bold mb-6 text-accent">Conclusion</h2>
          <p className="text-neutral-white/80 leading-relaxed mb-4">
            The development of Kiews represents a significant milestone in blockchain accessibility. By removing technical barriers to NEAR Protocol integration, we've opened the ecosystem to a vast new audience of creators, businesses, and innovators. The no-code approach doesn't just simplify development—it fundamentally transforms who can participate in the blockchain revolution.
          </p>
          <p className="text-neutral-white/80 leading-relaxed mb-4">
            At Lyvena, we believe that powerful technology should be accessible to everyone, regardless of technical background. Kiews embodies this philosophy, democratizing access to NEAR Protocol's robust capabilities while maintaining the security and performance that make blockchain valuable.
          </p>
          <p className="text-neutral-white/80 leading-relaxed">
            As we continue to evolve the platform, we remain committed to our core mission: making blockchain technology accessible, useful, and impactful for all.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-neutral-white/70 mb-6">
            Interested in exploring how Kiews can help your organization leverage NEAR Protocol without code?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-accent text-neutral-darker font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            Schedule a Demonstration
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
