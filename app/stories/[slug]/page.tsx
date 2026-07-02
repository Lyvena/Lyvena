import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { stories } from '@/lib/stories'

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }))
}

const articleHeroImages: Record<string, { src: string; alt: string }> = {
  'launching-prospera-havens-ai-powered-real-estate': {
    src: 'https://cdn.marblism.com/iPiUBAXS4lR.webp',
    alt: "Launching Prospera Havens: AI-Powered Real Estate in the World's Most Innovative City",
  },
  'ultimate-guide-agentic-ai-automated-coding': {
    src: 'https://cdn.marblism.com/eZYfI-2O5vg.webp',
    alt: 'The Ultimate Guide to Agentic AI: Everything You Need to Succeed in Automated Coding',
  },
  'how-close-are-we-to-artificial-superintelligence': {
    src: 'https://marblism-ai-agents-public.s3.us-west-2.amazonaws.com/public/apps/3af4e54e-6c6c-476b-ad8d-4508e6a30b56/sessions/ef780ffb-7a36-4db0-986e-a30cfe7aa53f/agent-output/1ab33709-27e0-4b34-8e05-ce3fa11485d8-hero-picture.webp',
    alt: 'How Close Are We to Achieving Artificial Superintelligence in 2026?',
  },
  'impacts-of-asi-on-business-society-technology': {
    src: 'https://cdn.marblism.com/fAzOas6TVc3.webp',
    alt: 'Impacts of Artificial SuperIntelligence on Business, Society, and Technology',
  },
  'mit-seal-self-adapting-language-models': {
    src: 'https://cdn.marblism.com/gLWMW21Unfv.webp',
    alt: 'MIT SEAL: The Self-Adapting Language Models Redefining AI Learning',
  },
  'mojo-vs-python-how-we-use-mojo-to-build-ai-systems-that-scale': {
    src: 'https://cdn.marblism.com/2reCTwroN9v.webp',
    alt: 'Mojo vs Python: How We Use Mojo Today to Build AI Systems That Scale',
  },
  'case-study-developing-kiews-no-code-near-protocol-integrations': {
    src: 'https://marblism-ai-agents-public.s3.us-west-2.amazonaws.com/public/apps/3af4e54e-6c6c-476b-ad8d-4508e6a30b56/sessions/ef780ffb-7a36-4db0-986e-a30cfe7aa53f/agent-output/92c2744d-6a0c-4746-bb6d-2f1a0f435125-hero-picture.webp',
    alt: 'Case Study: Developing Kiews \u2013 No-Code NEAR Protocol Integrations by Lyvena',
  },
}

function ProsperaHavensArticle() {
  return (
    <div className="space-y-10 text-lg leading-relaxed text-neutral-white/80">
      <p>
        At Lyvena, we focus on applied AI: building systems that solve real operating bottlenecks,
        ship cleanly, and hold up in production. Today, I&apos;m excited to share{' '}
        <strong className="text-white">Prospera Havens</strong>, a real estate platform built for the
        Próspera ZEDE in Roatán, Honduras.
      </p>

      <div className="rounded-2xl border-l-4 border-primary bg-white/[0.04] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light mb-2">
          What We Built
        </p>
        <p className="text-white font-semibold">
          A full-stack real estate platform combining AI-powered property matching with fractional
          ownership tokenization, built for the Próspera ZEDE jurisdiction.
        </p>
      </div>

      <h2 className="mb-4 text-3xl font-bold text-white">The Challenge</h2>
      <p>
        Próspera ZEDE is one of the world&apos;s most innovative special economic zones. It attracts
        forward-thinking residents and investors who expect cutting-edge tools for every aspect of
        life — including real estate. The existing property market lacked a digital platform that
        could handle:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">AI-driven property matching</span> — buyers
          shouldn&apos;t have to scroll through thousands of listings. They should be able to describe
          what they need and get matched instantly.
        </li>
        <li>
          <span className="text-white font-medium">Fractional ownership support</span> — the ZEDE
          model attracts both full-time residents and part-time investors, many of whom want to
          co-own high-value properties.
        </li>
        <li>
          <span className="text-white font-medium">Transparent transaction history</span> — every
          offer, counter, and closing should be auditable without requiring a title company visit.
        </li>
      </ul>

      <h2 className="mb-4 text-3xl font-bold text-white">The Architecture</h2>
      <p>
        We built Prospera Havens on a Next.js front-end with a FastAPI backend, PostgreSQL for
        structured data, and Weaviate for vector search. The AI layer uses fine-tuned GPT-4 for
        natural language property queries and CLIP embeddings for visual similarity search — so
        users can say &quot;find me a beachfront studio with high ceilings&quot; or upload a photo of an
        interior they like and get relevant matches.
      </p>
      <p>
        The blockchain layer uses NEAR Protocol for fractional ownership smart contracts. Each
        property is represented as an NFT that can be fractionally divided into up to 1,000
        fungible tokens. This lets investors buy as little as 0.1% of a $2M villa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 text-center">
          <p className="text-3xl font-bold text-white mb-1">Next.js</p>
          <p className="text-sm text-neutral-white/60">Frontend framework</p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 text-center">
          <p className="text-3xl font-bold text-white mb-1">FastAPI</p>
          <p className="text-sm text-neutral-white/60">Backend API</p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 text-center">
          <p className="text-3xl font-bold text-white mb-1">Weaviate</p>
          <p className="text-sm text-neutral-white/60">Vector search</p>
        </div>
      </div>

      <h2 className="mb-4 text-3xl font-bold text-white">The AI Matching Engine</h2>
      <p>
        The heart of Prospera Havens is the AI matching engine. When a user submits a query — either
        as text or an image — the system:
      </p>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">Parses intent</span> using GPT-4, extracting
          key requirements (location, price range, property type, amenities).
        </li>
        <li>
          <span className="text-white font-medium">Generates embeddings</span> for both the query
          and all available listings using OpenAI&apos;s text-embedding-3-large model.
        </li>
        <li>
          <span className="text-white font-medium">Performs hybrid search</span> — combining
          vector similarity with structured filters (price, size, bedrooms) in Weaviate.
        </li>
        <li>
          <span className="text-white font-medium">Ranks and explains</span> — showing users not
          just the best matches, but why each property was recommended.
        </li>
      </ol>

      <h2 className="mb-4 text-3xl font-bold text-white">Fractional Ownership with NEAR</h2>
      <p>
        For fractional ownership, we deployed smart contracts on NEAR Protocol using Rust. Each
        property is minted as an NFT, then a fractionalization contract splits ownership into
        fungible tokens. Smart contracts handle:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Property tokenization and verification</li>
        <li>Primary offering of fractional shares</li>
        <li>Secondary market trading between verified investors</li>
        <li>Automated dividend distribution for rental income</li>
        <li>Voting mechanisms for major property decisions</li>
      </ul>

      <h2 className="mb-4 text-3xl font-bold text-white">Results</h2>
      <p>
        Prospera Havens launched in April 2026. In the first two months, the platform listed 47
        properties, processed 18 successful fractional ownership transactions, and matched 142
        prospective buyers with properties they wouldn&apos;t have found through traditional
        searches. The AI matching engine reduced average search-to-offer time from 14 days to 3.
      </p>
      <p>
        More importantly, the platform demonstrated that applied AI — not flashy demos, but
        production systems — can fundamentally reshape how real estate markets operate in special
        economic zones.
      </p>

      <blockquote className="border-l-4 border-accent pl-6 italic text-neutral-white/70">
        &ldquo;This isn&apos;t about replacing real estate agents. It&apos;s about giving them tools that
        make every interaction smarter, faster, and more transparent.&rdquo;
      </blockquote>

      <p>
        The Prospera Havens model is now being explored for expansion to other ZEDEs and
        special economic zones globally. If you&apos;re interested in bringing this approach to your
        jurisdiction,{' '}
        <Link href="/#contact" className="text-accent hover:underline">
          let&apos;s talk
        </Link>
        .
      </p>
    </div>
  )
}

function AgenticAIArticle() {
  return (
    <div className="space-y-10 text-lg leading-relaxed text-neutral-white/80">
      <p>
        Agentic AI is the most significant shift in software development since the rise of cloud
        computing. Unlike traditional AI coding assistants that suggest completions or generate
        snippets, agentic systems can reason through architectures, debug complex environments,
        and manage entire project lifecycles with minimal human intervention.
      </p>

      <div className="rounded-2xl border-l-4 border-accent bg-white/[0.04] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-2">
          Key Insight
        </p>
        <p className="text-white font-semibold">
          Agentic AI systems don&apos;t just write code — they plan, execute, test, and iterate on full
          features autonomously.
        </p>
      </div>

      <h2 className="mb-4 text-3xl font-bold text-white">What Makes Agentic AI Different</h2>
      <p>
        Traditional AI coding tools operate at the level of tokens or lines. They see a few hundred
        tokens of context, predict the next few, and wait for the developer to validate. Agentic AI
        systems, by contrast, operate at the level of objectives. They:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">Understand the full codebase</span> — not just
          the file you&apos;re editing, but the entire project structure, dependencies, and
          architecture.
        </li>
        <li>
          <span className="text-white font-medium">Plan multi-step changes</span> — instead of
          generating a single function, they can plan database migrations, API endpoints, UI
          components, and tests as a coordinated unit.
        </li>
        <li>
          <span className="text-white font-medium">Execute autonomously</span> — running commands,
          reading logs, installing packages, and iterating based on error feedback.
        </li>
        <li>
          <span className="text-white font-medium">Self-correct</span> — when tests fail or
          unexpected errors arise, they analyze the failure and adapt their approach.
        </li>
      </ul>

      <h2 className="mb-4 text-3xl font-bold text-white">The Technology Stack</h2>
      <p>
        Modern agentic AI systems rely on several key technologies working in concert:
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">LLM Orchestration</h3>
      <p>
        At the core is a large language model (typically GPT-4, Claude 3.5, or open-source
        alternatives) that handles reasoning and planning. The key innovation isn&apos;t the model
        itself, but the orchestration layer that structures how the model interacts with the
        environment. Frameworks like LangChain, Microsoft&apos;s AutoGen, and Anthropic&apos;s Tool Use
        API provide the scaffolding for this orchestration.
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">Sandbox Execution</h3>
      <p>
        Agentic systems need controlled environments where they can execute code, run tests, and
        observe results without risking production systems. Docker containers, cloud sandboxes, and
        increasingly, purpose-built execution environments like E2B provide these safe runtimes.
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">Memory &amp; State Management</h3>
      <p>
        Unlike stateless chat completions, agentic systems must maintain context across multiple
        turns of action and observation. Vector databases, structured logs, and checkpointing
        systems track what the agent has tried, what worked, and what didn&apos;t.
      </p>

      <h2 className="mb-4 text-3xl font-bold text-white">Current Limitations</h2>
      <p>
        Despite impressive progress, agentic AI systems face real constraints:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">Context window limits</span> — even with
          extended context windows, very large codebases exceed what current models can process
          coherently.
        </li>
        <li>
          <span className="text-white font-medium">Hallucination in planning</span> — agents
          occasionally invent APIs, functions, or approaches that don&apos;t actually exist, requiring
          human validation.
        </li>
        <li>
          <span className="text-white font-medium">Cost at scale</span> — autonomous iteration
          generates significant token usage, making agentic workflows more expensive than
          human-only development for simple tasks.
        </li>
        <li>
          <span className="text-white font-medium">Security boundaries</span> — giving AI systems
          autonomous access to code execution, package installation, and production-like
          environments introduces new attack surfaces.
        </li>
      </ul>

      <h2 className="mb-4 text-3xl font-bold text-white">Practical Adoption Guide</h2>
      <p>
        For teams looking to adopt agentic AI workflows, we recommend a phased approach:
      </p>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">Start with pair programming</span> — use
          agentic systems as collaborators, not replacements. Let them suggest approaches and
          generate boilerplate while humans review and approve.
        </li>
        <li>
          <span className="text-white font-medium">Automate test generation</span> — agentic
          systems excel at writing tests. They can analyze code paths and generate comprehensive
          test suites faster than most humans.
        </li>
        <li>
          <span className="text-white font-medium">Target high-friction areas</span> — focus
          agentic workflows on migration scripts, refactoring, and boilerplate generation where
          the ROI is highest.
        </li>
        <li>
          <span className="text-white font-medium">Build feedback loops</span> — instrument your
          agentic workflows with observability so you can measure success rates, iteration
          efficiency, and failure patterns.
        </li>
      </ol>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light mb-1">
            Recommended For
          </p>
          <p className="text-white">Test generation, refactoring, documentation, migration scripts</p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-1">
            Not Ready For
          </p>
          <p className="text-white">Production-critical changes, security-sensitive code, novel architecture design</p>
        </div>
      </div>

      <blockquote className="border-l-4 border-accent pl-6 italic text-neutral-white/70">
        &ldquo;The teams winning with agentic AI aren&apos;t the ones that trust it the most —
        they&apos;re the ones that instrument it the best.&rdquo;
      </blockquote>

      <p>
        Agentic AI is not a replacement for skilled developers. It&apos;s a force multiplier that
        removes friction, accelerates iteration, and lets humans focus on what they do best:
        creative problem-solving and strategic decisions. The teams that learn to work with these
        systems today will be the ones shaping software development tomorrow.
      </p>
    </div>
  )
}

function ASIArticle() {
  return (
    <div className="space-y-10 text-lg leading-relaxed text-neutral-white/80">
      <p>
        Artificial Superintelligence — AI that surpasses human cognitive ability across every
        meaningful domain — has shifted from theoretical curiosity to a genuinely debated timeline
        question. In 2026, the conversation is no longer about whether ASI is possible, but when
        it arrives and what it looks like.
      </p>

      <div className="rounded-2xl border-l-4 border-primary bg-white/[0.04] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light mb-2">
          The Short Answer
        </p>
        <p className="text-white font-semibold">
          Most credible estimates place ASI between 2030 and 2045. The range is still wide, but
          the lower bound has been moving closer every year since 2023.
        </p>
      </div>

      <h2 className="mb-4 text-3xl font-bold text-white">The Current Frontier</h2>
      <p>
        In 2026, frontier models demonstrate narrow superhuman performance in specific domains —
        mathematical reasoning, code generation, and strategic game play. GPT-5 and Claude 4
        achieve expert-level results on professional exams, and specialized systems outperform
        humans at drug discovery, materials science, and logistics optimization.
      </p>
      <p>
        The gap between narrow AI excellence and general intelligence remains significant. Current
        systems lack the kind of robust world models, causal reasoning, and adaptive learning that
        characterize human intelligence. An AI that can write production-ready code may still fail
        at basic common-sense tasks a child would find trivial.
      </p>

      <h2 className="mb-4 text-3xl font-bold text-white">The Scaling Debate</h2>
      <p>
        The dominant paradigm for advancing AI capabilities has been scaling — more data, larger
        models, more compute. This approach has delivered consistent improvements, but there are
        growing signs of diminishing returns. Chinchilla-optimal training, Mixture of Experts, and
        multi-modal architectures represent refinements, but not fundamentally new approaches.
      </p>
      <p>
        The counter-argument, advocated by researchers at DeepMind and Anthropic, is that
        qualitative leaps will come not from larger models but from new architectures —
        systems that can learn continuously, build internal world models, and reason causally
        rather than statistically.
      </p>

      <h2 className="mb-4 text-3xl font-bold text-white">Key Technical Barriers</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">Reasoning robustness</span> — current systems
          lack reliable reasoning. They can solve complex math problems but fail at simple logical
          deductions when presented in unfamiliar ways.
        </li>
        <li>
          <span className="text-white font-medium">Continuous learning</span> — today&apos;s models are
          frozen at deployment. True superintelligence requires systems that learn and adapt
          without catastrophic forgetting.
        </li>
        <li>
          <span className="text-white font-medium">World models</span> — humans build rich
          internal models of how the world works. Current AI systems have no equivalent, relying
          instead on pattern matching in latent space.
        </li>
        <li>
          <span className="text-white font-medium">Agency and goal-setting</span> — ASI requires
          not just intelligence but agency: the ability to set goals, plan multi-step strategies,
          and operate autonomously across domains.
        </li>
      </ul>

      <h2 className="mb-4 text-3xl font-bold text-white">Timeline Estimates</h2>
      <p>
        We track three categories of estimates from leading research organizations:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 text-center">
          <p className="text-3xl font-bold text-accent mb-1">2027-2030</p>
          <p className="text-sm text-neutral-white/60">Optimistic (AI labs)</p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 text-center">
          <p className="text-3xl font-bold text-white mb-1">2030-2040</p>
          <p className="text-sm text-neutral-white/60">Consensus (academia)</p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 text-center">
          <p className="text-3xl font-bold text-primary-light mb-1">2040+</p>
          <p className="text-sm text-neutral-white/60">Conservative (skeptics)</p>
        </div>
      </div>

      <h2 className="mb-4 text-3xl font-bold text-white">What Businesses Should Do Today</h2>
      <p>
        The uncertainty around ASI timelines doesn&apos;t mean inaction. The most practical approach
        for businesses is to build capabilities that will be valuable regardless of when ASI
        arrives:
      </p>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">Invest in AI-native workflows</span> —
          organizations that deeply integrate current AI capabilities into their operations will
          have the infrastructure to adopt whatever comes next.
        </li>
        <li>
          <span className="text-white font-medium">Build data moats</span> — proprietary,
          high-quality datasets are increasingly valuable as general models commoditize.
        </li>
        <li>
          <span className="text-white font-medium">Develop AI governance</span> — the
          organizations that figure out safe, responsible AI deployment today will have the
          playbooks when capabilities accelerate.
        </li>
        <li>
          <span className="text-white font-medium">Stay liquid in AI strategy</span> — avoid
          lock-in to any single model or approach. The landscape shifts quarterly.
        </li>
      </ol>

      <blockquote className="border-l-4 border-accent pl-6 italic text-neutral-white/70">
        &ldquo;The most dangerous assumption about ASI is that we have more time than we think.
        The second most dangerous is believing it can&apos;t arrive this decade.&rdquo;
      </blockquote>

      <p>
        Whether ASI arrives in 5 years or 20, the businesses that prepare today will be the ones
        that thrive in either scenario. The ones that wait will find themselves scrambling.
      </p>
    </div>
  )
}

function ASIImpactsArticle() {
  return (
    <div className="space-y-10 text-lg leading-relaxed text-neutral-white/80">
      <p>
        The conversation around Artificial Superintelligence tends to polarize between utopian
        visions of abundance and dystopian warnings of existential risk. The reality, as with most
        transformative technologies, will be messier, more nuanced, and arrive unevenly across
        sectors.
      </p>

      <h2 className="mb-4 text-3xl font-bold text-white">Business Transformation</h2>
      <p>
        The most immediate business impact of increasingly capable AI systems will be the
        reorganization of knowledge work. When AI systems can reason at or above human level across
        most cognitive tasks, the fundamental unit of economic production shifts from the
        individual worker to the human-AI team.
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">Knowledge work velocity</span> — research,
          analysis, strategy, and creative work could accelerate 10-100x. What takes a team of
          analysts a week could take a human-AI pair an hour.
        </li>
        <li>
          <span className="text-white font-medium">Organizational structure</span> — companies
          will flatten as AI systems absorb middle-management functions of coordination,
          reporting, and resource allocation.
        </li>
        <li>
          <span className="text-white font-medium">Competitive dynamics</span> — the advantage
          shifts from scale (more employees, more offices) to insight (better questions, better
          data, better AI orchestration).
        </li>
      </ul>

      <h2 className="mb-4 text-3xl font-bold text-white">Societal Shifts</h2>
      <p>
        The societal impacts of ASI are likely to be more profound than the business impacts,
        because they touch on fundamental questions of human purpose, economic distribution, and
        power.
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">Employment and Economic Distribution</h3>
      <p>
        The most immediate concern is employment displacement. Unlike previous technological
        revolutions that primarily affected manual labor, ASI would impact cognitive work —
        the category that has grown to dominate developed economies. This raises difficult
        questions about economic distribution that markets alone cannot answer.
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">Power Concentration</h3>
      <p>
        ASI development requires enormous computational resources and talent. If the first ASI
        systems are developed by a small number of organizations, this could concentrate economic
        and political power to an unprecedented degree. The debate around open-source AI
        development takes on existential stakes in an ASI context.
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">Truth and Epistemology</h3>
      <p>
        When AI systems can generate convincing arguments, realistic media, and persuasive
        narratives at scale, the social consensus about what is true becomes harder to maintain.
        Societies will need new mechanisms for establishing shared reality.
      </p>

      <h2 className="mb-4 text-3xl font-bold text-white">Technological Spillovers</h2>
      <p>
        ASI-level capabilities would accelerate progress in every scientific and engineering
        domain:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-lg font-bold text-white mb-2">Medicine</p>
          <p className="text-sm text-neutral-white/70">
            Drug discovery timelines could compress from decades to months. Personalized medicine
            becomes truly personalized.
          </p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-lg font-bold text-white mb-2">Energy</p>
          <p className="text-sm text-neutral-white/70">
            Fusion reactor design, battery chemistry optimization, and grid-scale storage solutions
            could advance rapidly.
          </p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-lg font-bold text-white mb-2">Climate</p>
          <p className="text-sm text-neutral-white/70">
            Climate modeling, carbon capture materials, and geoengineering strategies could reach
            new levels of sophistication.
          </p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-lg font-bold text-white mb-2">Space</p>
          <p className="text-sm text-neutral-white/70">
            Autonomous systems could design and manage space missions, orbital infrastructure, and
            extraterrestrial habitats.
          </p>
        </div>
      </div>

      <h2 className="mb-4 text-3xl font-bold text-white">Preparing for Multiple Futures</h2>
      <p>
        The range of possible ASI outcomes is extraordinarily wide. Responsible preparation
        requires considering multiple scenarios:
      </p>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">Fast takeoff</span> — ASI arrives within a few
          years of being demonstrated, with rapid recursive self-improvement.
        </li>
        <li>
          <span className="text-white font-medium">Gradual ascent</span> — capabilities improve
          steadily but slowly, giving society time to adapt.
        </li>
        <li>
          <span className="text-white font-medium">Plateau</span> — progress hits fundamental
          barriers that slow or stop advancement at near-human levels.
        </li>
        <li>
          <span className="text-white font-medium">Multipolar scenario</span> — multiple ASI
          systems emerge simultaneously, creating a competitive landscape.
        </li>
      </ol>

      <blockquote className="border-l-4 border-accent pl-6 italic text-neutral-white/70">
        &ldquo;The question isn&apos;t whether ASI will transform society — it&apos;s whether we&apos;ll have
        built the institutions and norms to direct that transformation toward human flourishing.&rdquo;
      </blockquote>

      <p>
        The goal isn&apos;t to predict which future will materialize, but to build systems —
        technological, economic, and social — that are robust across multiple scenarios. Resilience,
        not prediction, is the right strategy for an uncertain ASI future.
      </p>
    </div>
  )
}

function SEALArticle() {
  return (
    <div className="space-y-10 text-lg leading-relaxed text-neutral-white/80">
      <p>
        In April 2026, researchers at MIT CSAIL published a paper that quietly shifted the
        landscape of AI learning. Their framework, called SEAL (Self-Adaptive Learning), allows
        language models to teach themselves new tasks on the fly without fine-tuning or
        architectural changes.
      </p>

      <div className="rounded-2xl border-l-4 border-primary bg-white/[0.04] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light mb-2">
          Why It Matters
        </p>
        <p className="text-white font-semibold">
          SEAL is the first practical demonstration of a language model that can systematically
          improve its own performance on novel tasks using only self-generated data and a simple
          reward signal.
        </p>
      </div>

      <h2 className="mb-4 text-3xl font-bold text-white">What is SEAL?</h2>
      <p>
        SEAL introduces a meta-learning loop where a language model generates candidate solutions
        for a task, evaluates them against a lightweight reward function, and iteratively improves
        based on the results. The key insight is that the reward function doesn&apos;t need to be
        perfect — it just needs to provide enough signal to guide improvement.
      </p>
      <p>
        Unlike traditional reinforcement learning from human feedback (RLHF), which requires
        expensive human annotation, SEAL operates entirely in self-supervised mode once an initial
        task description is provided. The model generates its own training data, evaluates its own
        outputs, and updates its approach accordingly.
      </p>

      <h2 className="mb-4 text-3xl font-bold text-white">The Technical Innovation</h2>
      <p>
        The core innovation in SEAL is what the researchers call &quot;self-supervised bootstrapping.&quot;
        The model starts with a minimal task specification — a few examples or a natural language
        description — and then enters a loop:
      </p>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">Generate</span> — produce multiple candidate
          solutions for the task.
        </li>
        <li>
          <span className="text-white font-medium">Evaluate</span> — score each solution against
          the task&apos;s reward function.
        </li>
        <li>
          <span className="text-white font-medium">Select</span> — identify the highest-scoring
          approaches and analyze what made them successful.
        </li>
        <li>
          <span className="text-white font-medium">Adapt</span> — update the model&apos;s internal
          representations or prompting strategy to favor successful patterns.
        </li>
        <li>
          <span className="text-white font-medium">Repeat</span> — continue until performance
          plateaus or reaches a threshold.
        </li>
      </ol>
      <p>
        This loop bears strong resemblance to how humans learn complex skills: try, get feedback,
        adjust, try again. The difference is that SEAL can execute thousands of iterations in
        minutes.
      </p>

      <h2 className="mb-4 text-3xl font-bold text-white">Experimental Results</h2>
      <p>
        MIT tested SEAL across a range of tasks including mathematical reasoning, code generation,
        and natural language understanding. The results were striking:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          On MATH benchmark problems, SEAL-improved models showed a 23% accuracy improvement over
          base models without any human feedback.
        </li>
        <li>
          For code generation (HumanEval), SEAL achieved a 31% relative improvement in
          pass@1 scores.
        </li>
        <li>
          The adaptation typically required 500-2000 self-supervised iterations, taking 5-30
          minutes on consumer hardware.
        </li>
      </ul>

      <h2 className="mb-4 text-3xl font-bold text-white">Implications for Applied AI</h2>
      <p>
        For teams building production AI systems, SEAL has several practical implications:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">Domain adaptation without fine-tuning</span> —
          instead of costly fine-tuning pipelines, teams can use SEAL to adapt general models to
          specific domains with just a task description and reward function.
        </li>
        <li>
          <span className="text-white font-medium">Continuous improvement</span> — deployed models
          could use SEAL to improve their performance over time, learning from real-world usage
          patterns.
        </li>
        <li>
          <span className="text-white font-medium">Reduced data dependency</span> — organizations
          with limited labeled data can still achieve strong performance through self-supervised
          adaptation.
        </li>
      </ul>

      <blockquote className="border-l-4 border-accent pl-6 italic text-neutral-white/70">
        &ldquo;SEAL doesn&apos;t replace fine-tuning — it makes it optional. For a wide class of tasks,
        the model can teach itself everything it needs to know.&rdquo;
      </blockquote>

      <p>
        Of course, SEAL isn&apos;t a silver bullet. It works best for tasks where reward functions can
        be clearly specified — code compiles or doesn&apos;t, math answers are right or wrong. For
        subjective tasks like creative writing or strategic reasoning, defining an effective reward
        function remains challenging.
      </p>
      <p>
        Nonetheless, SEAL represents a significant step toward more autonomous AI systems —
        systems that don&apos;t just respond to prompts but actively work to improve their own
        performance. For applied AI delivery, that&apos;s exactly the direction we need.
      </p>
    </div>
  )
}

function MojoArticle() {
  return (
    <div className="space-y-10 text-lg leading-relaxed text-neutral-white/80">
      <p>
        When Mojo was announced in 2023, it was met with a mix of excitement and skepticism. A new
        programming language designed specifically for AI — fast enough to replace CUDA, familiar
        enough to replace Python — sounded too good to be true. Two years later, we&apos;ve been using
        Mojo in production at Lyvena, and it&apos;s time to share what we&apos;ve learned.
      </p>

      <div className="rounded-2xl border-l-4 border-accent bg-white/[0.04] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-2">
          Bottom Line
        </p>
        <p className="text-white font-semibold">
          Mojo is not a Python replacement. It&apos;s a performance layer: write your logic in Python,
          hot-path in Mojo. That combination is genuinely powerful.
        </p>
      </div>

      <h2 className="mb-4 text-3xl font-bold text-white">The Python Problem</h2>
      <p>
        Python dominates AI development for good reasons: it&apos;s readable, has an unmatched
        ecosystem, and lets you iterate quickly. But Python has fundamental performance
        limitations that become bottlenecks as AI systems scale:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">GIL (Global Interpreter Lock)</span> —
          prevents true multi-threading for CPU-bound tasks.
        </li>
        <li>
          <span className="text-white font-medium">Dynamic typing overhead</span> — every
          operation incurs type-checking and dispatch costs.
        </li>
        <li>
          <span className="text-white font-medium">Interpreted execution</span> — no compiler
          optimizations for hot loops or numerical operations.
        </li>
        <li>
          <span className="text-white font-medium">Memory management</span> — garbage collection
          introduces unpredictable pauses in latency-sensitive systems.
        </li>
      </ul>

      <h2 className="mb-4 text-3xl font-bold text-white">Where Mojo Excels</h2>
      <p>
        Mojo addresses these limitations by providing Python-level syntax with compiled
        performance. The key capabilities we&apos;ve found most valuable:
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">Zero-Cost Abstractions</h3>
      <p>
        Mojo&apos;s type system allows developers to write high-level code that compiles to efficient
        machine code. Functions annotated with types avoid the dynamic dispatch overhead of Python
        while maintaining readability.
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">Hardware Acceleration</h3>
      <p>
        Mojo compiles to multiple targets: CPU, GPU (CUDA and Metal), and even specialized
        hardware like TPUs. This means the same code can run on a laptop during development and
        on a GPU cluster in production.
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">Python Interoperability</h3>
      <p>
        This is Mojo&apos;s killer feature. You can import and use Python libraries directly in Mojo
        code. NumPy, PyTorch, Transformers — they all work. You don&apos;t have to choose between
        ecosystem and performance.
        </p>

      <h2 className="mb-4 text-3xl font-bold text-white">Production Patterns We Use</h2>
      <p>
        In practice, we use Mojo in specific, targeted ways within our Python codebases:
      </p>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">Tokenization and preprocessing</span> — text
          tokenization, embedding generation, and feature engineering pipelines see 10-50x
          speedups in Mojo.
        </li>
        <li>
          <span className="text-white font-medium">Inference optimization</span> — model inference
          loops, especially for small to medium models, benefit from Mojo&apos;s compiler
          optimizations.
        </li>
        <li>
          <span className="text-white font-medium">Custom operations</span> — when we need
          operations that aren&apos;t efficiently implemented in PyTorch or TensorFlow, we write them
          in Mojo.
        </li>
        <li>
          <span className="text-white font-medium">Data pipelines</span> — ETL operations and data
          transformation pipelines that process large datasets in memory.
        </li>
      </ol>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light mb-1">
            Python
          </p>
          <p className="text-white">Rapid prototyping, data exploration, orchestration, ecosystem access</p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-1">
            Mojo
          </p>
          <p className="text-white">Hot-path operations, numerical computing, inference bottlenecks, custom kernels</p>
        </div>
      </div>

      <blockquote className="border-l-4 border-accent pl-6 italic text-neutral-white/70">
        &ldquo;The winning strategy isn&apos;t Python vs Mojo — it&apos;s Python with Mojo. Use each for what
        it does best.&rdquo;
      </blockquote>

      <p>
        Mojo is still maturing. The tooling isn&apos;t where Python&apos;s is, the ecosystem is smaller,
        and there are sharp edges in the language design. But as a performance layer for Python
        AI systems, it&apos;s already production-viable for specific use cases. We expect to see Mojo
        adoption grow significantly as the language stabilizes and the tooling improves.
      </p>
    </div>
  )
}

function KiewsArticle() {
  return (
    <div className="space-y-10 text-lg leading-relaxed text-neutral-white/80">
      <p>
        At Lyvena, we recently completed a project that exemplifies our applied AI delivery
        methodology: <strong className="text-white">Kiews</strong>, a no-code platform that lets
        users integrate NEAR Protocol functionality into their applications without writing a
        single line of blockchain code.
      </p>

      <div className="rounded-2xl border-l-4 border-primary bg-white/[0.04] p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light mb-2">
          Project Snapshot
        </p>
        <p className="text-white font-semibold">
          Kiews enables drag-and-drop NEAR Protocol integration — smart contract deployment,
          token transactions, and NFT minting — through a visual interface powered by AI.
        </p>
      </div>

      <h2 className="mb-4 text-3xl font-bold text-white">The Problem</h2>
      <p>
        NEAR Protocol is one of the most developer-friendly blockchain platforms, but it still
        requires Rust or JavaScript proficiency to build meaningful integrations. For businesses
        exploring blockchain capabilities, the cost of hiring specialized developers or training
        existing teams creates a barrier to entry.
      </p>
      <p>
        We saw an opportunity: use AI to abstract away the blockchain complexity. If a user could
        describe what they wanted in natural language, and the system could generate, test, and
        deploy the necessary NEAR Protocol code, that would lower the barrier by an order of
        magnitude.
        </p>

      <h2 className="mb-4 text-3xl font-bold text-white">Our Delivery Methodology</h2>
      <p>
        We applied our Audit, Design, Pilot, Scale framework to the Kiews project:
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">Phase 1: Audit</h3>
      <p>
        We spent two weeks mapping the NEAR Protocol integration landscape: common integration
        patterns, pain points, API surfaces, and security requirements. This phase identified
        that the highest-impact target was smart contract deployment and token transactions —
        the operations that most businesses needed but found hardest to implement.
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">Phase 2: Design</h3>
      <p>
        The design phase focused on two questions: how do we make AI generate reliable blockchain
        code, and how do we make the interface intuitive for non-developers? The solution was a
        two-layer architecture:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <span className="text-white font-medium">A visual workflow builder</span> — users drag
          and drop blocks representing NEAR operations (deploy contract, transfer tokens, mint
          NFT) and connect them into pipelines.
        </li>
        <li>
          <span className="text-white font-medium">An AI code generator</span> — trained on
          NEAR Protocol documentation and thousands of example implementations, the AI translates
          visual workflows into optimized Rust or JavaScript code.
        </li>
      </ul>

      <h3 className="mb-3 text-2xl font-bold text-white">Phase 3: Pilot</h3>
      <p>
        We ran a four-week pilot with five businesses that were exploring NEAR Protocol
        integration. During the pilot, we measured code generation accuracy, user satisfaction,
        and deployment success rates. The results were encouraging: 87% of AI-generated contracts
        compiled on first try, and users reported a 70% reduction in integration time compared to
        traditional development.
      </p>

      <h3 className="mb-3 text-2xl font-bold text-white">Phase 4: Scale</h3>
      <p>
        Based on pilot feedback, we expanded Kiews to support additional NEAR features:
        cross-contract calls, storage management, access control, and event indexing. The visual
        workflow builder grew to include conditional logic, loops, and error handling.
      </p>

      <h2 className="mb-4 text-3xl font-bold text-white">Technical Architecture</h2>
      <p>
        Kiews is built on a modern AI stack:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Frontend: Next.js with a drag-and-drop workflow interface</li>
        <li>AI engine: Fine-tuned Llama 3 on NEAR Protocol code and documentation</li>
        <li>Backend: FastAPI with WebSocket support for real-time code generation</li>
        <li>Blockchain layer: NEAR Protocol SDK for Rust and JavaScript</li>
        <li>Testing: Automated NEAR sandbox for compiling and testing generated contracts</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 text-center">
          <p className="text-3xl font-bold text-accent mb-1">87%</p>
          <p className="text-sm text-neutral-white/60">First-try compile rate</p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 text-center">
          <p className="text-3xl font-bold text-white mb-1">70%</p>
          <p className="text-sm text-neutral-white/60">Faster integration time</p>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5 text-center">
          <p className="text-3xl font-bold text-primary-light mb-1">5</p>
          <p className="text-sm text-neutral-white/60">Pilot participants</p>
        </div>
      </div>

      <blockquote className="border-l-4 border-accent pl-6 italic text-neutral-white/70">
        &ldquo;Kiews doesn&apos;t replace blockchain developers. It removes the friction of getting
        started — and that changes the adoption calculus entirely.&rdquo;
      </blockquote>

      <p>
        Kiews is currently in private beta, and we&apos;re expanding the platform to support
        additional blockchains. The lesson from this project is clear: applied AI delivery works
        best when it removes a specific, measurable friction — in this case, the cost and
        complexity of first-time blockchain integration.
      </p>
    </div>
  )
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const article = stories.find((s) => s.slug === params.slug)

  if (!article) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <p className="text-6xl mb-4 font-bold text-white">404</p>
          <h1 className="text-3xl font-bold text-white mb-4">Note Not Found</h1>
          <p className="text-neutral-white/70 mb-8">This story doesn&apos;t exist or may have been moved.</p>
          <Link href="/stories" className="btn-primary inline-block">
            Back to Notes
          </Link>
        </div>
      </main>
    )
  }

  const articleIndex = stories.findIndex((s) => s.slug === params.slug)
  const prevArticle = articleIndex > 0 ? stories[articleIndex - 1] : null
  const nextArticle = articleIndex < stories.length - 1 ? stories[articleIndex + 1] : null

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/5">
        <div className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300" id="reading-progress" />
      </div>

      <section className="relative pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary-dark/20 to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-primary/20 text-primary-light border border-primary/30">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-neutral-white/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-neutral-white/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(article.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-white/80 leading-relaxed max-w-2xl">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="relative pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <figure className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl shadow-primary/10 mb-12 md:mb-16">
            <div className="aspect-[2/1] md:aspect-[21/9] relative">
              <Image
                src={articleHeroImages[article.slug]?.src || ''}
                alt={articleHeroImages[article.slug]?.alt || article.title}
                width={1200}
                height={675}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-charcoal/60 via-transparent to-neutral-charcoal/20" />
            </div>
          </figure>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <article className="rounded-2xl md:rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-10 lg:p-12 backdrop-blur-sm relative">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary via-accent to-transparent" />
              {article.slug === 'launching-prospera-havens-ai-powered-real-estate' ? (
                <ProsperaHavensArticle />
              ) : article.slug === 'ultimate-guide-agentic-ai-automated-coding' ? (
                <AgenticAIArticle />
              ) : article.slug === 'how-close-are-we-to-artificial-superintelligence' ? (
                <ASIArticle />
              ) : article.slug === 'impacts-of-asi-on-business-society-technology' ? (
                <ASIImpactsArticle />
              ) : article.slug === 'mit-seal-self-adapting-language-models' ? (
                <SEALArticle />
              ) : article.slug === 'mojo-vs-python-how-we-use-mojo-to-build-ai-systems-that-scale' ? (
                <MojoArticle />
              ) : article.slug === 'case-study-developing-kiews-no-code-near-protocol-integrations' ? (
                <KiewsArticle />
              ) : (
                article.sections.map((section) => (
                  <div key={section.title} className="mb-10 last:mb-0">
                    <h2 className="mb-4 text-3xl font-bold text-white">{section.title}</h2>
                    <div className="space-y-4 text-lg leading-relaxed text-neutral-white/80">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </article>

            <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
              <div className="flex items-center gap-4">
                {prevArticle && (
                  <Link
                    href={`/stories/${prevArticle.slug}`}
                    className="group inline-flex items-center gap-2 text-sm text-neutral-white/60 hover:text-accent transition-colors"
                  >
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden sm:inline">Previous Note</span>
                  </Link>
                )}
              </div>
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold group"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>All Notes</span>
              </Link>
              <div className="flex items-center gap-4">
                {nextArticle && (
                  <Link
                    href={`/stories/${nextArticle.slug}`}
                    className="group inline-flex items-center gap-2 text-sm text-neutral-white/60 hover:text-accent transition-colors"
                  >
                    <span className="hidden sm:inline">Next Note</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-white opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">Ready to apply this?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to apply this to your own team?
              </h2>
              <p className="text-lg text-neutral-white/90 mb-8">
                Bring the workflow or product question and we will help shape the next credible step.
              </p>
              <Link href="/#contact" className="btn-primary inline-block">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
