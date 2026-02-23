import { useState } from 'react'
import './Home.css'
import MenuCard from '../components/MenuCard'

const MENU_ITEMS = [
  { image: '/images/AburaKaraRamenDeluxe.png', japaneseName: '油辛ラーメン', englishName: 'Abura Kara Ramen Deluxe', descriptor: 'Spicy oil broth, fried garlic bits, sesame, negi, ajitama.' },
  { image: '/images/EbiWantanShioSoup.png', japaneseName: '海老ワンタン塩スープ', englishName: 'Ebi Wantan Shio Soup', descriptor: 'Light salted broth with shrimp wontons and green onion.' },
  { image: '/images/GyuNabeKaraStew.png', japaneseName: '牛鍋辛煮込み', englishName: 'Gyu Nabe Kara Stew', descriptor: 'Spicy beef hot pot with tofu, scallions, mushrooms, quail eggs.' },
  { image: '/images/GyuNikomiRamen.png', japaneseName: '牛煮込みラーメン', englishName: 'Gyu Nikomi Ramen', descriptor: 'Slow-braised beef over ramen noodles with triple onsen eggs.' },
  { image: '/images/KaraMisoTamagoRamen.png', japaneseName: '辛味噌たまごラーメン', englishName: 'Kara Miso Tamago Ramen', descriptor: 'Spicy miso broth, curly noodles, soft-boiled egg, chopped negi, sesame oil.' },
  { image: '/images/KaraShoyuTamagoRamen.png', japaneseName: '辛醤油ラーメン', englishName: 'Kara Shoyu Tamago Ramen', descriptor: 'Spicy soy-based broth, sesame, scallions, onsen-style egg.' },
  { image: '/images/MazemenGyuSoboro.png', japaneseName: '混ぜ麺 牛そぼろ', englishName: 'Mazemen Gyu Soboro', descriptor: 'Brothless spicy noodles with seasoned beef, scallions, sesame.' },
  { image: '/images/MisoNabeUdon.png', japaneseName: '味噌鍋うどん', englishName: 'Miso Nabe Udon', descriptor: 'Miso-based hot pot with pork, shiitake, negi, double onsen tamago.' },
  { image: '/images/TonkotsuTamagoRamen.png', japaneseName: '豚骨たまごラーメン', englishName: 'Tonkotsu Tamago Ramen', descriptor: 'Creamy pork bone broth, chashu, ajitsuke tamago, green onion.' },
  { image: '/images/homepagehero.png', japaneseName: '鶏醤油たまごラーメン', englishName: 'Tori Shoyu Tamago Ramen', descriptor: 'Chicken-based soy broth ramen with egg and negi.' },
]

export default function Home() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up to backend or email service
  }

  return (
    <main className="home">
      <section className="home-hero-section">
        <div className="home-scene">
        <div className="home-brushstroke">
          <img src="/images/Orangebrushstroke.png" alt="" aria-hidden />
        </div>
        <div className="home-hero">
          <img
            src="/images/homepagehero.png"
            alt="IronBowl Ramen"
            className="home-hero-image"
          />
          <div className="home-chopsticks">
            <img src="/images/chopsticks.png" alt="" aria-hidden />
          </div>
        </div>
        <div className="home-arc-text">
          <svg viewBox="0 -10 400 130" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
            <defs>
              <path id="arc-path" d="M 113 90 A 100 100 0 0 1 287 90" fill="none" />
            </defs>
            <text fill="#2f2f2f" fontSize="32" fontFamily="'Rampart One', sans-serif" style={{ overflow: 'visible' }}>
              <textPath href="#arc-path" startOffset="50%" textAnchor="middle">
                心を込めて
              </textPath>
            </text>
          </svg>
        </div>
        <div className="home-word-block">
          <p className="home-word-japanese">コク — こく</p>
          <p className="home-word-pronunciation">koku (koh-koo)</p>
          <p className="home-word-definition">is the deep, lingering richness that gives broth its soul and complexity.</p>
        </div>
        <button
          type="button"
          className="home-scroll-button"
          onClick={() => document.getElementById('home-menu')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll down"
        >
          <p className="home-scroll-japanese">スクロール</p>
          <p className="home-scroll-pronunciation">katakana (kah-tah-kah-nah)</p>
          <p className="home-scroll-english">scroll</p>
          <span className="home-scroll-arrow" aria-hidden>↓</span>
        </button>
        </div>
      </section>
      <section id="home-menu" className="home-orange-section">
        <div className="menu-section-inner">
          <h2 className="menu-section-title">MENU</h2>
          <div className="menu-grid">
          {MENU_ITEMS.map((item, index) => (
            <MenuCard
              key={index}
              image={item.image}
              japaneseName={item.japaneseName}
              englishName={item.englishName}
              descriptor={item.descriptor}
            />
          ))}
          </div>
        </div>
      </section>
      <section id="home-contact" className="home-contact-section">
        <div className="contact-layout">
          <div className="contact-window">
            <h2 className="contact-window-title">GET IN TOUCH</h2>
            <p className="contact-window-intro">
              If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or even on social media!
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">NAME</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Enter your name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-phone">PHONE NUMBER</label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="Enter your phone number*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">EMAIL</label>
              <input
                id="contact-email"
                type="email"
                placeholder="Enter your email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">YOUR MESSAGE</label>
              <textarea
                id="contact-message"
                placeholder="Enter your message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="contact-submit">
              SEND MESSAGE
            </button>
          </form>
          </div>
          <div className="contact-info-window">
            <h3 className="contact-info-title">CONTACT INFORMATION</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div>
                  <span className="contact-info-label">PHONE</span>
                  <span className="contact-info-value">(555) 123-4567</span>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div>
                  <span className="contact-info-label">EMAIL</span>
                  <span className="contact-info-value">info@ironbowlramen.com</span>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <span className="contact-info-label">ADDRESS</span>
                  <span className="contact-info-value">123 Ramen Street, New York City</span>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </span>
                <div>
                  <span className="contact-info-label">INSTAGRAM</span>
                  <a href="https://instagram.com/ironbowlramen" target="_blank" rel="noopener noreferrer" className="contact-info-value contact-info-link">@ironbowlramen</a>
                </div>
              </div>
            </div>
            <h3 className="contact-info-title contact-info-title-hours">BUSINESS HOURS</h3>
            <div className="contact-hours-list">
              <div className="contact-hours-item"><span>MONDAY–FRIDAY</span><span>9:00 am – 8:00 pm</span></div>
              <div className="contact-hours-item"><span>SATURDAY</span><span>9:00 am – 6:00 pm</span></div>
              <div className="contact-hours-item"><span>SUNDAY</span><span>9:00 am – 5:00 pm</span></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
