import { Link } from 'react-router-dom'
import './Header.css'

const scrollToSection = (hash: string) => {
  const id = hash === '#home' || !hash ? 'home' : hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else if (hash === '#home' || !hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
}

export default function Header() {
  const navLinks = [
    { label: 'HOME', hash: '#home' },
    { label: 'MENU', hash: '#home-menu' },
    { label: 'OUR STORY', hash: '#home-about' },
    { label: 'CONTACT', hash: '#home-contact' },
  ]

  return (
    <header className="header">
      <Link
        to="/"
        className="header-logo"
        onClick={(e) => {
          e.preventDefault()
          requestAnimationFrame(() => scrollToSection('#home'))
        }}
      >
        <span className="header-logo-text">鉄丼</span>
      </Link>
      <nav className="header-nav">
        {navLinks.map(({ label, hash }) => (
          <button
            key={hash || 'home'}
            type="button"
            className="header-link header-link-button"
            onClick={() => scrollToSection(hash)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}
