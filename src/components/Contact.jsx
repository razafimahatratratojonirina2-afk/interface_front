import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Bloc Texte & Bouton */}
        <div className="contact-left">
          <span className="contact-tag">CONTACT</span>
          <h2 className="contact-title">
            Écrivez-nous, rejoignez le mouvement
          </h2>
          <p className="contact-description">
            Une question, une envie de bénévolat, un partenariat ou une inscription ? Un clic suffit pour nous envoyer un e-mail.
          </p>
          <a href="mailto:flamingogirlsforchange@gmail.com" className="btn-primary-pink">
            <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="3"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>Envoyer un mail à l'association</span>
          </a>
        </div>

        {/* Bloc Cartes de coordonnées */}
        <div className="contact-right">

          {/* Téléphone */}
          <div className="contact-card">
            <div className="contact-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">TÉLÉPHONE</span>
              <span className="contact-value">034 97 867 80</span>
            </div>
          </div>

          {/* E-mail */}
          <div className="contact-card">
            <div className="contact-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">E-MAIL</span>
              <a href="mailto:flamingogirlsforchange@gmail.com" className="contact-link">
                flamingogirlsforchange@gmail.com
              </a>
            </div>
          </div>

          {/* Facebook */}
          <div className="contact-card">
            <div className="contact-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.8l.2-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">FACEBOOK</span>
              <span className="contact-value">Association Flamingo</span>
            </div>
          </div>

          {/* Adresse */}
          <div className="contact-card">
            <div className="contact-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">ADRESSE</span>
              <span className="contact-value">Mahazoarivo, Antsirabe</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
