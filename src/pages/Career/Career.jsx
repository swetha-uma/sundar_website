import { careerTimeline } from '../../data/dummyData';
import Panel from '../../components/Panel/Panel';
import './Career.css';

function Career() {
  return (
    <div className="career">
      <Panel eyebrow="Overview" title="Career timeline" description="A concise, executive-level view across regions and industries.">
        <div className="career__timeline">
          {careerTimeline.map((item) => (
            <div className="career__item" key={item.id}>
              <div className="career__period">{item.period}</div>
              <div className="career__content">
                <div className="career__title">{item.title}</div>
                <div className="career__meta">{item.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

export default Career;

