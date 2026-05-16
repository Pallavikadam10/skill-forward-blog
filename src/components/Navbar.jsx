import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Contribution', href: '#contribution' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Learnings', href: '#learnings' },
]

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md shadow-sm border-b border-subtle'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="font-display font-semibold text-lg text-primary tracking-tight">
          Skill<span className="text-jade-600 dark:text-jade-400">Forward</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-subtle hover:bg-surface/80 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-secondary" />}
          </button>
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center border border-subtle hover:bg-surface/80 transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-subtle px-6 py-4 flex flex-col gap-4">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
