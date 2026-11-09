import photoAteliers from "../assets/images/photos/img-8210.jpg";
import photoMentorat from "../assets/images/photos/img-8077.jpg";
import photoLeadership from "../assets/images/photos/img-8195.jpg";
import "./NosActions.css";

export default function NosActions() {
    return(
        <div className="Nos_actions">

      <section className="actions-section" id="actions">
        <div className="actions-container">

          <div className="actions-header">
            <span className="section-tag">NOS ACTIONS</span>
            <h2 className="section-title">Trois programmes pour un même objectif : l'épanouissement</h2>
          </div>

          <div className="actions-grid">

            <div className="action-card">
              <div className="action-image-wrapper">
                <img src={photoAteliers} alt="Ateliers numériques" className="action-image" />
              </div>
              <div className="action-card-body">
                <div className="action-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="action-card-title">Ateliers numériques</h3>
                <p className="action-card-desc">Initiation au code, bureautique, création de contenu et culture digitale, animés chaque mois.</p>
              </div>
            </div>

            <div className="action-card">
              <div className="action-image-wrapper">
                <img src={photoMentorat} alt="Mentorat et confiance" className="action-image" />
              </div>
              <div className="action-card-body">
                <div className="action-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.9 0l.96.96"/>
                  </svg>
                </div>
                <h3 className="action-card-title">Mentorat & confiance</h3>
                <p className="action-card-desc">Un accompagnement de proximité : estime de soi, santé, orientation et projet de vie.</p>
              </div>
            </div>

            <div className="action-card">
              <div className="action-image-wrapper">
                <img src={photoLeadership} alt="Leadership et voix" className="action-image" />
              </div>
              <div className="action-card-body">
                <div className="action-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
                  </svg>
                </div>
                <h3 className="action-card-title">Leadership & voix</h3>
                <p className="action-card-desc">Prise de parole, entrepreneuriat et projets communautaires portés par les filles elles-mêmes.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
        </div>
    );
}
