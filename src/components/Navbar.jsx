import { Mail } from "lucide-react";
import logoIcone from "../assets/images/logos/flamingo-icone-bicolore.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logoIcone} alt="Association Flamingo" />
        <span className="logo-name">
          <span className="asso">Association</span>{" "}
          <span className="flamingo">Flamingo</span>
        </span>
        <ul>
          <li><a href="#A_propos">À propos</a></li>
          <li><a href="#Nos_actions">Nos actions</a></li>
          <li><a href="#Codher-bus">CodHer-Bus</a></li>
          <li><a href="#Galerie">Galerie</a></li>
          <li><a href="#Chiffres">Valeurs</a></li>
          <li><a href="#Contact">Contacts</a></li>
        </ul>

        <a href="#Contact" className="btn-ecrire">
          <Mail size={18} style={{ marginRight: "8px" }} />
          Nous écrire
        </a>
      </div>
    </nav>
  );
}
