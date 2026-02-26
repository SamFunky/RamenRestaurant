interface MenuCardProps {
  image: string
  japaneseName: string
  englishName: string
  descriptor: string
  calories: number
  price: number
  rightAlign?: boolean
  itemNumber: number
}

export default function MenuCard({ image, japaneseName, englishName, descriptor, calories, price, rightAlign, itemNumber }: MenuCardProps) {
  const metaContent = rightAlign ? (
    <>
      <span className="menu-card-price">{price}</span>
      <span className="menu-card-calories">{calories}</span>
    </>
  ) : (
    <>
      <span className="menu-card-calories">{calories}</span>
      <span className="menu-card-price">{price}</span>
    </>
  )

  const titleRowContent = rightAlign ? (
    <>
      <span className="menu-card-meta">{metaContent}</span>
      <p className="menu-card-english">{englishName}</p>
    </>
  ) : (
    <>
      <p className="menu-card-english">{englishName}</p>
      <span className="menu-card-meta">{metaContent}</span>
    </>
  )

  return (
    <article className="menu-card">
      <span className={`menu-card-number ${rightAlign ? 'menu-card-number--right' : 'menu-card-number--left'}`} aria-hidden>
        {itemNumber}
      </span>
      <span className="menu-card-watermark" aria-hidden>{japaneseName}</span>
      <img src={image} alt="" className="menu-card-image" />
      <div className="menu-card-content">
        <div className="menu-card-title-row">
          {titleRowContent}
        </div>
        <p className="menu-card-descriptor">{descriptor}</p>
      </div>
    </article>
  )
}
