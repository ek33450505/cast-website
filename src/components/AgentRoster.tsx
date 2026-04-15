import { motion } from 'framer-motion'
import { agents } from '@/data/agents'
import { cn } from '@/lib/utils'

const categories = [
  { key: 'core' as const, label: 'Core', count: 17 },
  { key: 'dev-workflow' as const, label: 'Dev Workflow', count: 6 },
  { key: 'productivity' as const, label: 'Productivity', count: 5 },
  { key: 'knowledge' as const, label: 'Knowledge & Career', count: 3 },
]

const agentsByCategory = categories.map((cat) => ({
  ...cat,
  agents: agents.filter((a) => a.category === cat.key),
}))

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
          31 specialist agents across 4 categories — each with a defined role and model tier.
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
                <th scope="col" className="px-6 py-4 text-[var(--text-muted)] font-medium">Agent</th>
                <th scope="col" className="px-6 py-4 text-[var(--text-muted)] font-medium">Category</th>
                <th scope="col" className="px-6 py-4 text-[var(--text-muted)] font-medium">Model</th>
                <th scope="col" className="px-6 py-4 text-[var(--text-muted)] font-medium">Effort</th>
                <th scope="col" className="px-6 py-4 text-[var(--text-muted)] font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {agentsByCategory.map((group) => (
                <>
                  <tr key={`header-${group.key}`} className="bg-[var(--bg-tertiary)]">
                    <td colSpan={5} className="px-6 py-3 font-semibold text-[var(--text-primary)]">
                      {group.label} <span className="text-[var(--text-muted)] font-normal">({group.count})</span>
                    </td>
                  </tr>
                  {group.agents.map((agent, i) => (
                    <tr
                      key={agent.name}
                      className={cn(
                        'border-b border-[var(--glass-border)] last:border-0',
                        i % 2 === 0 ? 'bg-[var(--bg-secondary)]' : 'bg-[var(--bg-primary)]'
                      )}
                    >
                      <td className="px-6 py-3 font-mono text-[var(--text-primary)]">{agent.name}</td>
                      <td className="px-6 py-3 text-xs text-[var(--text-muted)]">{group.label}</td>
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
                </>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {agentsByCategory.map((group) => (
            <div key={group.key}>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                {group.label} <span className="text-sm text-[var(--text-muted)] font-normal">({group.count})</span>
              </h3>
              <div className="space-y-3">
                {group.agents.map((agent) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
