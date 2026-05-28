import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ onOpenAchievements, onOpenCareer }) {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__brand">
          <div className="navbar__mark" aria-hidden="true">
            <span>SM</span>
          </div>
          <div className="navbar__brand-text">
            <div className="navbar__name">Senthil Muthu</div>
            <div className="navbar__sub">Executive Office</div>
          </div>
        </div>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <NavLink to="/" className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}>
            Home
          </NavLink>
          <button type="button" className="navbar__link navbar__link-button" onClick={onOpenAchievements}>
            Achievements
          </button>
          <button type="button" className="navbar__link navbar__link-button" onClick={onOpenCareer}>
            Career Overview
          </button>
          <NavLink
            to="/contact"
            className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
          >
            Contact
          </NavLink>

          <button type="button" className="navbar__engage">
            Engage
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

