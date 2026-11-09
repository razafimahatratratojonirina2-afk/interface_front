import logoIcone from "../assets/images/logos/flamingo-icone-bicolore.png";
import "./Citation.css";

export default function Citation() {
    return(
        <div className="citation">
      <section className="quote">
        <div className="w">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
            <img src={logoIcone} alt="Logo Flamingo" style={{ width: '40px', height: '40px' }} />
          </div>
          <h2>« Quand une jeune fille apprend, c'est toute une communauté qui avance. »</h2>
          <p style={{ fontSize: '13px', opacity: 0.8 }}>Association Flamingo — Girls For Change</p>
        </div>
      </section>
        </div>
    );
}
