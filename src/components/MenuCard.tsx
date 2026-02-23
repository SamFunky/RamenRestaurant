interface MenuCardProps {
  image: string
  japaneseName: string
  englishName: string
  descriptor: string
}

export default function MenuCard({ image, japaneseName, englishName, descriptor }: MenuCardProps) {
  return (
    <article className="menu-card">
      <img src="/images/BrushStroke.png" alt="" className="menu-card-brushstroke" aria-hidden />
      <img src={image} alt="" className="menu-card-image" />
      <div className="menu-card-content">
        <p className="menu-card-english">{englishName}</p>
        <p className="menu-card-japanese">{japaneseName}</p>
        <p className="menu-card-descriptor">{descriptor}</p>
      </div>
    </article>
  )
}
