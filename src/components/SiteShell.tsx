import { Link } from '@tanstack/react-router'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState, type ReactNode } from 'react'

const navItems = [
  { label: 'Courses', to: '/courses' },
  { label: 'Classes 8–12', to: '/school' },
  { label: 'JEE & NEET', to: '/exams' },
  { label: 'Resources', to: '/resources' },
  { label: 'Tests', to: '/test-series' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
] as const

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <div className="announcement">
        <span>Admissions open for 2026–27 batches</span>
        <Link to="/pricing">Explore plans <ArrowUpRight size={14} /></Link>
      </div>
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">SS</span>
          <span>Study <strong>Sessions</strong></span>
        </Link>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: 'active' }} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" to="/pricing" onClick={() => setMenuOpen(false)}>Start learning</Link>
        </nav>
        <button type="button" className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-lead">
          <Link className="brand footer-brand" to="/"><span className="brand-mark">SS</span><span>Study <strong>Sessions</strong></span></Link>
          <h2>Your next chapter deserves a clear plan.</h2>
          <Link className="button button-yellow" to="/pricing">View learning plans <ArrowUpRight size={18} /></Link>
        </div>
        <div className="footer-grid">
          <div><span className="footer-label">Learn</span><Link to="/school">Classes 8–12</Link><Link to="/exams">JEE & NEET</Link><Link to="/courses">Professional courses</Link></div>
          <div><span className="footer-label">Practice</span><Link to="/resources">Modules & sheets</Link><Link to="/test-series">Test series</Link><Link to="/pricing">Pricing</Link></div>
          <div><span className="footer-label">Contact</span><a href="mailto:hello@studysessions.in">hello@studysessions.in</a><a href="tel:+919876543210">+91 98765 43210</a><span>Mon–Sat · 8 AM–8 PM</span></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Study Sessions Learning Pvt. Ltd.</span><span>Made for focused learners across India.</span></div>
      </footer>
    </div>
  )
}
