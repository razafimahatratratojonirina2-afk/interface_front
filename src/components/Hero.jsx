import photoHero from "../assets/images/photos/img-8220.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="landing-page">


      <section className="hero-main">
        <div className="hero-container">

          <div className="hero-content">
            <span className="hero-tag">GIRLS FOR CHANGE - ANTSIRABE</span>
            <h1 className="hero-title">
              Les jeunes filles au <span className="highlight-pink">cœur de la révolution numérique</span>
            </h1>
            <p className="hero-description">
              Association Flamingo est une organisation à but non lucratif dédiée aux jeunes filles de 15 à 25 ans. Nous les aidons à s'épanouir, à se former et à prendre leur place grâce à la technologie.
            </p>

            <div className="hero-buttons">
              <a href="mailto:contact@association-flamingo.org" className="btn-primary-pink">
                Envoyer un mail →
              </a>
              <a href="#actions" className="btn-secondary-outline">
                Découvrir nos actions
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src={photoHero}
              alt="Jeunes filles formées au numérique à Antsirabe"
              className="hero-image"
            />
          </div>

        </div>
      </section>


    </div>
  );
}
