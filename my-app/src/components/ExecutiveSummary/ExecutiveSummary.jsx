import Card from '../Card/Card'
import Timeline from '../Timeline/Timeline'
import {
  achievementMilestones,
  executiveSummary,
  highlightMilestones,
} from '../../data/dummyData'
import './ExecutiveSummary.css'

function ExecutiveSummary() {
  return (
    <section className="executive-summary">
      <div className="executive-summary__about" id="about">
        <div className="executive-summary__inner">
          <div className="executive-summary__intro">
            <span className="executive-summary__label">{executiveSummary.label}</span>
            <h2 className="executive-summary__headline">
              <span className="executive-summary__headline-line">{executiveSummary.headlineLine1}</span>
              <span className="executive-summary__headline-line">{executiveSummary.headlineLine2}</span>
            </h2>
          </div>

          <div className="executive-summary__details">
            <p className="executive-summary__description">{executiveSummary.description}</p>

            <div className="executive-summary__cards">
              {executiveSummary.infoCards.map((card) => (
                <Card key={card.label} label={card.label} value={card.value} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="executive-summary__achievements" id="achievements">
        <div className="executive-summary__achievements-inner">
          <div className="executive-summary__achievements-header">
            <div className="executive-summary__achievements-intro">
              <span className="executive-summary__label">{executiveSummary.achievementsLabel}</span>
              <h3 className="executive-summary__timeline-headline">
                {executiveSummary.timelineHeadline}
              </h3>
            </div>
          </div>
          <Timeline
            milestones={[...achievementMilestones, ...highlightMilestones]}
            showHeader={false}
            embedded
            className="timeline-section--embedded"
          />
        </div>
      </div>
    </section>
  )
}

export default ExecutiveSummary
