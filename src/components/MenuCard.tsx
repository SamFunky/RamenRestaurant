interface MenuCardProps {
  image: string
  japaneseName: string
  englishName: string
  descriptor: string
  calories: number
  price: number
}

export default function MenuCard({ image, japaneseName, englishName, descriptor, calories, price }: MenuCardProps) {
  return (
    <article className="menu-card">
      <img src="/images/BrushStroke.png" alt="" className="menu-card-brushstroke" aria-hidden />
      <img src={image} alt="" className="menu-card-image" />
      <div className="menu-card-content">
        <div className="menu-card-title-row">
          <p className="menu-card-english">{englishName}</p>
          <span className="menu-card-meta">
          <span className="menu-card-calories">{calories}</span>
          <span className="menu-card-price">{price}</span>
        </span>
        </div>
        <p className="menu-card-japanese">{japaneseName}</p>
        <p className="menu-card-descriptor">{descriptor}</p>
      </div>
    </article>
  )
}
