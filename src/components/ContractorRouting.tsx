import { motion } from 'framer-motion'
import { Users, Zap, ArrowRight, Cpu, CheckCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface OptLayer {
  icon: LucideIcon
  label: string
  detail: string
}

const layers: OptLayer[] = [
  { icon: Users, label: 'Model Tiering', detail: '21 Haiku / 10 Sonnet — right model for each task' },
  { icon: Zap, label: 'Caveman Mode', detail: '15-25% output reduction via terse response rules' },
  { icon: ArrowRight, label: 'RTK Hook', detail: '60-89% compression on tool outputs' },
  { icon: Cpu, label: 'Thinking Budgets', detail: 'Per-agent extended thinking tiers (0-8192 tokens)' },
  { icon: CheckCircle, label: 'Compact Discipline', detail: 'Auto-trigger at 40 tool calls per session' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function ContractorRouting() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          5-Layer Token Optimization
        </motion.h2>
        <motion.p
          className="text-center text-[var(--text-muted)] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          CAST reduces swarm token spend by 30-50% through intelligent model routing, output compression, and budget controls.
        </motion.p>

        {/* 5-layer stack */}
        <motion.div
          className="max-w-2xl mx-auto space-y-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {layers.map((layer) => (
            <motion.div
              key={layer.label}
              variants={item}
              className="bento-card p-4 flex items-center gap-4"
            >
              <layer.icon className="h-6 w-6 text-[var(--accent)] shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-sm text-[var(--text-primary)]">{layer.label}</p>
                <p className="text-sm text-[var(--text-muted)]">{layer.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-8 mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <p className="text-2xl font-bold font-mono text-[var(--accent)]">30-50%</p>
            <p className="text-xs text-[var(--text-muted)]">token savings</p>
          </div>
          <div>
            <p className="text-2xl font-bold font-mono text-[var(--accent)]">21/10</p>
            <p className="text-xs text-[var(--text-muted)]">Haiku/Sonnet split</p>
          </div>
          <div>
            <p className="text-2xl font-bold font-mono text-[var(--accent)]">525</p>
            <p className="text-xs text-[var(--text-muted)]">tests passing</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
