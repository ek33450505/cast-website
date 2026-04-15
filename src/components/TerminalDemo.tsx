import { motion } from 'framer-motion'

const lines = [
  { text: '$ claude "Build the new auth module"', type: 'command' as const },
  { text: '⟡ [CAST-DISPATCH] → planner (sonnet)', type: 'dispatch' as const },
  { text: '  ✓ Plan: 2 waves, 4 agents, swarm mode', type: 'success' as const },
  { text: '⟡ [SWARM] fullstack-team — 3 teammates', type: 'dispatch' as const },
  { text: '  ↳ code-writer: API routes + middleware', type: 'success' as const },
  { text: '  ↳ test-writer: integration tests', type: 'success' as const },
  { text: '  ↳ docs: API documentation', type: 'success' as const },
  { text: '⟡ [PEER] code-writer → test-writer: routes ready', type: 'dispatch' as const },
  { text: '  ✓ All teammates complete — 3/3', type: 'success' as const },
  { text: '⟡ [CAST-CHAIN] → code-reviewer (haiku)', type: 'dispatch' as const },
  { text: '  ✓ LGTM — merged to main', type: 'success' as const },
]

const lineColors = {
  command: 'text-[var(--text-primary)]',
  dispatch: 'text-[var(--text-secondary)]',
  success: 'text-[var(--accent)]',
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

export function TerminalDemo() {
  return (
    <div
      role="region"
      aria-label="Terminal demo showing CAST agent dispatch"
      className="w-full max-w-2xl mx-auto rounded-xl border border-[var(--glass-border)] overflow-hidden bg-[var(--bg-terminal)]"
    >
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[var(--bg-secondary)] border-b border-[var(--glass-border)]">
        <div className="w-3 h-3 rounded-full bg-[var(--chrome-red)]" />
        <div className="w-3 h-3 rounded-full bg-[var(--chrome-yellow)]" />
        <div className="w-3 h-3 rounded-full bg-[var(--chrome-green)]" />
        <span className="ml-2 text-xs text-[var(--text-muted)] font-mono">cast-session</span>
      </div>
      {/* Terminal content */}
      <motion.div
        className="p-4 font-mono text-sm leading-relaxed"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
      >
        {lines.map((line, i) => (
          <motion.div key={i} variants={item} className={lineColors[line.type]}>
            {line.text}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
