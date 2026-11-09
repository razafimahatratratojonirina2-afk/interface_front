export default function Steaminist() {
    return(
        <div className="steam">

      <section className="sec dk" style={{ background: '#150f11' }}>
        <div className="w">
          <span className="tag">Projet réalisé en 2023</span>
          <h2>Steaminist : la science et l'art à portée des jeunes</h2>
          <p style={{ maxWidth: '850px', fontSize: '14px', marginBottom: '30px', color: '#d9cfd1' }}>
            Partenariat d'Aurore Flamingo et Steaminist 2023. Structuré autour des ateliers de collège et de lycée autour d'un parcours découverte mêlant sciences, technologie, ingénierie, mathématiques et arts — pour éveiller les vocations et montrer que chaque discipline est accessible à toutes et à tous.
          </p>

          <div className="cards">
            <div className="card act">
              <div className="ico">🔬</div>
              <div className="b">
                <h3>Sciences & Chimie</h3>
                <p>Manipulation de minéraux et expériences chimiques amusantes avec du matériel de laboratoire.</p>
              </div>
            </div>
            <div className="card act">
              <div className="ico">🔭</div>
              <div className="b">
                <h3>Astronomie</h3>
                <p>Séances d'observation céleste et grand public, en partenariat avec l'association Stella Maris.</p>
              </div>
            </div>
            <div className="card act">
              <div className="ico">💻</div>
              <div className="b">
                <h3>Tech & codage</h3>
                <p>Ateliers d'apprentissage et d'initiation au codage pour les collégiennes et lycéennes.</p>
              </div>
            </div>
            <div className="card act">
              <div className="ico">🤖</div>
              <div className="b">
                <h3>Ingénierie & robotique</h3>
                <p>Découverte de la robotique et programmation en langage C.</p>
              </div>
            </div>
            <div className="card act">
              <div className="ico">📐</div>
              <div className="b">
                <h3>Mathématiques</h3>
                <p>Un concours de mathématiques pour stimuler la logique et l'esprit de compétition.</p>
              </div>
            </div>
            <div className="card act">
              <div className="ico">🎨</div>
              <div className="b">
                <h3>Arts</h3>
                <p>Exposition d'œuvres et concours de dessin pour cultiver la créativité des participantes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
