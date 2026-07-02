'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import { FaBolt, FaArrowRight, FaRobot, FaCogs, FaServer, FaCode, FaTerminal, FaBrain, FaNetworkWired, FaCube, FaCheckCircle, FaRocket } from 'react-icons/fa'

const layers = [
  { name: 'CLI', icon: FaTerminal, color: 'from-orange-500 to-red-500', desc: 'mojoflow create / dev / build / deploy' },
  { name: 'UI', icon: FaCode, color: 'from-amber-500 to-orange-500', desc: 'Declarative DSL compiles to React/HTML' },
  { name: 'AI', icon: FaBrain, color: 'from-yellow-500 to-amber-500', desc: 'LLM · Agents · Prompts · Orchestration' },
  { name: 'Server', icon: FaServer, color: 'from-orange-500 to-amber-500', desc: 'HTTP · Router · Middleware · Logging' },
  { name: 'Core', icon: FaCube, color: 'from-red-500 to-orange-500', desc: 'Types · Config · Errors · Utilities' },
]

const features = [
  {
    icon: FaBrain,
    title: 'AI-Native Primitives',
    description: 'Built-in LLM client (OpenAI, Anthropic, local), agent execution with think→act→observe loops, prompt templates, and DAG-based task orchestration.',
  },
  {
    icon: FaServer,
    title: 'High-Performance HTTP Server',
    description: 'Pure-Mojo async server using POSIX syscalls directly. Fiber-based concurrency with epoll event loop for massive throughput.',
  },
  {
    icon: FaCode,
    title: 'Declarative UI DSL',
    description: 'Write UI components in Mojo using a declarative DSL that compiles to React/HTML. Props, children, event handlers — all in Mojo syntax.',
  },
  {
    icon: FaTerminal,
    title: 'Full CLI Toolchain',
    description: 'Scaffold projects, run dev servers, build production bundles, and deploy — all from the mojoflow CLI.',
  },
  {
    icon: FaNetworkWired,
    title: 'Agent Orchestration',
    description: 'Pipeline-based task execution with automatic dependency resolution. Chain AI tasks together using {{placeholder}} substitution.',
  },
  {
    icon: FaRocket,
    title: 'Blazing Performance',
    description: 'Leverages Mojo&apos;s systems-level speed with Python-level ergonomics. Designed for MAX Engine and hardware acceleration.',
  },
]

const codeExamples = [
  { label: 'API Server', code: `from mojoflow.server import App\n\nvar app = App()\n\n@app.get("/hello")\nfn hello(req) -> Response:\n    return Response.json(\n      '{"msg": "Hello Mojo!"}'\n    )\n\napp.listen(8080)`, lang: 'mojo' },
  { label: 'AI Agent', code: `from mojoflow.ai import LLMClient, Agent\n\nvar client = LLMClient(\n  provider="openai",\n  model="gpt-4"\n)\nvar agent = Agent(\n  name="research",\n  llm=client\n)\n\nvar result = agent.run(\n  "Analyze the benefits of Mojo"\n)\nprint(result)`, lang: 'mojo' },
  { label: 'CLI Usage', code: `$ mojoflow create my-app\n  ✓ Project created\n  ✓ Dependencies installed\n  ✓ Dev server ready\n\n$ mojoflow dev\n  ▶ Watching for changes...\n  ▶ Local: http://localhost:8080\n\n$ mojoflow build\n  ✓ Bundled for production\n  ✓ Ready for deploy`, lang: 'bash' },
]

const architecture = [
  { layer: 'CLI', items: ['create', 'dev', 'build', 'deploy'] },
  { layer: 'UI', items: ['DSL Parser', 'Component Compiler', 'React Output'] },
  { layer: 'AI', items: ['LLM Client', 'Agent Runner', 'Task Orchestrator'] },
  { layer: 'Server', items: ['HTTP Router', 'Middleware Stack', 'Fiber Pool'] },
  { layer: 'Core', items: ['Types', 'Config', 'Error Handling'] },
]

export default function MojoflowPage() {
  const [activeCode, setActiveCode] = useState(0)
  const [activeLayer, setActiveLayer] = useState(0)
  const [showResponse, setShowResponse] = useState(false)

  useEffect(() => {
    const ci = setInterval(() => setActiveCode(prev => (prev + 1) % codeExamples.length), 4000)
    return () => clearInterval(ci)
  }, [])

  useEffect(() => {
    const li = setInterval(() => setActiveLayer(prev => (prev + 1) % layers.length), 3000)
    return () => clearInterval(li)
  }, [])

  useEffect(() => {
    const ri = setInterval(() => setShowResponse(prev => !prev), 5000)
    return () => clearInterval(ri)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-charcoal via-neutral-charcoal to-primary-dark">
      {/* Hero */}
      <section className="section-padding pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[520px] h-[520px] bg-orange-500/12 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 w-[380px] h-[380px] bg-yellow-500/10 rounded-full blur-[110px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-400/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-8">
              <FaCube className="text-xs" />
              Open Source
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
              Mojoflow
            </h1>
            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              AI-Native Full-Stack Framework for Mojo
            </p>
            <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-10">
              A production-grade, modular full-stack framework built for the Mojo programming language.
              Designed from the ground up for AI-native development — LLM integration, agent workflows,
              and task orchestration are first-class citizens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Lyvena/Mojoflow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/25 transition-all hover:scale-105"
              >
                View on GitHub
                <FaArrowRight className="text-sm" />
              </a>
              <Link href="/products" className="btn-secondary !border-white/20 !text-white hover:!bg-white/10">
                All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture layers */}
      <section className="py-12 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-5 gap-3">
            {layers.map((layer, idx) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`text-center p-4 rounded-xl border transition-all ${
                  idx === activeLayer
                    ? 'bg-gradient-to-br ' + layer.color + ' border-white/20 scale-105'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center mx-auto mb-2`}>
                  <layer.icon className="text-white text-sm" />
                </div>
                <p className={`text-sm font-bold ${idx === activeLayer ? 'text-white' : 'text-white/60'}`}>{layer.name}</p>
                <p className="text-[9px] text-white/30 mt-1 leading-tight">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Terminal / Code Mockup */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl shadow-orange-500/10">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-4 py-1.5 text-sm text-white/75 text-center">mojoflow — localhost:8080</div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  {/* File tree */}
                  <div className="md:col-span-3 space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-medium">Project</p>
                    {[
                      { name: 'my-app/', type: 'folder' as const },
                      { name: 'src/', type: 'folder' as const, indent: 1 },
                      { name: 'main.mojo', type: 'file' as const, indent: 2, active: true },
                      { name: 'routes.mojo', type: 'file' as const, indent: 2 },
                      { name: 'agents.mojo', type: 'file' as const, indent: 2 },
                      { name: 'ui/', type: 'folder' as const, indent: 1 },
                      { name: 'components.mojo', type: 'file' as const, indent: 2 },
                      { name: 'index.html', type: 'file' as const, indent: 1 },
                      { name: 'mojoproject.toml', type: 'file' as const },
                    ].map((item, idx) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03 }}
                        className={`flex items-center gap-2 px-2 py-1 rounded text-xs ${
                          item.active ? 'bg-orange-500/20 text-orange-300' : 'text-white/40 hover:text-white/60'
                        }`}
                        style={{ paddingLeft: `${8 + (item.indent || 0) * 12}px` }}
                      >
                        <span>{item.type === 'folder' ? '📁' : '📄'}</span>
                        <span className="truncate">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Code editor + terminal */}
                  <div className="md:col-span-9 space-y-4">
                    {/* Tab bar */}
                    <div className="flex items-center gap-1 border-b border-white/10 pb-2">
                      {codeExamples.map((ex, idx) => (
                        <button
                          key={ex.label}
                          onClick={() => setActiveCode(idx)}
                          className={`px-3 py-1 text-xs rounded-t transition-all ${
                            idx === activeCode
                              ? 'bg-orange-500/20 text-orange-300 border-b-2 border-orange-400'
                              : 'text-white/30 hover:text-white/60'
                          }`}
                        >
                          {ex.label}
                        </button>
                      ))}
                    </div>

                    {/* Code window */}
                    <div className="relative rounded-xl bg-neutral-charcoal border border-white/10 overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 bg-white/[0.03] border-b border-white/5">
                        <div className="flex items-center gap-2 text-[10px] text-white/30">
                          <FaCode className="text-xs" />
                          {codeExamples[activeCode].lang === 'mojo' ? 'main.mojo' : 'terminal'}
                        </div>
                        <div className="flex items-center gap-1">
                          <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-green-400"
                          />
                          <span className="text-[10px] text-white/30">Running</span>
                        </div>
                      </div>
                      <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto">
                        <AnimatePresence mode="wait">
                          <motion.code
                            key={activeCode}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-white/80"
                          >
                            {codeExamples[activeCode].code.split('\n').map((line, i) => (
                              <div key={i} className="whitespace-pre">
                                {line.startsWith('$') ? (
                                  <span>
                                    <span className="text-green-400">{line[0]}</span>
                                    <span className="text-white/50">{line.slice(1)}</span>
                                  </span>
                                ) : line.startsWith('  ✓') || line.startsWith('  ▶') ? (
                                  <span className="text-emerald-400">{line}</span>
                                ) : line.includes('fn ') || line.includes('import ') || line.includes('var ') ? (
                                  <span>
                                    <span className="text-orange-300">
                                      {line.split(' ').slice(0, line.includes('fn ') ? 1 : line.includes('import ') ? 1 : 1).join(' ')}
                                    </span>
                                    <span className="text-white/60">
                                      {' '}{line.split(' ').slice(1).join(' ')}
                                    </span>
                                  </span>
                                ) : line.includes('//') || line.includes('#') ? (
                                  <span className="text-white/20">{line}</span>
                                ) : (
                                  <span className="text-white/60">{line}</span>
                                )}
                                {'\n'}
                              </div>
                            ))}
                          </motion.code>
                        </AnimatePresence>
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="inline-block w-2 h-4 bg-orange-400 ml-1"
                        />
                      </pre>
                    </div>

                    {/* API Response / Agent Output */}
                    <AnimatePresence>
                      {showResponse && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 overflow-hidden"
                        >
                          <div className="px-4 py-2 bg-emerald-500/10 border-b border-emerald-500/10 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-emerald-300 text-xs font-medium">Response</span>
                            <span className="text-emerald-500/50 text-[10px] ml-auto">200 OK • 142ms</span>
                          </div>
                          <div className="p-4">
                            <pre className="text-xs font-mono text-emerald-200/80">
{`{
  "status": "ok",
  "message": "Hello from MojoFlow!",
  "agent": "research",
  "result": "Mojo combines Python-like syntax with\n  systems-level performance..."
}`}
                            </pre>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Status bar */}
                    <div className="flex items-center gap-4 text-[10px] text-white/30 px-2">
                      <span className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Server • :8080
                      </span>
                      <span>Routes: 4</span>
                      <span>Fibers: 8/16</span>
                      <span className="flex items-center gap-1 text-orange-400">
                        <FaBrain className="text-xs" />
                        Grok 4.3 Ready
                      </span>
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
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Built for the AI Era</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Each layer is independently composable and designed for AI-native development from the ground up.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture detail */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Modular Architecture</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Each layer depends only on the layers below it. The Core layer has zero external dependencies.</p>
          </motion.div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {architecture.map((arch, idx) => (
              <motion.div
                key={arch.layer}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-xs font-bold">
                    {arch.layer[0]}
                  </div>
                  <h3 className="text-white font-bold">{arch.layer}</h3>
                </div>
                <div className="flex flex-wrap gap-2 ml-11">
                  {arch.items.map(item => (
                    <span key={item} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/60 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLI Demo */}
      <section className="section-padding bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Developer Experience</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">From project creation to production — clean syntax, helpful errors, fast iteration.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Project Scaffolding', desc: 'Generate a complete project structure with a single command. Includes server, AI, UI, and CLI boilerplate.' },
              { title: 'Hot Reload Dev Server', desc: 'Built-in development server with live reload. Changes to .mojo files recompile and restart instantly.' },
              { title: 'Production Build', desc: 'Optimized bundling for production deployment. Includes tree-shaking, minification, and dependency resolution.' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-white/10 hover:border-orange-500/30 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-orange-900/30 via-amber-900/30 to-yellow-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Build the Future with Mojo
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
              Mojoflow is open source and ready to use. Build AI-native applications with the speed of Mojo
              and the ergonomics of Python — all in one unified framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Lyvena/Mojoflow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                View on GitHub <FaArrowRight className="text-sm" />
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
