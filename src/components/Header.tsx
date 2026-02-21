import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/menu', label: 'MENU' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/contact', label: 'CONTACT' },
  ]

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <span className="header-logo-text">鉄丼</span>
      </Link>
      <nav className="header-nav">
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`header-link ${location.pathname === path ? 'active' : ''}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
