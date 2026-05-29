import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedinIn } from 'react-icons/fa'
import Button from '../Button/Button'
import { contactSection } from '../../data/dummyData'
import useContact from './hooks/useContact'
import './Contact.css'

function Contact() {
  const { form, errors, isSubmitted, updateField, handleSubmit } = useContact()

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__glow contact__glow--top" aria-hidden="true" />
        <div className="contact__glow contact__glow--bottom" aria-hidden="true" />
        <div className="contact__glow contact__glow--left" aria-hidden="true" />
        <div className="contact__content">
        <div className="contact__info">
          <span className="contact__label">{contactSection.label}</span>
          <h2 className="contact__headline">
            {contactSection.headlinePrefix}{' '}
            <span className="contact__headline-accent">{contactSection.headlineAccent}</span>
          </h2>
          <p className="contact__description">{contactSection.description}</p>

          <div className="contact__cards">
            <a href={`mailto:${contactSection.email}`} className="contact__card">
              <span className="contact__card-icon-wrap" aria-hidden="true">
                <HiMail className="contact__card-icon" />
              </span>
              <span className="contact__card-body">
                <span className="contact__card-label">EMAIL</span>
                <span className="contact__card-value">{contactSection.email}</span>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/senthilmuthu"
              className="contact__card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__card-icon-wrap" aria-hidden="true">
                <FaLinkedinIn className="contact__card-icon" />
              </span>
              <span className="contact__card-body">
                <span className="contact__card-label">LINKEDIN</span>
                <span className="contact__card-value">{contactSection.linkedIn}</span>
              </span>
            </a>

            <div className="contact__card">
              <span className="contact__card-icon-wrap" aria-hidden="true">
                <HiLocationMarker className="contact__card-icon" />
              </span>
              <span className="contact__card-body">
                <span className="contact__card-label">OFFICES</span>
                <span className="contact__card-value">{contactSection.offices}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="contact__form-panel">
          {isSubmitted ? (
            <p className="contact__success" role="status">
              Thank you. Your inquiry has been received.
            </p>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label className="contact__field-label" htmlFor="contact-name">
                  NAME
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="contact__input"
                  placeholder={contactSection.formPlaceholders.name}
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className="contact__error">{errors.name}</span>}
              </div>

              <div className="contact__field">
                <label className="contact__field-label" htmlFor="contact-email">
                  EMAIL
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="contact__input"
                  placeholder={contactSection.formPlaceholders.email}
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="contact__error">{errors.email}</span>}
              </div>

              <div className="contact__field contact__field--message">
                <label className="contact__field-label" htmlFor="contact-message">
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  className="contact__input contact__input--textarea"
                  placeholder={contactSection.formPlaceholders.message}
                  rows={5}
                  value={form.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <span className="contact__error">{errors.message}</span>}
              </div>

              <Button type="submit" variant="primary" showArrow className="contact__submit">
                {contactSection.submitLabel}
              </Button>
            </form>
          )}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
