import logoComplet from "../assets/images/logos/flamingo-logo-bicolore.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo-container">

        <img src={logoComplet} alt="FLAMINGO Girls for change" className="footer-logo" />
      </div>
      <p className="footer-copyright">
        © 2026 Association Flamingo — Mahazoarivo, Antsirabe - Madagascar
      </p>
    </footer>
  );
}
