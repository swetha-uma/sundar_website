import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { voicesSection } from '../../data/dummyData'
import './Voices.css'

function Voices() {
  return (
    <section className="voices" id="voices">
      <div className="voices__inner">
        <div className="voices__header">
          <span className="voices__label">{voicesSection.label}</span>
          <h2 className="voices__headline">{voicesSection.headline}</h2>
        </div>

        <div className="voices__grid">
          {voicesSection.testimonials.map((item) => (
            <article key={item.attribution} className="voices__card glass">
              <HiOutlineChatAlt2 className="voices__quote-icon" aria-hidden="true" />
              <blockquote className="voices__quote">{item.quote}</blockquote>
              <p className="voices__attribution">{item.attribution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Voices
