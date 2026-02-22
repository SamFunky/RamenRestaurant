import './Home.css'

export default function Home() {
  return (
    <main className="home">
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
      </div>
    </main>
  )
}
