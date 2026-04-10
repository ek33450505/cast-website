import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, XCircle, Cpu, Cloud } from 'lucide-react'

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
          Smart Model Routing
        </motion.h2>
        <motion.p
          className="text-center text-[var(--text-muted)] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Route low-complexity tasks to local Ollama models. Quality gates catch bad output.
          Claude takes over automatically when contractors fail.
        </motion.p>

        {/* Flow diagram */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Task */}
          <div className="bento-card p-4 text-center min-w-[140px]">
            <p className="text-xs text-[var(--text-muted)] mb-1">Task</p>
            <p className="text-sm font-semibold">Commit Message</p>
          </div>

          <ArrowRight className="h-5 w-5 text-[var(--text-muted)] hidden md:block" />

          {/* LiteLLM Router */}
          <div className="bento-card p-4 text-center min-w-[140px] border-[var(--accent)] border">
            <p className="text-xs text-[var(--text-muted)] mb-1">LiteLLM Proxy</p>
            <p className="text-sm font-semibold text-[var(--accent)]">Route</p>
          </div>

          <ArrowRight className="h-5 w-5 text-[var(--text-muted)] hidden md:block" />

          {/* Ollama */}
          <div className="bento-card p-4 text-center min-w-[140px]">
            <Cpu className="h-5 w-5 mx-auto mb-1 text-green-400" />
            <p className="text-xs text-[var(--text-muted)] mb-1">Local</p>
            <p className="text-sm font-semibold">Ollama</p>
          </div>

          <ArrowRight className="h-5 w-5 text-[var(--text-muted)] hidden md:block" />

          {/* Quality Gate */}
          <div className="bento-card p-4 text-center min-w-[140px]">
            <div className="flex justify-center gap-2 mb-1">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <XCircle className="h-4 w-4 text-red-400" />
            </div>
            <p className="text-xs text-[var(--text-muted)] mb-1">Quality Gate</p>
            <p className="text-sm font-semibold">Validate</p>
          </div>

          <ArrowRight className="h-5 w-5 text-[var(--text-muted)] hidden md:block" />

          {/* Result */}
          <div className="bento-card p-4 text-center min-w-[140px]">
            <Cloud className="h-5 w-5 mx-auto mb-1 text-blue-400" />
            <p className="text-xs text-[var(--text-muted)] mb-1">Fallback</p>
            <p className="text-sm font-semibold">Claude</p>
          </div>
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
            <p className="text-2xl font-bold font-mono text-[var(--accent)]">$0</p>
            <p className="text-xs text-[var(--text-muted)]">per local task</p>
          </div>
          <div>
            <p className="text-2xl font-bold font-mono text-[var(--accent)]">&lt;1s</p>
            <p className="text-xs text-[var(--text-muted)]">local latency</p>
          </div>
          <div>
            <p className="text-2xl font-bold font-mono text-[var(--accent)]">Auto</p>
            <p className="text-xs text-[var(--text-muted)]">fallback to Claude</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
