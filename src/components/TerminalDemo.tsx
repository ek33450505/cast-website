import { motion } from 'framer-motion'

const lines = [
  { text: '$ claude "Add rate limiting to the API"', type: 'command' as const },
  { text: '⟡ [CAST-DISPATCH] → planner (sonnet)', type: 'dispatch' as const },
  { text: '  ✓ Plan written: 3 batches, 5 agents', type: 'success' as const },
  { text: '⟡ [CAST-DISPATCH] → code-writer (sonnet)', type: 'dispatch' as const },
  { text: '  ✓ 4 files modified, 127 lines added', type: 'success' as const },
  { text: '⟡ [CAST-CHAIN] → code-reviewer (haiku)', type: 'dispatch' as const },
  { text: '  ✓ LGTM — no issues found', type: 'success' as const },
  { text: '⟡ [CAST-CHAIN] → commit (haiku)', type: 'dispatch' as const },
  { text: '  ✓ feat: add rate limiting middleware', type: 'success' as const },
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
