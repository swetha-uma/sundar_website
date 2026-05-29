import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { careerTimeline, certifications, featuredAchievements, highlights, heroCopy, person, recognition, stats } from '../../data/dummyData';
import Panel from '../../components/Panel/Panel';
import AboutHero from '../../sections/AboutHero/AboutHero';
import './Home.css';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#highlights') {
      document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="home">
      <div className="container">
        <AboutHero person={person} heroCopy={heroCopy} stats={stats} />

        <div className="home__overview">
          <Panel eyebrow="Credibility" title="Highlights" description="High-signal recognition and trust markers." id="highlights">
            <div className="home__grid-cards">
              {highlights.map((item) => (
                <div className="home__mini-card" key={item.id}>
                  <div className="home__mini-title">{item.title}</div>
                  <div className="home__mini-meta">{item.meta}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Impact" title="Featured achievements" description="Concise portfolio proof points — details live in the Achievements panel.">
            <div className="home__stack">
              {featuredAchievements.map((item) => (
                <div className="home__row" key={item.id}>
                  <div className="home__row-title">{item.title}</div>
                  <div className="home__row-meta">{item.meta}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Career" title="Career overview" description="A tight timeline preview — full view in the Career panel.">
            <div className="home__stack">
              {careerTimeline.slice(0, 3).map((item) => (
                <div className="home__row" key={item.id}>
                  <div className="home__row-title">
                    <span className="home__pill">{item.period}</span> {item.title}
                  </div>
                  <div className="home__row-meta">{item.meta}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Signals" title="Recognition & affiliations" description="Professional communities and leadership signals.">
            <div className="home__logo-grid">
              {recognition.map((item) => (
                <div className="home__logo-pill" key={item.id}>
                  {item.label}
                </div>
              ))}
            </div>
          </Panel>

          <Panel eyebrow="Credentials" title="Certifications" description="Selected certifications (curated, not exhaustive).">
            <div className="home__chips">
              {certifications.map((item) => (
                <div className="home__chip" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default Home;

