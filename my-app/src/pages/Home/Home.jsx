import { HiStar } from 'react-icons/hi'
import Button from '../../components/Button/Button'
import Contact from '../../components/Contact/Contact'
import CredentialTicker from '../../components/CredentialTicker/CredentialTicker'
import ExecutiveSummary from '../../components/ExecutiveSummary/ExecutiveSummary'
import LeadershipHighlights from '../../components/LeadershipHighlights/LeadershipHighlights'
import RecognitionPillars from '../../components/RecognitionPillars/RecognitionPillars'
import Voices from '../../components/Voices/Voices'
import StatsBar from '../../components/StatsBar/StatsBar'
import { heroContent } from '../../data/dummyData'
import portraitImage from '../../assets/images/portrait.png'
import './Home.css'

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__badge glass">
              <span className="hero__badge-ambient" aria-hidden="true" />
              <HiStar className="hero__badge-icon" aria-hidden="true" />
              <span>{heroContent.badge}</span>
            </div>

            <h1 className="hero__headline">
              <span className="hero__headline-prefix">
                {heroContent.headlinePrefix}
              </span>
              <span className="hero__headline-accent text-gradient-gold">
                {heroContent.headlineAccent}
              </span>
            </h1>

            <p className="hero__description">{heroContent.description}</p>

            <div className="hero__actions">
              <Button variant="primary" showArrow href={heroContent.primaryCtaHref}>
                {heroContent.primaryCta}
              </Button>
              <Button variant="outline" href={heroContent.secondaryCtaHref}>
                {heroContent.secondaryCta}
              </Button>
            </div>

            <StatsBar className="hero__stats" />
          </div>

          <div className="hero__visual">
            <div className="hero__glow hero__glow--center" aria-hidden="true" />
            <div className="hero__glow" aria-hidden="true" />
            <div className="hero__image-wrap hover-lift">
              <div className="hero__image-ambient" aria-hidden="true" />
              <img
                src={portraitImage}
                alt="Senthil Muthu, executive portrait"
                className="hero__image"
              />
              <div className="hero__image-overlay" aria-hidden="true" />
              <div className="hero__image-caption">
                <span className="hero__image-label">{heroContent.imageLabel}</span>
                <span className="hero__image-subtitle">{heroContent.imageSubtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CredentialTicker />
      <ExecutiveSummary />
      <LeadershipHighlights />
      <RecognitionPillars />
      <Voices />
      <Contact />
    </main>
  )
}

export default Home
