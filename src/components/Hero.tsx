import { motion } from 'framer-motion'
import { Github, BookOpen } from 'lucide-react'
import { CopyButton } from './CopyButton'
import { TerminalDemo } from './TerminalDemo'
import { MetricsStrip } from './MetricsStrip'

const installCmd = 'brew tap ek33450505/cast && brew install cast'
const pluginCmd = 'claude plugin install github:ek33450505/claude-agent-team'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 gradient-mesh">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Heading */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold font-mono text-[var(--accent)] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          CAST
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-[var(--text-secondary)] font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Claude Agent Specialist Team
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-[var(--text-muted)] max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A local-first multi-agent framework for Claude Code
        </motion.p>

        {/* Install commands */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--glass-border)] rounded-xl px-4 py-3 font-mono text-sm">
            <span className="text-[var(--text-muted)]">$</span>
            <code className="text-[var(--text-primary)] break-all">{installCmd}</code>
            <CopyButton text={installCmd} />
          </div>
          <span className="text-xs text-[var(--text-muted)]">or</span>
          <div className="inline-flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--glass-border)] rounded-xl px-4 py-3 font-mono text-sm">
            <span className="text-[var(--text-muted)]">$</span>
            <code className="text-[var(--text-primary)] break-all">{pluginCmd}</code>
            <CopyButton text={pluginCmd} />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/ek33450505/claude-agent-team"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--glass-border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-sm"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
          <a
            href="https://github.com/ek33450505/claude-agent-team#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm"
          >
            <BookOpen className="h-4 w-4" />
            Read the Docs
          </a>
        </motion.div>
      </div>

      {/* Terminal demo */}
      <motion.div
        className="w-full max-w-2xl mx-auto mt-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <TerminalDemo />
      </motion.div>

      {/* Metrics */}
      <div className="w-full max-w-4xl mx-auto mt-12">
        <MetricsStrip />
      </div>
    </section>
  )
}
