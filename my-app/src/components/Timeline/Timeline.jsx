import './Timeline.css'

function Timeline({
  id,
  label,
  headline,
  milestones,
  className = '',
  showHeader = true,
  embedded = false,
}) {
  const sectionClassName = ['timeline-section', className].filter(Boolean).join(' ')
  const RootTag = embedded ? 'div' : 'section'

  return (
    <RootTag className={sectionClassName} id={embedded ? undefined : id}>
      {showHeader ? (
        <div className="timeline-section__header">
          <span className="timeline-section__label">{label}</span>
          <h2 className="timeline-section__headline">{headline}</h2>
        </div>
      ) : null}

      <div className="timeline-section__track">
        {milestones.map((milestone) => (
          <article
            key={`${id}-${milestone.year || 'na'}-${milestone.title}`}
            className={`timeline-section__item timeline-section__item--${milestone.alignment}`}
          >
            <div className="timeline-section__content">
              {milestone.year ? (
                <span className="timeline-section__year">{milestone.year}</span>
              ) : null}
              <h3 className="timeline-section__title">{milestone.title}</h3>
              <p className="timeline-section__description">{milestone.description}</p>
            </div>

            <div className="timeline-section__marker" aria-hidden="true">
              <span className="timeline-section__marker-ring" />
              <span className="timeline-section__marker-dot" />
            </div>
          </article>
        ))}
      </div>
    </RootTag>
  )
}

export default Timeline
