import "./Contact.css";

export function Contact() {
  return (
    <section id="contact" className="contact page-section reveal delay-2">
      <h2 className="section-heading">Contact</h2>
      <p className="section-lead">
        Tu as une opportunite d'alternance, un stage ou un projet freelance ?
        Ecrivons-nous.
      </p>

      <div className="contact-grid">
        <a href="mailto:jngusly@gmail.com">
          <span>Email</span>
          <strong>jngusly@gmail.com</strong>
        </a>
        <a href="https://www.linkedin.com/in/jean-gusly-hyppolite/" target="_blank" rel="noreferrer">
          <span>LinkedIn</span>
          <strong>Profil professionnel</strong>
        </a>
        <a href="https://github.com/Gusly007" target="_blank" rel="noreferrer">
          <span>GitHub</span>
          <strong>Voir les repositories</strong>
        </a>
      </div>
    </section>
  );
}
