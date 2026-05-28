import { certifications, featuredAchievements, highlights } from '../../data/dummyData';
import Panel from '../../components/Panel/Panel';
import './Achievements.css';

function Achievements() {
  return (
    <div className="achievements">
      <Panel eyebrow="Highlights" title="Recognition & leadership" description="Curated, high-signal credibility markers.">
        <div className="achievements__grid">
          {highlights.map((item) => (
            <div className="achievements__card" key={item.id}>
              <div className="achievements__title">{item.title}</div>
              <div className="achievements__meta">{item.meta}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="achievements__spacer" />

      <Panel eyebrow="Patents" title="Provisional patents" description="Key innovations focused on governance and orchestration.">
        <div className="achievements__stack">
          {featuredAchievements.slice(0, 2).map((item) => (
            <div className="achievements__row" key={item.id}>
              <div className="achievements__row-title">{item.title}</div>
              <div className="achievements__row-meta">{item.meta}</div>
            </div>
          ))}
        </div>
      </Panel>

      <div className="achievements__spacer" />

      <Panel eyebrow="Credentials" title="Selected certifications" description="A concise list to keep the UI executive and readable.">
        <div className="achievements__chips">
          {certifications.map((item) => (
            <div className="achievements__chip" key={item}>
              {item}
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

export default Achievements;

