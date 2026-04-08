import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export function DashboardPreview() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          See Everything
        </motion.h2>
        <motion.p
          className="text-center text-[var(--text-muted)] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          A full React dashboard for real-time agent observability. Track sessions, token spend,
          agent activity, and hook health — all from your browser.
        </motion.p>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Browser chrome mockup */}
          <div className="bento-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-[var(--bg-tertiary)] border-b border-[var(--glass-border)]">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <div className="ml-4 flex-1 bg-[var(--bg-primary)] rounded-md px-3 py-1 text-xs text-[var(--text-muted)] font-mono">
                localhost:5173/activity
              </div>
            </div>
            {/* Placeholder content */}
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] flex items-center justify-center">
              <div className="text-center space-y-4">
                <p className="text-2xl md:text-3xl font-bold text-[var(--accent)]/50">
                  CAST Dashboard
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  Real-time agent observability
                </p>
                <div className="flex justify-center gap-6 text-xs text-[var(--text-muted)]">
                  <span>Sessions</span>
                  <span>Analytics</span>
                  <span>Agents</span>
                  <span>Token Spend</span>
                  <span>Hooks</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="https://github.com/ek33450505/claude-code-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--glass-border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              View Dashboard Repo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
