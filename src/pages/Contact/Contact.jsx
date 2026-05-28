import { contact, person } from '../../data/dummyData';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="container contact__inner">
        <h1 className="contact__title">Contact</h1>
        <p className="contact__desc">
          For engagements, collaborations, and speaking, connect with {person.name} using the options below.
        </p>

        <div className="contact__actions" role="group" aria-label="Contact options">
          <a className="contact__button contact__button--primary" href={`mailto:${contact.email}`}>
            Email
          </a>
          <a className="contact__button contact__button--secondary" href={contact.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

