import { motion } from 'framer-motion'
import { Users, Shield, Database, Zap, HardDrive, Puzzle } from 'lucide-react'
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
      'Raw git commit and push are hard-blocked by hooks. Every change gets a code-reviewer pass. Quality is enforced, not requested.',
  },
  {
    icon: Database,
    title: 'Full Observability',
    description:
      'Every dispatch, session, and token spend logged to SQLite. A React dashboard shows activity, analytics, and agent status in real time.',
  },
  {
    icon: Zap,
    title: 'Cost Optimization',
    description:
      'Haiku handles reviews, commits, and tests. Sonnet handles planning and implementation. 20x cost difference, routed automatically.',
  },
  {
    icon: HardDrive,
    title: 'Local-First',
    description:
      'Zero cloud lock-in. Everything runs on your machine — agents, hooks, memory, database. Your code never leaves your environment.',
  },
  {
    icon: Puzzle,
    title: 'Extensible',
    description:
      'Custom agents are markdown files. Hooks are bash scripts. Plans are JSON. Everything is human-readable and hackable.',
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              <feature.icon className="h-8 w-8 text-[var(--accent)] mb-4" />
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
