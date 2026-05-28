import profileImage from '../../assets/images/profile.png';
import './AboutHero.css';

function AboutHero({ person, heroCopy, stats }) {
  return (
    <section className="about-hero">
      <div className="about-hero__grid">
        <div className="about-hero__left">
          <div className="about-hero__badge">{person.badge}</div>

          <h1 className="about-hero__title" aria-label={`${heroCopy.headlineTop} ${heroCopy.headlineEmphasis}`}>
            <span className="about-hero__title-top">{heroCopy.headlineTop}</span>
            <span className="about-hero__title-emphasis">{heroCopy.headlineEmphasis}</span>
          </h1>

          <p className="about-hero__desc">{heroCopy.description}</p>

          <div className="about-hero__actions">
            <button type="button" className="about-hero__cta about-hero__cta--primary">
              {heroCopy.primaryCta}
              <span className="about-hero__arrow" aria-hidden="true">
                →
              </span>
            </button>
            <button type="button" className="about-hero__cta about-hero__cta--secondary">
              {heroCopy.secondaryCta}
            </button>
          </div>

          <div className="about-hero__stats">
            {stats.map((stat) => (
              <div className="about-hero__stat" key={stat.id}>
                <div className="about-hero__stat-value">{stat.value}</div>
                <div className="about-hero__stat-label">
                  {stat.label.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="about-hero__right" aria-label="Profile card">
          <div className="profile-card">
            <img className="profile-card__image" src={profileImage} alt={`${person.name} portrait`} />

            <div className="profile-card__overlay">
              <div className="profile-card__note">{person.note}</div>
              <div className="profile-card__name">{person.name}</div>
              <div className="profile-card__title">{person.title}</div>
              <div className="profile-card__company">{person.company}</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default AboutHero;

