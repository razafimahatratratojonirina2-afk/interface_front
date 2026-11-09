import "./Chiffres.css";

export default function Chiffres() {
    return(
        <div className="chiffres">
 {/* --- 2. SECTION STATISTIQUES --- */}
       <section className="hero-stats">
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">+150</span>
            <span className="stat-label">Filles formées</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">12</span>
            <span className="stat-label">Ateliers par an</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Gratuit & Solidaire</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">+5</span>
            <span className="stat-label">Partenaires engagés</span>
          </div>
        </div>
      </section>
        </div>
    );
}
