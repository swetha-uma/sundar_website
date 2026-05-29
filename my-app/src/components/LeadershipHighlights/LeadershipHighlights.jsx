import FeatureCard from '../FeatureCard/FeatureCard'
import { leadershipHighlights } from '../../data/dummyData'
import './LeadershipHighlights.css'

function LeadershipHighlights() {
  return (
    <section className="leadership-highlights" id="highlights">
      <div className="leadership-highlights__inner">
        <div className="leadership-highlights__header">
          <div className="leadership-highlights__intro">
            <span className="leadership-highlights__label">{leadershipHighlights.label}</span>
            <h2 className="leadership-highlights__headline">{leadershipHighlights.headline}</h2>
          </div>
          <p className="leadership-highlights__description">{leadershipHighlights.description}</p>
        </div>

        <div className="leadership-highlights__grid">
          {leadershipHighlights.items.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeadershipHighlights
