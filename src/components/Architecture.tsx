import { motion } from 'framer-motion'

interface PipelineNode {
  title: string
  color: string
  annotation?: string
  subItems?: string[]
  subItemStyle?: 'list' | 'pills'
}

const nodes: PipelineNode[] = [
  {
    title: 'User Prompt',
    color: 'var(--text-muted)',
  },
  {
    title: 'CLAUDE.md Dispatch',
    color: 'var(--accent)',
    annotation: '31-agent routing table',
  },
  {
    title: 'PreToolUse Hooks',
    color: '#F59E0B',
    annotation: 'Blocks raw git commit/push',
    subItems: ['pre-tool-guard.sh', 'cast-audit-hook.sh', 'cast-headless-guard.sh'],
    subItemStyle: 'list',
  },
  {
    title: 'Swarm Control Plane',
    color: 'var(--accent)',
    annotation: 'YAML team definitions → git worktrees',
    subItems: ['Peer Gossip Protocol', 'Policy enforcement gate'],
    subItemStyle: 'list',
  },
  {
    title: 'Agent Dispatch',
    color: '#10B981',
    annotation: 'Specialist agent runs in isolated worktrees',
    subItems: ['SubagentStart hook fires', 'task_claimed → cast.db'],
    subItemStyle: 'list',
  },
  {
    title: 'PostToolUse Hooks',
    color: '#F59E0B',
    annotation: 'Injects [CAST-REVIEW] after writes',
  },
  {
    title: 'Post-Chain Protocol',
    color: '#3B82F6',
    annotation: 'code-reviewer → commit → push',
    subItems: ['Quality gate validation', 'Structured Output schema check'],
    subItemStyle: 'list',
  },
  {
    title: 'cast.db v8',
    color: 'var(--text-muted)',
    annotation: '8 tables, WAL-mode, queryable',
    subItems: ['sessions', 'agent_runs', 'swarm_sessions', 'teammate_runs', 'teammate_messages', 'quality_gates', 'routing_events', 'agent_memories'],
    subItemStyle: 'pills',
  },
  {
    title: 'Dashboard v2.1',
    color: 'var(--accent)',
    annotation: 'React 19 + Express 5 + SSE',
    subItems: ['Dashboard', 'Sessions', 'Analytics', 'Swarm', 'Agents', 'System', 'Docs'],
    subItemStyle: 'pills',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function NodeCard({ node }: { node: PipelineNode }) {
  return (
    <div
      className="relative rounded-xl px-5 py-4 border border-[var(--glass-border)]"
      style={{ backgroundColor: 'var(--bg-secondary)', borderLeftColor: node.color, borderLeftWidth: '2px' }}
    >
      {/* Desktop: annotation floats right — handled by parent grid */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col md:flex-row md:items-center md:gap-3">
          <span className="text-sm font-semibold text-[var(--text-primary)]">{node.title}</span>
          {/* Mobile annotation */}
          {node.annotation && (
            <span className="md:hidden text-xs text-[var(--text-muted)]">{node.annotation}</span>
          )}
        </div>

        {node.subItems && node.subItemStyle === 'list' && (
          <p className="text-xs text-[var(--text-muted)]">
            {node.subItems.join(', ')}
          </p>
        )}

        {node.subItems && node.subItemStyle === 'pills' && (
          <div className="flex flex-wrap gap-1.5">
            {node.subItems.map((pill) => (
              <span
                key={pill}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-muted)', border: '1px solid var(--glass-border)' }}
              >
                {pill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function Connector() {
  return (
    <div className="flex flex-col items-center my-0.5" aria-hidden="true">
      <div className="w-px h-5" style={{ backgroundColor: 'var(--glass-border)' }} />
      <span className="text-[var(--glass-border)] text-xs leading-none select-none" style={{ color: 'var(--text-muted)' }}>▼</span>
    </div>
  )
}

function ArchitectureFlow() {
  return (
    <motion.div
      className="max-w-3xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      {nodes.map((node, index) => (
        <motion.div key={node.title} variants={item}>
          {/* Node row: card + desktop annotation side by side */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] md:gap-6 md:items-center">
            <NodeCard node={node} />

            {/* Desktop annotation */}
            {node.annotation ? (
              <div className="hidden md:flex items-center gap-2 min-w-[180px]">
                <div
                  className="w-6 border-t border-dashed"
                  style={{ borderColor: 'var(--glass-border)' }}
                />
                <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">{node.annotation}</span>
              </div>
            ) : (
              <div className="hidden md:block min-w-[180px]" />
            )}
          </div>

          {/* Connector between nodes */}
          {index < nodes.length - 1 && <Connector />}
        </motion.div>
      ))}
    </motion.div>
  )
}

export function Architecture() {
  return (
    <section id="architecture" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-center text-[var(--text-muted)] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          The Swarm Control Plane wraps Anthropic Agent Teams with quality gates, peer gossip, and full observability.
          Hooks intercept tool calls. Directives route to specialists. Everything lands in cast.db.
        </motion.p>

        <ArchitectureFlow />
      </div>
    </section>
  )
}
