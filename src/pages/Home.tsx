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
    </main>
  )
}
