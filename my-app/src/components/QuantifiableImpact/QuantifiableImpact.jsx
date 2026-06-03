import { quantifiableImpact } from '../../data/dummyData'
import './QuantifiableImpact.css'

function QuantifiableImpact() {
  return (
    <section className="quantifiable-impact" id="quantifiable-impact" aria-label="Quantifiable impact">
      <div className="quantifiable-impact__inner">
        <header className="quantifiable-impact__header">
          <span className="quantifiable-impact__label">{quantifiableImpact.label}</span>
          <h2 className="quantifiable-impact__headline">{quantifiableImpact.headline}</h2>
        </header>

        <div className="quantifiable-impact__grid">
          {quantifiableImpact.metrics.map((metric) => (
            <article key={metric.value} className="quantifiable-impact__card glass">
              <span className="quantifiable-impact__value text-gradient-gold">{metric.value}</span>
              <p className="quantifiable-impact__description">{metric.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuantifiableImpact
