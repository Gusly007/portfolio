import "./About.css";

export function About() {
  return (
    <section id="a-propos" className="about page-section reveal delay-1">
      <h2 className="section-heading">A Propos</h2>
      <p className="section-lead">
        Je suis un developpeur full-stack oriente resultat, avec une attention
        forte sur la qualite du code, la fiabilite des APIs et l'experience
        utilisateur.
      </p>

      <div className="about-grid">
        <article className="about-card">
          <h3>Ce que j'apporte</h3>
          <ul>
            <li>Conception d'APIs REST propres et documentees.</li>
            <li>Interfaces React performantes et maintenables.</li>
            <li>Culture produit: impact utilisateur avant tout.</li>
          </ul>
        </article>

        <article className="about-card">
          <h3>Stack preferee</h3>
          <ul>
            <li>Frontend: React, JavaScript/TypeScript, Vite</li>
            <li>Backend: Node.js, Express, JWT, Swagger</li>
            <li>Data & DevOps: MySQL, Docker, GitHub Actions</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
