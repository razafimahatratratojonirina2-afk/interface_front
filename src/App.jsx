import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Chiffres from "./components/Chiffres.jsx";
import APropos from "./components/APropos.jsx";
import NosActions from "./components/NosActions.jsx";
import Citation from "./components/Citation.jsx";
import CodHerBus from "./components/CodHerBus.jsx";
import Steaminist from "./components/Steaminist.jsx";
import GirlsCanCode from "./components/GirlsCanCode.jsx";
import Galerie from "./components/Galerie.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="Chiffres">
        <Chiffres />
      </div>
      <div id="A_propos">
        <APropos />
      </div>
      <div id="Nos_actions">
        <NosActions />
      </div>
      <div className="Citation">
        <Citation />
      </div>
      <div id="Codher-bus">
        <CodHerBus />
      </div>
      <div className="steam">
        <Steaminist />
      </div>
      <div className="girl">
        <GirlsCanCode />
      </div>
      <div id="Galerie">
        <Galerie />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div id="Footer">
        <Footer />
      </div>
    </>
  );
}
