import visuelCodHerBus from "../assets/images/photos/girls-can-code.jpg";

export default function CodHerBus() {
    return(
        <div className="coder">

      <section className="sec dk" id="codher-bus">
        <div className="w">
          <span className="tag">Nouveauté - 2026</span>
          <div className="two">
            <div className="card logo-im round" style={{ background: '#fff', padding: '20px' }}>
              <img src={visuelCodHerBus} alt="CodHer-Bus" style={{ borderRadius: '12px' }} />
            </div>
            <div>
              <h2>CodHer-Bus : la salle de formation qui vient jusqu'à elles</h2>
              <p style={{ fontSize: '14px', marginBottom: '14px' }}>
                CodHer-Bus est une initiative éducative itinérante qui utilise un bus aménagé comme salle de formation mobile. Nous allons à la rencontre des jeunes rurales et semi-rurales pour leur offrir un accès au numérique, à internet et aux formations en technologies.
              </p>
              <p className="p" style={{ fontWeight: 700, marginBottom: '20px' }}>
                Apprendre - Coder - Innover - Partout
              </p>
              <a href="#soutenir" className="btn">Soutenir l'initiative →</a>
            </div>
          </div>

          <div className="cards" style={{ marginTop: '40px' }}>
            <div className="card act">
              <div className="ico">🚍</div>
              <div className="b">
                <h3>Une salle de formation mobile</h3>
                <p>Un bus aménagé en laboratoire informatique équipé, prêt à dispenser des cours.</p>
              </div>
            </div>
            <div className="card act">
              <div className="ico">📍</div>
              <div className="b">
                <h3>Zones rurales & semi-rurales</h3>
                <p>Nous allons là où les jeunes filles n'ont ni ordinateurs, ni connexions, ni formations en technologies.</p>
              </div>
            </div>
            <div className="card act">
              <div className="ico">💻</div>
              <div className="b">
                <h3>Connexion & Équipement</h3>
                <p>Ordinateurs, connexions et supports pédagogiques pour apprendre partout.</p>
              </div>
            </div>
            <div className="card act">
              <div className="ico">🚀</div>
              <div className="b">
                <h3>Apprendre : Coder : Innover</h3>
                <p>Un parcours d'initiation encadré par des formatrices et mentores de Flamingo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        </div>
    )
}
