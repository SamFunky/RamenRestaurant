import { Link } from 'react-router-dom'
import './Header.css'

const scrollToSection = (hash: string) => {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

export default function Header() {
  const navLinks = [
    { label: 'HOME', hash: '' },
    { label: 'MENU', hash: '#home-menu' },
    { label: 'OUR STORY', hash: '#home-about' },
    { label: 'CONTACT', hash: '#home-contact' },
  ]

  return (
    <header className="header">
      <Link to="/" className="header-logo" onClick={(e) => { e.preventDefault(); scrollToSection('') }}>
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
