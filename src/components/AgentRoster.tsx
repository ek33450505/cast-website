import { motion } from 'framer-motion'
import { agents } from '@/data/agents'
import { cn } from '@/lib/utils'

const sonnetAgents = agents.filter((a) => a.model === 'sonnet')
const haikuAgents = agents.filter((a) => a.model === 'haiku')
const sortedAgents = [...sonnetAgents, ...haikuAgents]

export function AgentRoster() {
  return (
    <section id="agents" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet the Team
        </motion.h2>
        <motion.p
          className="text-center text-[var(--text-muted)] mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          17 specialist agents, each with a defined role and model tier.
        </motion.p>

        {/* Desktop table */}
        <motion.div
          className="hidden md:block bento-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--glass-border)] text-left">
                <th className="px-6 py-4 text-[var(--text-muted)] font-medium">Agent</th>
                <th className="px-6 py-4 text-[var(--text-muted)] font-medium">Model</th>
                <th className="px-6 py-4 text-[var(--text-muted)] font-medium">Effort</th>
                <th className="px-6 py-4 text-[var(--text-muted)] font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {sortedAgents.map((agent, i) => (
                <tr
                  key={agent.name}
                  className={cn(
                    'border-b border-[var(--glass-border)] last:border-0',
                    i % 2 === 0 ? 'bg-[var(--bg-secondary)]' : 'bg-[var(--bg-primary)]'
                  )}
                >
                  <td className="px-6 py-3 font-mono text-[var(--text-primary)]">{agent.name}</td>
                  <td className="px-6 py-3">
                    <span
                      className={cn(
                        'px-2 py-1 rounded-full text-xs font-medium',
                        agent.model === 'sonnet'
                          ? 'bg-[var(--accent)]/15 text-[var(--accent)]'
                          : 'bg-blue-400/15 text-blue-400'
                      )}
                    >
                      {agent.model}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <span
                      className={cn(
                        'px-2 py-1 rounded-full text-xs font-medium',
                        agent.effort === 'high'
                          ? 'bg-[var(--warning)]/15 text-[var(--warning)]'
                          : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]'
                      )}
                    >
                      {agent.effort}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-[var(--text-muted)]">{agent.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {sortedAgents.map((agent) => (
            <motion.div
              key={agent.name}
              className="bento-card p-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm font-semibold">{agent.name}</span>
                <div className="flex gap-2">
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded-full text-xs',
                      agent.model === 'sonnet'
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)]'
                        : 'bg-blue-400/15 text-blue-400'
                    )}
                  >
                    {agent.model}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[var(--text-muted)]">{agent.purpose}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
