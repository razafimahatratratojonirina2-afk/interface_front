import photoAtelier from "../assets/images/photos/img-8235.jpg";

export default function GirlsCanCode() {
    return(
        <div className="Girl">


      <section className="sec dk">
        <div className="w">
          <span className="tag">PROGRAMME - GIRLS CAN CODE 2024</span>
          <div className="two">
            <div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', marginBottom: '16px', lineHeight: '1.2' }}>
                Girls Can Code : 3 mois pour construire ton avenir numérique
              </h2>
              <p style={{ fontSize: '14px', marginBottom: '24px', color: '#d9cfd1', lineHeight: '1.6' }}>
                Girls Can Code (GCC) est le programme phare de l'Association Flamingo destiné aux jeunes filles de 15 à 25 ans. Pendant trois mois, les participantes découvrent le monde du numérique et développent de nouvelles compétences dans un environnement d'apprentissage, de partage et de créativité.
              </p>


              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

                {/* Item 1 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div className="ico" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>💻</div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <b style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, marginBottom: '2px' }}>Informatique & bureautique</b>
                    <small style={{ color: '#a09a9c', fontSize: '13px' }}>Maîtriser les bases de l'ordinateur et les outils bureautiques du quotidien.</small>
                  </div>
                </div>

                {/* Item 2 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div className="ico" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎨</div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <b style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, marginBottom: '2px' }}>Design graphique & UI/UX</b>
                    <small style={{ color: '#a09a9c', fontSize: '13px' }}>Créer des visuels et concevoir des interfaces utiles et esthétiques.</small>
                  </div>
                </div>

                {/* Item 3 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div className="ico" style={{ flexShrink: 0, fontWeight: 'bold', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    &lt;/&gt;
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <b style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, marginBottom: '2px' }}>Code & programmation</b>
                    <small style={{ color: '#a09a9c', fontSize: '13px' }}>Apprendre à coder pas à pas et donner vie à ses propres projets.</small>
                  </div>
                </div>

                {/* Item 4 */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div className="ico" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✨</div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <b style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, marginBottom: '2px' }}>Formation de 3 mois</b>
                    <small style={{ color: '#a09a9c', fontSize: '13px' }}>Un parcours complet dans un environnement d'apprentissage, de partage et de créativité.</small>
                  </div>
                </div>

              </div>
            </div>

            <div className="im round" style={{ boxShadow: '0 0 30px rgba(255,45,120,0.3)', border: '1px solid rgba(255,45,120,0.4)', overflow: 'hidden' }}>
              <img src={photoAtelier} alt="Atelier Girls Can Code" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <p style={{ textAlign: 'left', marginTop: '40px', fontStyle: 'italic', color: 'var(--pink)', fontWeight: 700, fontSize: '15px' }}>
            Parce que le numérique est aussi notre avenir.
          </p>
        </div>
      </section>
        </div>
    )
}
