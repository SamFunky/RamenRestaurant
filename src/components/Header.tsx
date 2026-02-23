import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  const location = useLocation()
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)
  const currentHash = location.hash

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < lastScrollY.current || currentScrollY < 80) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'HOME', hash: '' },
    { label: 'MENU', hash: '#home-menu' },
    { label: 'OUR STORY', hash: '#home-about' },
    { label: 'CONTACT', hash: '#home-contact' },
  ]

  return (
    <header className={`header ${visible ? '' : 'header-hidden'}`}>
      <Link to="/" className="header-logo" onClick={(e) => { e.preventDefault(); scrollToSection('') }}>
        <span className="header-logo-text">鉄丼</span>
      </Link>
      <nav className="header-nav">
        {navLinks.map(({ label, hash }) => (
          <button
            key={hash || 'home'}
            type="button"
            className={`header-link header-link-button ${(hash === '' && !currentHash) || currentHash === hash ? 'active' : ''}`}
            onClick={() => scrollToSection(hash)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}
