import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const scrollToSection = (hash: string) => {
  const id = hash === '#home' || !hash ? 'home' : hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    const isMobile = window.innerWidth <= 768
    const block = hash === '#home-contact' && !isMobile ? 'center' : 'start'
    el.scrollIntoView({ behavior: 'smooth', block })
  } else if (hash === '#home' || !hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'HOME', hash: '#home' },
    { label: 'MENU', hash: '#home-menu' },
    { label: 'OUR STORY', hash: '#home-about' },
    { label: 'CONTACT', hash: '#home-contact' },
  ]

  const handleNavClick = (hash: string) => {
    scrollToSection(hash)
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <Link
        to="/"
        className="header-logo"
        onClick={(e) => {
          e.preventDefault()
          requestAnimationFrame(() => scrollToSection('#home'))
          setIsMenuOpen(false)
        }}
      >
        <span className="header-logo-text">鉄丼</span>
      </Link>
      <nav className={`header-nav${isMenuOpen ? ' header-nav-open' : ''}`}>
        {navLinks.map(({ label, hash }) => (
          <button
            key={hash || 'home'}
            type="button"
            className="header-link header-link-button"
            onClick={() => handleNavClick(hash)}
          >
            {label}
          </button>
        ))}
      </nav>
      <button
        type="button"
        className={`header-hamburger${isMenuOpen ? ' header-hamburger-open' : ''}`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
