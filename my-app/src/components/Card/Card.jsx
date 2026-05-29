import './Card.css'

function Card({ label, value, className = '' }) {
  const cardClassName = ['card', 'glass', className].filter(Boolean).join(' ')

  return (
    <article className={cardClassName}>
      <span className="card__label">{label}</span>
      <span className="card__value">{value}</span>
    </article>
  )
}

export default Card
