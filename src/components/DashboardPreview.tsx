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
          The CAST Dashboard v2.1 — a React 19 + Express 5 app with real-time SSE streaming.
          Seven pages: Activity, Sessions, Analytics, Swarm, Agents, System, and Docs.
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
              <div className="w-3 h-3 rounded-full bg-[var(--chrome-red)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--chrome-yellow)]" />
              <div className="w-3 h-3 rounded-full bg-[var(--chrome-green)]" />
              <div className="ml-4 flex-1 bg-[var(--bg-primary)] rounded-md px-3 py-1 text-xs text-[var(--text-muted)] font-mono">
                localhost:5173
              </div>
            </div>
            {/* Animated mock dashboard UI */}
            <div className="bg-[var(--bg-primary)] min-h-[320px] md:min-h-[400px]">
              {/* Tab bar */}
              <div className="flex gap-1 px-4 pt-3 border-b border-[var(--glass-border)] overflow-x-auto">
                {['Activity', 'Sessions', 'Analytics', 'Swarm', 'Agents', 'System', 'Docs'].map((tab, i) => (
                  <span
                    key={tab}
                    className={`px-3 py-2 text-xs font-medium rounded-t whitespace-nowrap ${
                      i === 0
                        ? 'text-[var(--accent)] border-b-2 border-[var(--accent)] bg-[var(--accent-subtle)]'
                        : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              {/* Metric cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
                {[
                  { label: 'Sessions Today', value: '12', delta: '+3' },
                  { label: 'Agents Fired', value: '47', delta: '+8' },
                  { label: 'Quality Gates', value: '31', delta: '100%' },
                  { label: 'Token Spend', value: '$0.84', delta: '-12%' },
                ].map((card) => (
                  <div key={card.label} className="bento-card p-3 space-y-1">
                    <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wide">{card.label}</p>
                    <p className="text-xl font-bold font-mono text-[var(--text-primary)]">{card.value}</p>
                    <p className="text-xs text-[var(--accent)]">{card.delta}</p>
                  </div>
                ))}
              </div>
              {/* Sparkline row — CSS-only bars */}
              <div className="px-4 pb-4">
                <p className="text-[10px] text-[var(--text-muted)] mb-2 uppercase tracking-wide">Agent dispatches (last 7 days)</p>
                <div className="flex items-end gap-1 h-12">
                  {[3, 7, 5, 12, 8, 15, 9].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-[var(--accent)]/30"
                      style={{ height: `${(h / 15) * 100}%` }}
                    />
                  ))}
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
