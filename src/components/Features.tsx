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
    title: 'Agent Teams',
    description:
      '30 specialists across 4 tiers. Swarm Control Plane bootstraps parallel agent teams from YAML. Each teammate gets an isolated git worktree and quality gates.',
  },
  {
    icon: Shield,
    title: 'Quality Gates',
    description:
      'Raw git commit and push are hard-blocked by hooks. Structured Output schemas validate every agent response. Code ships through the commit agent or not at all.',
  },
  {
    icon: Database,
    title: 'Full Observability',
    description:
      'cast.db v8 tracks 8 tables across sessions, agent runs, swarm activity, and quality gates. React dashboard v2.1 with 7 pages and real-time SSE streaming.',
  },
  {
    icon: Zap,
    title: 'Token Optimization',
    description:
      '5-layer cost reduction: model tiering (21 Haiku / 9 Sonnet), Laconic Mode, RTK Hook with 60-89% compression, Thinking Budgets, and Compact Discipline. 30-50% savings.',
  },
  {
    icon: HardDrive,
    title: 'Peer Gossip Protocol',
    description:
      'Decentralized agent-to-agent messaging via cast.db. Four message types — task claims, status updates, peer queries, idle events. No central broker needed.',
  },
  {
    icon: Puzzle,
    title: 'Extensible',
    description:
      'Agents are markdown files. Hooks are bash scripts. Plans are JSON. 16 skills, 19 slash commands, and 4 MCP integrations — Todoist, Calendar, Gmail, Obsidian.',
  },
  {
    icon: Radio,
    title: 'Swarm Control Plane',
    description:
      'Define agent teams in YAML. CAST creates worktrees, seeds identity preambles, enforces policies, and streams events to cast.db. The control layer for Anthropic Agent Teams.',
  },
  {
    icon: Cpu,
    title: 'Local-First',
    description:
      'Zero cloud lock-in. Everything runs on your machine — agents, hooks, memory, database. Ollama fallback via LiteLLM proxy. All data stays in SQLite.',
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
