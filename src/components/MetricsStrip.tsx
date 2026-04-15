import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface MetricProps {
  value: number
  suffix?: string
  label: string
}

function AnimatedMetric({ value, suffix = '', label }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1500
    const steps = 40
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

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
  { value: 31, label: 'Agents' },
  { value: 525, label: 'Tests' },
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
