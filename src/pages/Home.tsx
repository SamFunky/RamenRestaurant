import { useState, useEffect, useRef } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'
import './Home.css'
import MenuCard from '../components/MenuCard'

const SPECIALTY_ITEM = {
  image: '/images/homepagehero.png',
  japaneseName: '鶏醤油たまごラーメン',
  englishName: 'Tori Shoyu Tamago Ramen',
  descriptor: 'Chicken-based soy broth ramen with egg and negi.',
  calories: 960,
  price: 14,
}

const MENU_ITEMS = [
  { image: '/images/AburaKaraRamenDeluxe.png', japaneseName: '油辛ラーメン', englishName: 'Abura Kara Ramen Deluxe', descriptor: 'Spicy oil broth, fried garlic bits, sesame, negi, ajitama.', calories: 1160, price: 15 },
  { image: '/images/EbiWantanShioSoup.png', japaneseName: '海老ワンタン塩スープ', englishName: 'Ebi Wantan Shio Soup', descriptor: 'Light salted broth with shrimp wontons and green onion.', calories: 840, price: 14 },
  { image: '/images/GyuNabeKaraStew.png', japaneseName: '牛鍋辛煮込み', englishName: 'Gyu Nabe Kara Stew', descriptor: 'Spicy beef hot pot with tofu, scallions, mushrooms, quail eggs.', calories: 1240, price: 17 },
  { image: '/images/GyuNikomiRamen.png', japaneseName: '牛煮込みラーメン', englishName: 'Gyu Nikomi Ramen', descriptor: 'Slow-braised beef over ramen noodles with triple onsen eggs.', calories: 1380, price: 18 },
  { image: '/images/KaraMisoTamagoRamen.png', japaneseName: '辛味噌たまごラーメン', englishName: 'Kara Miso Tamago Ramen', descriptor: 'Spicy miso broth, curly noodles, soft-boiled egg, chopped negi, sesame oil.', calories: 1220, price: 15 },
  { image: '/images/KaraShoyuTamagoRamen.png', japaneseName: '辛醤油ラーメン', englishName: 'Kara Shoyu Tamago Ramen', descriptor: 'Spicy soy-based broth, sesame, scallions, onsen-style egg.', calories: 1100, price: 14 },
  { image: '/images/MazemenGyuSoboro.png', japaneseName: '混ぜ麺 牛そぼろ', englishName: 'Mazemen Gyu Soboro', descriptor: 'Brothless spicy noodles with seasoned beef, scallions, sesame.', calories: 1160, price: 15 },
  { image: '/images/MisoNabeUdon.png', japaneseName: '味噌鍋うどん', englishName: 'Miso Nabe Udon', descriptor: 'Miso-based hot pot with pork, shiitake, negi, double onsen tamago.', calories: 1300, price: 17 },
  { image: '/images/TonkotsuTamagoRamen.png', japaneseName: '豚骨たまごラーメン', englishName: 'Tonkotsu Tamago Ramen', descriptor: 'Creamy pork bone broth, chashu, ajitsuke tamago, green onion.', calories: 1280, price: 16 },
]

export default function Home() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const menuRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    ;[menuRef.current, aboutRef.current, contactRef.current].forEach((el) => {
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    try {
      await addDoc(collection(db, 'messages'), {
        name,
        phone,
        email,
        message,
        createdAt: serverTimestamp(),
      })
      setSubmitStatus('success')
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <main className="home">
      <section id="home" className="home-hero-section">
        <div className="home-scene">
        <span className="home-hero-watermark" aria-hidden>IRONBOWL</span>
        <div className="home-brushstroke">
          <img src="/images/Orangebrushstroke.png" alt="" aria-hidden />
        </div>
        <div className="home-hero">
          <div className="home-hero-bowl">
            <img
              src="/images/homepagehero.png"
              alt="IronBowl Ramen"
              className="home-hero-image"
            />
          </div>
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
          <p className="home-word-japanese">コク - こく</p>
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
      <section ref={menuRef} id="home-menu" className="home-orange-section section-fade">
        <div className="menu-section-inner">
          <div className="menu-section-header">
            <h2 className="menu-section-title">MENU</h2>
            <span className="menu-section-japanese">メニュー</span>
          </div>
          <article className="menu-specialty">
            <span className="menu-specialty-watermark" aria-hidden>SPECIALTY</span>
            <div className="menu-specialty-image-wrap">
              <img src={SPECIALTY_ITEM.image} alt="" className="menu-specialty-image" />
            </div>
            <div className="menu-specialty-content">
              <p className="menu-specialty-japanese">{SPECIALTY_ITEM.japaneseName}</p>
              <h3 className="menu-specialty-english">{SPECIALTY_ITEM.englishName}</h3>
              <p className="menu-specialty-descriptor">{SPECIALTY_ITEM.descriptor}</p>
              <div className="menu-specialty-meta">
                <span className="menu-specialty-calories">{SPECIALTY_ITEM.calories} cal</span>
                <span className="menu-specialty-sep" aria-hidden>·</span>
                <span className="menu-specialty-price">${SPECIALTY_ITEM.price}</span>
              </div>
            </div>
          </article>
          <div className="menu-grid">
          {MENU_ITEMS.map((item, index) => (
            <MenuCard
              key={index}
              image={item.image}
              japaneseName={item.japaneseName}
              englishName={item.englishName}
              descriptor={item.descriptor}
              calories={item.calories}
              price={item.price}
              rightAlign={index % 2 === 0}
              itemNumber={index + 1}
            />
          ))}
          </div>
        </div>
      </section>
      <section ref={aboutRef} id="home-about" className="home-about-section section-fade">
        <div className="about-hero">
          <div className="about-hero-header">
            <h2 className="about-hero-title">OUR STORY</h2>
            <span className="about-hero-japanese">ストーリー</span>
          </div>
          <p className="about-hero-tagline">
            Two friends. One obsession with good ramen. Zero regrets.
          </p>
          <p className="about-hero-intro">
            Iron Bowl Ramen was founded in 2024, but it started long before that, in a cramped apartment kitchen: late nights, failed broths, and a dream that wouldn’t quit. Here’s how a software engineer and a kid from Osaka made it real.
          </p>
        </div>
        <div className="about-founder about-founder-kenji">
          <div className="about-founder-image-wrap">
            <img
              src="/images/IronBowlCo-founder1.jpg?v=2"
              alt="Kenji Tanaka, co-founder"
              className="about-founder-image"
            />
          </div>
          <div className="about-founder-content">
            <span className="about-founder-label">CO-FOUNDER</span>
            <h3 className="about-founder-name">Kenji Tanaka</h3>
            <p className="about-founder-story">
              Kenji was still in diapers when his family left Osaka for the States. He doesn’t remember the move, but he remembers his obāchan’s kitchen. The smell of simmering tonkotsu. The weight of a real ceramic bowl. The way his grandfather would taste the broth and nod, just once, when it was right.
            </p>
            <p className="about-founder-story">
              He grew up in a household where ramen wasn’t a trend; it was Tuesday. When he and Marcus started experimenting with recipes, Kenji wasn’t chasing nostalgia. He was chasing that same feeling his grandmother gave people: comfort, craft, and something that felt like home.
            </p>
          </div>
        </div>
        <div className="about-founder about-founder-marcus">
          <div className="about-founder-image-wrap">
            <img
              src="/images/IronBowlCo-founder2.jpg?v=2"
              alt="Marcus Reed, co-founder"
              className="about-founder-image"
            />
          </div>
          <div className="about-founder-content">
            <span className="about-founder-label">CO-FOUNDER</span>
            <h3 className="about-founder-name">Marcus Reed</h3>
            <p className="about-founder-story">
              Marcus spent a decade writing code by day and cooking by night. Ramen was his escape, the one thing that made him put the laptop away and focus on something real. He’d tweak recipes for hours. Take notes. Fail. Try again.
            </p>
            <p className="about-founder-story">
              Starting a restaurant felt impossible. Too risky. Too far from the safe path. Then Kenji said, “What are we waiting for?” They found a space. They took the leap. And somewhere between the first bowl and the hundredth, it finally made sense. Some things are worth being scared of.
            </p>
          </div>
        </div>
        <div className="about-cta">
          <div className="about-cta-inner">
            <p className="about-cta-text">
              Every bowl we serve is a product of that partnership: traditional technique meets obsessive iteration. We’re not trying to reinvent ramen. We’re trying to get it right.
            </p>
            <p className="about-cta-close">
              Come taste what happens when two people stop talking about it and start doing it.
            </p>
          </div>
        </div>
      </section>
      <section ref={contactRef} id="home-contact" className="home-contact-section section-fade">
        <span className="contact-watermark" aria-hidden>CONTACT</span>
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
            {submitStatus === 'success' && (
              <p className="contact-success">Thanks for reaching out! We&apos;ll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="contact-error">Something went wrong. Please try again or contact us by phone or email.</p>
            )}
            <button type="submit" className="contact-submit" disabled={submitStatus === 'loading'}>
              {submitStatus === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
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
