import { motion } from 'framer-motion'

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

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full max-w-[900px] bento-card p-4 md:p-8 overflow-x-auto">
            <img
              src="/cast-architecture.svg"
              alt="CAST architecture diagram showing the flow from user prompts through hooks, agent dispatch, quality gates, and observability"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
