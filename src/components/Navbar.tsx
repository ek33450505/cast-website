import { useState, useEffect } from 'react'
import { Github, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Agents', href: '#agents' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--glass-border)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" aria-label="CAST home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="none"
              className="h-6 w-6 shrink-0 text-[var(--accent)]"
              aria-hidden="true"
            >
              <polyline
                points="6,22 18,32 6,42"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="38" cy="32" r="5.5" fill="currentColor" />
              <circle cx="56" cy="18" r="4.5" fill="currentColor" opacity="0.85" />
              <circle cx="56" cy="46" r="4.5" fill="currentColor" opacity="0.85" />
              <line
                x1="43" y1="28.5" x2="52" y2="21.5"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.65"
              />
              <line
                x1="43" y1="35.5" x2="52" y2="42.5"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.65"
              />
              <line
                x1="20" y1="32" x2="32.5" y2="32"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.55"
              />
            </svg>
            <span className="text-xl font-bold font-mono text-[var(--accent)] tracking-wider">
              CAST
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/ek33450505/claude-agent-team"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg-secondary)] border-b border-[var(--glass-border)]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/ek33450505/claude-agent-team"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
