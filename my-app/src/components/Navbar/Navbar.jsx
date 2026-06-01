import { HiMenu, HiX } from 'react-icons/hi'
import Button from '../Button/Button'
import { siteInfo, navLinks } from '../../data/dummyData'
import useNavbar from './hooks/useNavbar'
import './Navbar.css'

function Navbar() {
  const { isMenuOpen, activeHash, toggleMenu, closeMenu, handleNavClick } = useNavbar()

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#about" className="navbar__brand" onClick={() => handleNavClick('#about')}>
          <span className="navbar__logo">{siteInfo.initials}</span>
          <span className="navbar__brand-text">
            <span className="navbar__name">{siteInfo.name}</span>
            <span className="navbar__title">{siteInfo.title}</span>
          </span>
        </a>

        <nav className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`navbar__link ${activeHash === link.href ? 'navbar__link--active' : ''}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="ghost-gold"
            className="navbar__engage-mobile"
            href="#contact"
            onClick={() => handleNavClick('#contact')}
          >
            Engage
          </Button>
        </nav>

        <Button
          variant="ghost-gold"
          className="navbar__engage"
          href="#contact"
          onClick={() => handleNavClick('#contact')}
        >
          Engage
        </Button>

        <button
          type="button"
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
