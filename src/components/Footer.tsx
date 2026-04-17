import { Github } from 'lucide-react'

const links = [
  { label: 'GitHub', href: 'https://github.com/ek33450505/claude-agent-team' },
  { label: 'Dashboard', href: 'https://github.com/ek33450505/claude-code-dashboard' },
  { label: 'dev.to', href: 'https://dev.to/ek33450505' },
  { label: 'Documentation', href: 'https://github.com/ek33450505/claude-agent-team#readme' },
  { label: 'Portfolio', href: 'https://ek33450505.github.io/Edward_Kubiak/' },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold font-mono text-[var(--accent)]">CAST</span>
            <span className="text-sm text-[var(--text-muted)]">Built with Claude Code</span>
          </div>

          {/* Center links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (opens in new tab)`}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <span className="text-xs px-2 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-muted)]">
              MIT License
            </span>
            <a
              href="https://github.com/ek33450505/claude-agent-team"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[var(--glass-border)] text-center">
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} Edward Kubiak
          </p>
        </div>

        {/* Back to top */}
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
