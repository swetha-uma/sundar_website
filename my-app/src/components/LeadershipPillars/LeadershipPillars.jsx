import { leadershipPillars } from '../../data/dummyData'
import './LeadershipPillars.css'

function LeadershipPillars() {
  return (
    <section className="leadership-pillars" id="pillars" aria-label="Leadership pillars">
      <div className="leadership-pillars__inner">
        <div className="leadership-pillars__header">
          <div className="leadership-pillars__intro">
            <span className="leadership-pillars__label">{leadershipPillars.label}</span>
            <h2 className="leadership-pillars__headline">{leadershipPillars.headline}</h2>
          </div>
        </div>

        <div className="leadership-pillars__grid">
          {leadershipPillars.items.map((item) => (
            <article key={item.number} className="leadership-pillars__card feature-card glass">
              <span className="leadership-pillars__number">{item.number}</span>
              <h3 className="feature-card__title">{item.title}</h3>
              <p className="feature-card__description">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeadershipPillars
