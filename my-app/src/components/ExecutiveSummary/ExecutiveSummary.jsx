import { featureIconMap } from '../FeatureCard/FeatureCard'
import LeadershipHighlights from '../LeadershipHighlights/LeadershipHighlights'
import LeadershipPillars from '../LeadershipPillars/LeadershipPillars'
import QuantifiableImpact from '../QuantifiableImpact/QuantifiableImpact'
import SelectedEngagements from '../SelectedEngagements/SelectedEngagements'
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

            <div className="executive-summary__stats" aria-label="Executive credentials">
              {executiveSummary.statCards.map((stat) => {
                const StatIcon = stat.icon ? featureIconMap[stat.icon] : null

                return (
                  <article
                    key={stat.label}
                    className={`executive-summary__stat glass${stat.value ? '' : ' executive-summary__stat--label-only'}`}
                  >
                    {StatIcon && (
                      <span className="executive-summary__stat-icon-wrap" aria-hidden="true">
                        <StatIcon className="executive-summary__stat-icon" />
                      </span>
                    )}
                    {stat.value && (
                      <span className="executive-summary__stat-value">{stat.value}</span>
                    )}
                    <span className="executive-summary__stat-label">{stat.label}</span>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="executive-summary__panel">
            <p className="executive-summary__intro-text">{executiveSummary.intro}</p>

            <div className="executive-summary__highlights" aria-label="Executive highlights">
              {executiveSummary.executiveHighlights.map((item) => (
                <article key={item.title} className="executive-summary__highlight glass">
                  <h3 className="executive-summary__highlight-title">{item.title}</h3>
                  <p className="executive-summary__highlight-text">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LeadershipPillars />
      <SelectedEngagements />
      <QuantifiableImpact />
      <LeadershipHighlights />

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
