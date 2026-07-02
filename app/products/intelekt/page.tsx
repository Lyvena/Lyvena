'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import { FaRocket, FaArrowRight, FaBrain, FaRobot, FaCode, FaCogs, FaMagic, FaLayerGroup, FaGitAlt, FaEye, FaSync, FaCheckCircle, FaCircle, FaClock, FaBolt, FaSearch, FaShieldAlt, FaStar, FaCubes } from 'react-icons/fa'

type AgentStatus = 'idle' | 'running' | 'done' | 'thinking'

const agents: { key: string; label: string; icon: React.ElementType; color: string; status: AgentStatus; task: string }[] = [
  { key: 'pm', label: 'PM Agent', icon: FaBrain, color: 'from-violet-500 to-indigo-500', status: 'thinking', task: 'Analyzing vibe & creating PRD...' },
  { key: 'codegen', label: 'CodeGen Agent', icon: FaCode, color: 'from-emerald-500 to-teal-500', status: 'idle', task: '' },
  { key: 'refactor', label: 'Refactor Agent', icon: FaShieldAlt, color: 'from-cyan-500 to-blue-500', status: 'idle', task: '' },
  { key: 'debug', label: 'Debug Agent', icon: FaSearch, color: 'from-amber-500 to-orange-500', status: 'idle', task: '' },
  { key: 'deploy', label: 'Deploy Agent', icon: FaRocket, color: 'from-purple-500 to-pink-500', status: 'idle', task: '' },
]

const pipelineSteps = [
  { id: 'vibe', label: 'Vibe' },
  { id: 'plan', label: 'Plan' },
  { id: 'generate', label: 'Generate' },
  { id: 'review', label: 'Review' },
  { id: 'preview', label: 'Preview' },
  { id: 'deploy', label: 'Deploy' },
]

const features = [
  {
    icon: FaBrain,
    title: 'AI Agentic by Default',
    description: 'Every generated app ships with embedded runtime agents that provide self-healing, proactive behavior, and dynamic intelligence.',
  },
  {
    icon: FaRobot,
    title: 'AI Product Manager',
    description: 'An intelligent PM agent that plans, breaks down tasks, coordinates other agents, and collaborates with you in real-time.',
  },
  {
    icon: FaSync,
    title: 'Self-Improving System',
    description: 'Agents learn from every build — feedback, error patterns, and user edits are analyzed daily to optimize prompts and code quality.',
  },
  {
    icon: FaLayerGroup,
    title: 'Multi-Agent Collaboration',
    description: 'Visual canvas showing real-time decisions from PM, CodeGen, Refactor, Debug, Deploy, and Runtime agents working together.',
  },
  {
    icon: FaEye,
    title: 'Live Preview & Hot Reload',
    description: 'Instant sandboxed preview with automatic redeployment on every change — see your app come to life in real-time.',
  },
  {
    icon: FaCubes,
    title: 'InsForge Native',
    description: 'Zero-config deployment on InsForge — Postgres, Edge Functions, Auth, Storage, and Realtime built in. No external hosts.',
  },
  {
    icon: FaGitAlt,
    title: 'GitHub Integration',
    description: 'Import repos, auto-commit on every AI edit, manage branches, push PRs, and two-way sync with your GitHub projects.',
  },
  {
    icon: FaBolt,
    title: 'Grok 4.3 Powered',
    description: 'Deep integration with xAI Grok 4.3 for superior code generation, reasoning, and agent decision-making.',
  },
  {
    icon: FaMagic,
    title: 'One-Click Deploy',
    description: 'From vibe to live URL in minutes. Deploy full-stack agentic applications to InsForge Edge with a single click.',
  },
]

const workflow = [
  { step: '01', title: 'Vibe', description: 'Describe your app idea in natural language — "a calm to-do app with habit tracking"' },
  { step: '02', title: 'Plan', description: 'AI PM agent creates a PRD, user stories, and architecture breakdown' },
  { step: '03', title: 'Generate', description: 'CodeGen agent builds full-stack code with Grok 4.3 streaming' },
  { step: '04', title: 'Review', description: 'Reviewer agent runs linting, security scans, and test generation' },
  { step: '05', title: 'Preview', description: 'Live sandbox preview with hot reload and runtime agent console' },
  { step: '06', title: 'Deploy', description: 'One-click deploy to InsForge Edge with custom domain support' },
]

const exampleVibes = [
  'A calm to-do app with habit tracking and daily reflections',
  'E-commerce store for digital downloads with Stripe',
  'SaaS dashboard with user auth, data tables, and charts',
  'Real-time chat app with AI moderation',
]

const agentDecisions = [
  { agent: 'PM', thought: 'User wants calm vibe prioritizing minimal UI + proactive notifications', action: 'Created 12 tasks', confidence: 92 },
  { agent: 'CodeGen', thought: 'Generating Next.js frontend with Tailwind and shadcn/ui', action: 'Writing 8 components', confidence: 88 },
  { agent: 'Refactor', thought: 'Reviewing generated code for security vulnerabilities', action: '3 optimizations found', confidence: 95 },
  { agent: 'Deploy', thought: 'Bundling app and configuring InsForge Edge', action: 'Deploying to production', confidence: 97 },
]

export default function IntelektPage() {
  const [activeStep, setActiveStep] = useState(0)
  const [activeAgents, setActiveAgents] = useState(agents.map(a => ({ ...a, status: 'idle' as AgentStatus })))
  const [currentDecision, setCurrentDecision] = useState(0)
  const [showVibeResult, setShowVibeResult] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % pipelineSteps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgents(prev => {
        const next = [...prev]
        const idx = Math.floor(Math.random() * next.length)
        next[idx] = { ...next[idx], status: next[idx].status === 'running' ? 'done' : 'running' as const }
        return next
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDecision(prev => (prev + 1) % agentDecisions.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVibeResult(prev => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero */}
      <section className="section-padding pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-violet-500/15 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 w-[380px] h-[380px] bg-indigo-500/10 rounded-full blur-[110px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-8">
              <FaRocket className="text-xs" />
              Live
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Intelekt
            </h1>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              AI Agentic Vibe Coding Platform
            </p>
            <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-10">
              Describe any app in natural language and Intelekt&apos;s multi-agent AI system automatically builds,
              deploys, and maintains self-improving agentic applications — entirely on InsForge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://intelekt.live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-violet-500/25 transition-all hover:scale-105"
              >
                Visit Platform
                <FaArrowRight className="text-sm" />
              </a>
              <Link href="/products" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10">
                All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10K+', label: 'Apps Generated' },
              { value: '99.7%', label: 'Deploy Success' },
              { value: '<3m', label: 'Avg. Build Time' },
              { value: '6', label: 'Active Agents' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive IDE Mockup */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Browser frame */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-violet-500/10">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-4 py-1.5 text-sm text-white/75 text-center">intelekt.live</div>
                </div>
                <div className="flex items-center gap-1 text-xs text-white/40">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Agents Active
                </div>
              </div>

              {/* Pipeline Progress */}
              <div className="px-6 pt-4 pb-2 border-b border-white/5">
                <div className="flex items-center justify-between">
                  {pipelineSteps.map((step, idx) => (
                    <div key={step.id} className="flex items-center gap-2">
                      <motion.div
                        animate={{
                          scale: idx === activeStep ? [1, 1.2, 1] : 1,
                          backgroundColor: idx <= activeStep ? 'rgb(139, 92, 246)' : 'rgba(255,255,255,0.1)',
                        }}
                        transition={idx === activeStep ? { duration: 1, repeat: Infinity } : { duration: 0.3 }}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ backgroundColor: idx <= activeStep ? '#8B5CF6' : 'rgba(255,255,255,0.1)' }}
                      >
                        {idx < activeStep ? <FaCheckCircle className="text-white text-xs" /> : idx + 1}
                      </motion.div>
                      <span className={`text-xs hidden md:inline ${idx <= activeStep ? 'text-violet-300' : 'text-white/30'}`}>
                        {step.label}
                      </span>
                      {idx < pipelineSteps.length - 1 && (
                        <div className={`w-6 h-px mx-1 ${idx < activeStep ? 'bg-violet-500' : 'bg-white/10'}`} />
                      )}
                    </div>
                  ))}
                </div>
                {/* Spotlight message */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-xs text-white/50 mt-2 font-mono"
                  >
                    {pipelineSteps[activeStep].id === 'vibe' && 'Waiting for vibe input...'}
                    {pipelineSteps[activeStep].id === 'plan' && 'PM Agent: Analyzing requirements and creating PRD...'}
                    {pipelineSteps[activeStep].id === 'generate' && 'CodeGen Agent: Writing 12 components with Grok 4.3...'}
                    {pipelineSteps[activeStep].id === 'review' && 'Refactor Agent: Scanning for security & performance issues...'}
                    {pipelineSteps[activeStep].id === 'preview' && 'Preview Service: Building sandbox with hot reload...'}
                    {pipelineSteps[activeStep].id === 'deploy' && 'Deploy Agent: Publishing to InsForge Edge...'}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* IDE Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  {/* Agent Sidebar */}
                  <div className="md:col-span-3 space-y-2">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-medium">Active Agents</p>
                    {activeAgents.map(agent => (
                      <motion.div
                        key={agent.key}
                        layout
                        className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all"
                      >
                        <div className="flex items-center gap-2.5">
                          <motion.div
                            animate={agent.status === 'running' ? { scale: [1, 1.3, 1] } : {}}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className={`w-2 h-2 rounded-full ${
                              agent.status === 'running' ? 'bg-emerald-400' :
                              agent.status === 'done' ? 'bg-violet-400' :
                              'bg-white/20'
                            }`}
                          />
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center`}>
                            <agent.icon className="text-white text-[10px]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-xs font-medium truncate">{agent.label}</p>
                            <p className={`text-[10px] truncate ${
                              agent.status === 'running' ? 'text-emerald-400' : 'text-white/30'
                            }`}>
                              {agent.status === 'running' ? 'Working...' : agent.status === 'done' ? 'Complete' : 'Ready'}
                            </p>
                          </div>
                        </div>
                        {agent.status === 'running' && (
                          <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            className="h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-2"
                          />
                        )}
                      </motion.div>
                    ))}
                    {/* Communication bus */}
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <p className="text-[10px] text-white/20">Agent Communication Bus</p>
                      <div className="h-px bg-white/5 mt-1 relative overflow-hidden">
                        <motion.div
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"
                        />
                      </div>
                      <p className="text-[9px] text-white/15 mt-1">PM ↔ CodeGen ↔ Refactor • Runtime listening</p>
                    </div>
                  </div>

                  {/* Main Area */}
                  <div className="md:col-span-9 space-y-4">
                    {/* Vibe Input */}
                    <div className="relative">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-violet-500/20">
                        <p className="text-violet-300 text-xs font-medium mb-2">Describe your app idea (Vibe)</p>
                        <AnimatePresence mode="wait">
                          {!showVibeResult ? (
                            <motion.div
                              key="input"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="space-y-2"
                            >
                              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                <p className="text-white/50 text-sm font-mono italic cursor-text">
                                  {exampleVibes.map((v, i) => (
                                    <motion.span
                                      key={v}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: [0, 1, 1, 1, 0] }}
                                      transition={{ duration: 5, delay: i * 5, repeat: Infinity, repeatDelay: 15 }}
                                      className="block"
                                    >
                                      &ldquo;{v}&rdquo;
                                    </motion.span>
                                  ))}
                                </p>
                              </div>
                              <div className="flex gap-2">
                                {['Build App', 'Analyze'].map(btn => (
                                  <div key={btn} className="px-3 py-1.5 rounded-lg bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-medium">
                                    {btn}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="result"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="space-y-3"
                            >
                              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                  <p className="text-emerald-300 text-xs font-medium">Plan Created</p>
                                </div>
                                <p className="text-white/70 text-xs">12 tasks • 6 components • 3 data models • 2 edge functions</p>
                              </div>
                              <div className="flex gap-2 flex-wrap">
                                <div className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px]">Approve Plan</div>
                                <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-white/40 text-[10px]">Request Changes</div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Generated Code Preview + Agent Decisions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Code Preview */}
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Generated Preview</p>
                        <div className="bg-neutral-charcoal rounded-lg p-3 border border-white/5">
                          <div className="flex items-center gap-2 mb-2 text-[10px]">
                            <span className="text-violet-400">src/app/page.tsx</span>
                            <span className="text-emerald-400">+ new</span>
                          </div>
                          <pre className="text-[10px] font-mono text-white/60 leading-relaxed">
                            <motion.span
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >const</motion.span>{' '}
                            <motion.span
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                            >App</motion.span>{' '}
                            = () =&gt; {'{'}
                          </pre>
                          <pre className="text-[10px] font-mono text-white/40 leading-relaxed mt-1">
                            {'  '}return (
                          </pre>
                          <pre className="text-[10px] font-mono text-white/30 leading-relaxed">
                            {'    '}&lt;main&gt;
                          </pre>
                          <pre className="text-[10px] font-mono text-violet-300/50 leading-relaxed">
                            {'      '}&lt;Header /&gt;
                          </pre>
                          <pre className="text-[10px] font-mono text-violet-300/50 leading-relaxed">
                            {'      '}&lt;Dashboard /&gt;
                          </pre>
                          <pre className="text-[10px] font-mono text-white/30 leading-relaxed">
                            {'    '}&lt;/main&gt;
                          </pre>
                          <pre className="text-[10px] font-mono text-white/40 leading-relaxed">
                            {'  '})
                          </pre>
                          <pre className="text-[10px] font-mono text-white/60 leading-relaxed">
                            {'}'}
                          </pre>
                          <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-2 h-4 bg-violet-400 inline-block"
                          />
                        </div>
                        <div className="flex items-center gap-3 mt-2 text-[10px] text-white/30">
                          <span>12 files generated</span>
                          <span className="text-emerald-400">✓ TypeScript</span>
                          <span className="text-violet-400">~ InsForge</span>
                        </div>
                      </div>

                      {/* Agent Decision Log */}
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Live Agent Decisions</p>
                        <div className="space-y-2">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentDecision}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              className="p-2.5 rounded-lg bg-white/[0.03] border-l-2 border-violet-500"
                            >
                              <div className="flex items-center gap-2 text-xs">
                                <span className="text-violet-300 font-medium">{agentDecisions[currentDecision].agent}</span>
                                <span className="text-white/20">•</span>
                                <span className="text-emerald-400 text-[10px]">{agentDecisions[currentDecision].confidence}% confidence</span>
                              </div>
                              <p className="text-white/60 text-[11px] mt-1">{agentDecisions[currentDecision].thought}</p>
                              <p className="text-white/30 text-[10px] mt-0.5">→ {agentDecisions[currentDecision].action}</p>
                            </motion.div>
                          </AnimatePresence>
                          <div className="flex gap-2 mt-3">
                            <div className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20">Approve All</div>
                            <div className="px-2 py-1 rounded bg-white/5 text-white/30 text-[10px] border border-white/10">Override</div>
                          </div>
                        </div>
                        <p className="text-[9px] text-white/15 mt-2">All decisions logged to InsForge • Used for self-improvement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Powerful Capabilities</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Everything you need to build, deploy, and maintain agentic applications — powered by AI.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline / How It Works */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">From Vibe to Live URL</h2>
            <p className="text-lg text-white/80">A fully autonomous pipeline orchestrated by AI agents.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {workflow.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative text-center p-5 rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-white/10 hover:border-violet-500/30 transition-all"
              >
                <div className="text-3xl font-display font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{item.description}</p>
                {idx < workflow.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2">
                    <FaArrowRight className="text-white/15 text-sm" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Collaboration Preview */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Multi-Agent Orchestration</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Six specialized AI agents work together in real-time to build your application.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'AI Product Manager', desc: 'Breaks down vibes into PRDs, tasks, and architecture. Coordinates all other agents and collaborates with you in real-time.', icon: FaBrain, color: 'from-violet-500 to-indigo-500' },
              { title: 'CodeGen Agent', desc: 'Generates full-stack code using Grok 4.3 — React/TypeScript frontend, InsForge backend, DB schema, and edge functions.', icon: FaCode, color: 'from-emerald-500 to-teal-500' },
              { title: 'Refactor Agent', desc: 'Reviews generated code for security vulnerabilities, performance issues, and best practices. Runs static analysis and generates tests.', icon: FaShieldAlt, color: 'from-cyan-500 to-blue-500' },
              { title: 'Debug Agent', desc: 'Catches runtime errors, traces failures through the stack, and applies targeted fixes automatically.', icon: FaSearch, color: 'from-amber-500 to-orange-500' },
              { title: 'Deploy Agent', desc: 'Bundles the application, syncs DB schema, deploys edge functions, and publishes to InsForge Edge with a live URL.', icon: FaRocket, color: 'from-purple-500 to-pink-500' },
              { title: 'Runtime Agent', desc: 'Embedded in every deployed app. Monitors live behavior, handles user intents, and proactively suggests improvements.', icon: FaStar, color: 'from-rose-500 to-red-500' },
            ].map((agent, idx) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <agent.icon className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{agent.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{agent.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Improving System */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Self-Improving Intelligence</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Intelekt agents learn from every build to continuously improve code quality and prompt accuracy.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Collect Feedback', desc: 'Every build tracks edits, error rates, and explicit ratings from users.' },
              { step: '02', title: 'Score Quality', desc: 'A composite score combines edit ratio, runtime errors, and user feedback.' },
              { step: '03', title: 'Analyze Patterns', desc: 'Grok 4.3 analyzes high and low-scoring builds to identify improvement opportunities.' },
              { step: '04', title: 'Auto-Improve', desc: 'Approved prompt improvements are applied immediately for the next build.' },
            ].map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-white/10"
              >
                <div className="text-4xl font-display font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-violet-900/30 via-purple-900/30 to-indigo-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Build with AI Agents
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
              From idea to production in minutes. Intelekt&apos;s multi-agent system handles the entire lifecycle —
              from planning and coding to deployment and runtime intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://intelekt.live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                Visit Platform <FaArrowRight className="text-sm" />
              </a>
              <Link href="/#contact" className="btn-primary">
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
