import { motion } from 'framer-motion'
import { Users, Shield, Database, Zap, HardDrive, Puzzle, Radio, Cpu } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Users,
    title: 'Agent Dispatch',
    description:
      '17 specialists route automatically. Code changes go to code-writer, failures to debugger, scripts to bash-specialist. No config needed.',
  },
  {
    icon: Shield,
    title: 'Quality Gates',
    description:
      'Raw git commit and push are hard-blocked by hooks. Prompt hooks guard sensitive files. Agent hooks run tests before push. Quality is enforced, not requested.',
  },
  {
    icon: Database,
    title: 'Full Observability',
    description:
      'Stream-JSON pipeline captures every tool call in real time. React dashboard shows activity, analytics, and hook events via SSE — all logged to SQLite.',
  },
  {
    icon: Zap,
    title: 'Cost Optimization',
    description:
      'Haiku handles reviews, commits, and tests. Sonnet handles planning and implementation. Ollama handles commit messages locally. Automatic model routing by task complexity.',
  },
  {
    icon: HardDrive,
    title: 'Local-First',
    description:
      'Zero cloud lock-in. Everything runs on your machine — agents, hooks, memory, database. LiteLLM routes to local Ollama models when available.',
  },
  {
    icon: Puzzle,
    title: 'Extensible',
    description:
      'Install with one command: claude plugin install or brew install. Custom agents are markdown files. Hooks are bash scripts. Plans are JSON.',
  },
  {
    icon: Radio,
    title: 'Event Streaming',
    description:
      'Channel event bus publishes to SSE subscribers in real time. HTTP hooks push to the dashboard. Stream-JSON consumer logs everything to cast.db.',
  },
  {
    icon: Cpu,
    title: 'Contractor Routing',
    description:
      'Route low-complexity tasks to local Ollama models via LiteLLM proxy. Quality gates validate output. Automatic fallback to Claude when contractors fail.',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Built for Real Work
        </motion.h2>
        <motion.p
          className="text-center text-[var(--text-muted)] mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Not a demo. CAST runs in production every day across real codebases.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="bento-card hover-lift p-6"
            >
              <feature.icon className="h-8 w-8 text-[var(--accent)] mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
