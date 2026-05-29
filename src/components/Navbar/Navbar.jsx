import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { navigation, person } from '../../data/dummyData';
import './Navbar.css';

function Navbar({ onOpenAchievements, onOpenVoices }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  const handleNavAction = (action) => {
    closeMenu();

    if (action === 'achievements') {
      onOpenAchievements();
      return;
    }

    if (action === 'voices') {
      onOpenVoices();
      return;
    }

    if (action === 'highlights') {
      navigate('/#highlights');
      setTimeout(() => {
        document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={closeMenu}>
          <div className="navbar__mark" aria-hidden="true">
            <span>SM</span>
          </div>
          <div className="navbar__brand-text">
            <div className="navbar__name">{person.name}</div>
            <div className="navbar__sub">Executive Office</div>
          </div>
        </NavLink>

        <nav className="navbar__nav" aria-label="Primary navigation">
          {navigation.links.map((item) => {
            if (item.path) {
              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}
                >
                  {item.label}
                </NavLink>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                className="navbar__link navbar__link-button"
                onClick={() => handleNavAction(item.action)}
              >
                {item.label}
              </button>
            );
          })}

          <NavLink to="/contact" className="navbar__engage">
            Engage
          </NavLink>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="navbar__mobile">
          <div className="container navbar__mobile-inner">
            {navigation.links.map((item) => {
              if (item.path) {
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    end={item.path === '/'}
                    className="navbar__mobile-link"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  className="navbar__mobile-link navbar__mobile-link-button"
                  onClick={() => handleNavAction(item.action)}
                >
                  {item.label}
                </button>
              );
            })}
            <NavLink to="/contact" className="navbar__mobile-engage" onClick={closeMenu}>
              Engage
            </NavLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
