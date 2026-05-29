import {
  HiBadgeCheck,
  HiChip,
  HiGlobeAlt,
  HiOfficeBuilding,
  HiShieldCheck,
  HiStar,
  HiUserGroup,
} from 'react-icons/hi'
import './FeatureCard.css'

const iconMap = {
  globe: HiGlobeAlt,
  chip: HiChip,
  shield: HiShieldCheck,
  badge: HiBadgeCheck,
  building: HiOfficeBuilding,
  users: HiUserGroup,
  shieldCheck: HiShieldCheck,
  award: HiStar,
}

function FeatureCard({ icon, title, description, className = '' }) {
  const IconComponent = iconMap[icon] || HiShieldCheck

  const cardClassName = ['feature-card', 'glass', className].filter(Boolean).join(' ')

  return (
    <article className={cardClassName}>
      <div className="feature-card__icon-wrap" aria-hidden="true">
        <IconComponent className="feature-card__icon" />
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </article>
  )
}

export default FeatureCard
