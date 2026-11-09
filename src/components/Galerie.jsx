import { useState, useEffect } from "react";
import photo8116 from "../assets/images/photos/img-8116.jpg";
import photo8235 from "../assets/images/photos/img-8235.jpg";
import photo8134 from "../assets/images/photos/img-8134.jpg";
import photo8088 from "../assets/images/photos/img-8088.jpg";
import photo8243 from "../assets/images/photos/img-8243.jpg";

const photos = [
  { src: photo8116, title: "Girls Can Code" },
  { src: photo8235, title: "Actions solidaires" },
  { src: photo8134, title: "Code the change" },
  { src: photo8088, title: "Atelier" },
  { src: photo8243, title: "Équipe" },
];

const GAP = 16;

function getVisible() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

export default function Galerie() {
  const [visible, setVisible] = useState(getVisible);
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const maxIndex = Math.max(photos.length - visible, 0);
  const current = Math.min(index, maxIndex);

  const prev = () => setIndex(current <= 0 ? maxIndex : current - 1);
  const next = () => setIndex(current >= maxIndex ? 0 : current + 1);

  useEffect(() => {
    const onResize = () => setVisible(getVisible());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (pause) return;
    const t = setInterval(() => {
      setIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : Math.min(i, maxIndex) + 1));
    }, 5000);
    return () => clearInterval(t);
  }, [pause, maxIndex]);

  const slideWidth = `calc((100% - ${GAP * (visible - 1)}px) / ${visible})`;

  const arrow = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    border: "none",
    background: "var(--dark)",
    color: "#ffffff",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
  };

  return (
    <div className="Galerie">
      {/* hover des flèches */}
      <style>{`.gal-btn:hover { background: var(--pink) !important; }`}</style>

      <section className="sec">
        <div className="w">
          <span className="tag">Galerie</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: "10px" }}>
            Des moments qui nous rassemblent
          </h2>
          <p style={{ fontSize: "15px", marginBottom: "28px" }}>
            Un défilé de nos ateliers, de notre équipe et des réussites de nos participantes.
          </p>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >
            <button
              className="gal-btn"
              style={{ ...arrow, left: visible === 1 ? "4px" : "-17px" }}
              onClick={prev}
              aria-label="Précédent"
            >
              ←
            </button>

            <div style={{ overflow: "hidden", borderRadius: "24px" }}>
              <div
                style={{
                  display: "flex",
                  gap: `${GAP}px`,
                  transition: "transform 0.5s ease",
                  /* CORRECTION APPORTÉE ICI : Ajout des parenthèses autour de (current - 1) */
                  transform: `translateX(calc(-${current} * (${slideWidth} + ${GAP}px)))`,
                }}
              >
                {photos.map((p) => (
                  <figure
                    key={p.title}
                    style={{
                      flex: `0 0 ${slideWidth}`,
                      position: "relative",
                      margin: 0,
                      height: visible === 1 ? "220px" : "270px",
                      borderRadius: "24px",
                      overflow: "hidden",
                      background: "linear-gradient(135deg, #ff2d78, #1c1416)",
                    }}
                  >
                    <img
                      src={p.src}
                      alt={p.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    {/* dégradé pour la lisibilité de la légende */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "80px",
                        background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                      }}
                    />
                    <figcaption
                      style={{
                        position: "absolute",
                        left: "16px",
                        bottom: "14px",
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: "14px",
                      }}
                    >
                      {p.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <button
              className="gal-btn"
              style={{ ...arrow, right: visible === 1 ? "4px" : "-17px" }}
              onClick={next}
              aria-label="Suivant"
            >
              →
            </button>
          </div>

          {/* points de navigation */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "20px" }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Position ${i + 1}`}
                style={{
                  width: i === current ? "32px" : "8px",
                  height: "8px",
                  padding: 0,
                  border: "none",
                  borderRadius: "99px",
                  cursor: "pointer",
                  background: i === current ? "var(--pink)" : "#f4b6cb",
                  transition: "width 0.3s, background 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
