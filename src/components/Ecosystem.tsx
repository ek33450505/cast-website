import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { CopyButton } from './CopyButton'
import { ecosystem } from '@/data/ecosystem'
import { cn } from '@/lib/utils'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Install What You Need
        </motion.h2>
        <motion.p
          className="text-center text-[var(--text-muted)] mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Every component is a standalone Homebrew tap. Install the full framework or just the pieces you need.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {ecosystem.map((comp) => (
            <motion.div
              key={comp.name}
              variants={item}
              className={cn(
                'bento-card hover-lift p-6 flex flex-col',
                comp.highlighted && 'border-[var(--accent)]/30'
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">{comp.name}</h3>
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
                  {comp.version}
                </span>
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-4 flex-1">
                {comp.description}
              </p>
              <div className="flex items-center gap-2 bg-[var(--bg-primary)] rounded-lg px-3 py-2 font-mono text-xs mb-3 overflow-x-auto">
                <code className="text-[var(--text-secondary)] whitespace-nowrap flex-1">
                  {comp.installCommand}
                </code>
                <CopyButton text={comp.installCommand} className="shrink-0" />
              </div>
              <a
                href={comp.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                GitHub
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
