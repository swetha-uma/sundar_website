import FeatureCard from '../FeatureCard/FeatureCard'
import { recognitionSection } from '../../data/dummyData'
import './RecognitionPillars.css'

function RecognitionPillars() {
  return (
    <section className="recognition-pillars" id="recognition" aria-label="Recognition and impact">
      <div className="recognition-pillars__inner">
        <div className="recognition-pillars__header">
          <div className="recognition-pillars__intro">
            <span className="recognition-pillars__label">{recognitionSection.label}</span>
            <h2 className="recognition-pillars__headline">{recognitionSection.headline}</h2>
          </div>
          <p className="recognition-pillars__description">{recognitionSection.description}</p>
        </div>

        <div className="recognition-pillars__grid">
          {recognitionSection.items.map((pillar) => (
            <FeatureCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecognitionPillars
