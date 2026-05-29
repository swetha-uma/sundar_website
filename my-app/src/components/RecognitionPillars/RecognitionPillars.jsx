import FeatureCard from '../FeatureCard/FeatureCard'
import { recognitionPillars } from '../../data/dummyData'
import './RecognitionPillars.css'

function RecognitionPillars() {
  return (
    <section className="recognition-pillars" aria-label="Recognition pillars">
      <div className="recognition-pillars__inner">
        <div className="recognition-pillars__grid">
          {recognitionPillars.map((pillar) => (
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
