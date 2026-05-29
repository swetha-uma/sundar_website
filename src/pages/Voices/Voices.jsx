import { voices } from '../../data/dummyData';
import './Voices.css';

function Voices() {
  return (
    <div className="voices">
      {voices.map((item) => (
        <blockquote className="voices__item" key={item.id}>
          <p className="voices__quote">&ldquo;{item.quote}&rdquo;</p>
          <footer className="voices__source">{item.source}</footer>
        </blockquote>
      ))}
    </div>
  );
}

export default Voices;
