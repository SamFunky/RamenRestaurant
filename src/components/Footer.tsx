import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/" className="footer-logo" onClick={scrollToTop}>
          <span className="footer-logo-text">鉄丼</span>
          <span className="footer-logo-label">Iron Bowl Ramen</span>
        </Link>
        <nav className="footer-nav">
          <button type="button" className="footer-link footer-link-button" onClick={scrollToTop}>
            Home
          </button>
          <Link to="/#home-menu" className="footer-link">Menu</Link>
          <Link to="/#home-about" className="footer-link">Our Story</Link>
          <Link to="/#home-contact" className="footer-link">Contact</Link>
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
