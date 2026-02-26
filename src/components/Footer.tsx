import { Link } from 'react-router-dom'
import './Footer.css'

const scrollToSection = (hash: string) => {
  if (hash === '#home' || !hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  } else {
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" className="footer-logo" onClick={(e) => { e.preventDefault(); scrollToSection('#home') }}>
          <span className="footer-logo-text">鉄丼</span>
          <span className="footer-logo-label">Iron Bowl Ramen</span>
        </Link>
        <nav className="footer-nav">
          <button type="button" className="footer-link footer-link-button" onClick={() => scrollToSection('#home')}>
            Home
          </button>
          <button type="button" className="footer-link footer-link-button" onClick={() => scrollToSection('#home-menu')}>
            Menu
          </button>
          <button type="button" className="footer-link footer-link-button" onClick={() => scrollToSection('#home-about')}>
            Our Story
          </button>
          <button type="button" className="footer-link footer-link-button" onClick={() => scrollToSection('#home-contact')}>
            Contact
          </button>
        </nav>
        <div className="footer-contact">
          <a href="tel:+15551234567" className="footer-contact-item">(555) 123-4567</a>
          <a href="mailto:info@ironbowlramen.com" className="footer-contact-item">info@ironbowlramen.com</a>
          <span className="footer-contact-item">123 Ramen Street, New York City</span>
          <a href="https://instagram.com/ironbowlramen" target="_blank" rel="noopener noreferrer" className="footer-contact-item">@ironbowlramen</a>
        </div>
        <p className="footer-copy">
          Founded 2024 · © {currentYear} Iron Bowl Ramen
        </p>
      </div>
    </footer>
  )
}
