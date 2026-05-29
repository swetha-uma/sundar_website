import { stats } from '../../data/dummyData'
import './StatsBar.css'

function StatsBar({ className = '' }) {
  const sectionClassName = ['stats-bar', className].filter(Boolean).join(' ')

  return (
    <section className={sectionClassName} aria-label="Key metrics">
      <div className="stats-bar__inner">
        {stats.map((stat) => (
          <div key={stat.label} className="stats-bar__item">
            <span className="stats-bar__value">{stat.value}</span>
            <span className="stats-bar__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar
