import { HiGlobeAlt, HiMail } from 'react-icons/hi'
import { FaLinkedinIn } from 'react-icons/fa'
import { footerContent, siteInfo } from '../../data/dummyData'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{siteInfo.initials}</span>
          <p className="footer__copyright">{footerContent.copyright}</p>
        </div>

        <p className="footer__tagline">{footerContent.tagline}</p>

        <div className="footer__social">
          <a
            href={footerContent.linkedInUrl}
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a href={`mailto:${footerContent.email}`} className="footer__social-link" aria-label="Email">
            <HiMail />
          </a>
          <a href="#" className="footer__social-link" aria-label="Website">
            <HiGlobeAlt />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
