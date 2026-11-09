import "./APropos.css";

export default function APropos() {
    return(
        <div className="A propos">
         {/* --- 3. SECTION À PROPOS --- */}
      <section className="about-section" id="a-propos">
        <div className="about-container">

          <div className="about-content">
            <span className="section-tag">À PROPOS</span>
            <h2 className="section-title">Une association née pour faire briller les filles</h2>
            <p className="about-text">
              À Mahazoarivo Antsirabe, Flamingo réunit des jeunes filles de 15 à 25 ans autour d'un même élan : apprendre, oser et construire. Nous croyons que l'accès au numérique est aujourd'hui la clé de l'autonomie et de l'émancipation.
            </p>
            <p className="about-text">
              Nos bénévoles et mentores proposent des ateliers gratuits, un accompagnement personnalisé et des projets concrets qui valorisent les talents de chacune.
            </p>
          </div>

          <div className="about-cards-grid">
            <div className="about-card card-full">
              <h3 className="card-title">Épanouissement</h3>
              <p className="card-desc">Chaque jeune fille mérite un espace sûr pour grandir, apprendre et rêver grand.</p>
            </div>

            <div className="about-card">
              <h3 className="card-title">Technologie</h3>
              <p className="card-desc">Le numérique est un levier d'autonomie : nous le rendons accessible à toutes.</p>
            </div>

            <div className="about-card">
              <h3 className="card-title">Sororité</h3>
              <p className="card-desc">Un réseau d'entraide durable entre les filles d'Antsirabe et d'ailleurs.</p>
            </div>
          </div>

        </div>
      </section>

        </div>
    )
}
