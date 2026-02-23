import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

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
    { path: '/', label: 'HOME', hash: '' },
    { path: '/#home-menu', label: 'MENU', hash: '#home-menu' },
    { path: '/#home-contact', label: 'CONTACT', hash: '#home-contact' },
    { path: '/#home-about', label: 'ABOUT US', hash: '#home-about' },
  ]

  return (
    <header className={`header ${visible ? '' : 'header-hidden'}`}>
      <Link to="/" className="header-logo">
        <span className="header-logo-text">鉄丼</span>
      </Link>
      <nav className="header-nav">
        {navLinks.map(({ path, label, hash }) => (
          <Link
            key={hash || 'home'}
            to={path}
            className={`header-link ${(hash === '' && !currentHash) || currentHash === hash ? 'active' : ''}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
