import { HiCalendar } from 'react-icons/hi'
import { selectedEngagements } from '../../data/dummyData'
import { splitSectorLines } from './utils/engagementFormatters'
import './SelectedEngagements.css'

function SelectedEngagements() {
  return (
    <section className="selected-engagements" id="selected-engagements" aria-label="Selected engagements">
      <div className="selected-engagements__inner">
        <header className="selected-engagements__header">
          <span className="selected-engagements__label">{selectedEngagements.label}</span>
          <div className="selected-engagements__header-body">
            <h2 className="selected-engagements__headline">{selectedEngagements.headline}</h2>
            <p className="selected-engagements__description">{selectedEngagements.intro}</p>
          </div>
        </header>

        <div className="selected-engagements__studies">
          {selectedEngagements.items.map((engagement) => {
            const sectorLines = splitSectorLines(engagement.sector)

            return (
              <article
                key={`${engagement.period}-${engagement.company}`}
                className="selected-engagements__study glass"
              >
                <div className="selected-engagements__study-grid">
                  <aside className="selected-engagements__meta">
                    <div className="selected-engagements__period">
                      <HiCalendar
                        className="selected-engagements__period-icon"
                        aria-hidden="true"
                      />
                      <span>{engagement.period}</span>
                    </div>
                    <h3 className="selected-engagements__company">{engagement.company}</h3>
                    <p className="selected-engagements__role">{engagement.role}</p>
                    <span className="selected-engagements__locations">{engagement.locations}</span>
                    {sectorLines.length > 0 && (
                      <div className="selected-engagements__sector-group">
                        {sectorLines.map((line) => (
                          <span key={line} className="selected-engagements__sector-line">
                            {line}
                          </span>
                        ))}
                      </div>
                    )}

                    {engagement.leadershipSnapshot?.length > 0 && (
                      <div className="selected-engagements__snapshot">
                        <h4 className="selected-engagements__snapshot-title">Leadership Snapshot</h4>
                        <div className="selected-engagements__snapshot-grid">
                          {engagement.leadershipSnapshot.map((metric) => (
                            <div key={metric.label} className="selected-engagements__snapshot-metric">
                              <span className="selected-engagements__snapshot-value">{metric.value}</span>
                              <span className="selected-engagements__snapshot-label">{metric.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </aside>

                  <div className="selected-engagements__narrative">
                    <section className="selected-engagements__block">
                      <h4 className="selected-engagements__block-title">Challenge</h4>
                      <p className="selected-engagements__challenge-text">{engagement.challenge}</p>
                    </section>

                    <div className="selected-engagements__divider" aria-hidden="true" />

                    <section className="selected-engagements__block">
                      <h4 className="selected-engagements__block-title">Actions</h4>
                      <ul className="selected-engagements__actions-list">
                        {engagement.actions.map((action) => (
                          <li key={action}>{action}</li>
                        ))}
                      </ul>
                    </section>

                    <div className="selected-engagements__divider" aria-hidden="true" />

                    <section className="selected-engagements__block selected-engagements__block--impact">
                      <h4 className="selected-engagements__block-title">Impact</h4>
                      <ul className="selected-engagements__impact-list">
                        {engagement.impact.map((impactLine) => (
                          <li key={impactLine}>{impactLine}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SelectedEngagements
