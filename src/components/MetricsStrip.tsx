import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface MetricProps {
  value: number
  suffix?: string
  label: string
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function AnimatedMetric({ value, suffix = '', label }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const prefersReduced = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    if (prefersReduced) {
      setDisplay(value)
      return
    }
    const duration = 1500
    const start = performance.now()
    let raf: number
    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setDisplay(Math.round(easeOutCubic(progress) * value))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value, prefersReduced])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="text-3xl md:text-4xl font-bold font-mono text-[var(--accent)]">
        {display}{suffix}
      </span>
      <span className="text-sm text-[var(--text-muted)]">{label}</span>
    </div>
  )
}

const metrics = [
  { value: 30, label: 'Agents' },
  { value: 501, label: 'Tests' },
  { value: 13, label: 'Repos' },
  { value: 450, suffix: '+', label: 'Cloners' },
]

export function MetricsStrip() {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-8 md:gap-16 py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {metrics.map((m) => (
        <AnimatedMetric key={m.label} value={m.value} suffix={m.suffix} label={m.label} />
      ))}
    </motion.div>
  )
}
