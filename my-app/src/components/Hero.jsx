import photo from "../assets/ik.jpeg";
import "./Hero.css";

export function Hero() {
    return (
        <section id="accueil" className="hero page-section">
            <div className="hero-media reveal">
                <img
                    src={photo}
                    alt="Portrait de Jean Gusly Hyppolite"
                    className="photo-profil"
                />
            </div>

            <div className="hero-content reveal delay-1">
                <p className="hero-kicker">Developpeur Full-Stack</p>
                <h1>Jean Gusly Hyppolite</h1>
                <p className="hero-lead">
                    Je construis des applications web robustes avec React, Node.js et des
                    APIs modernes. Je cherche une alternance pour contribuer rapidement a
                    une equipe produit ambitieuse.
                </p>

                <ul className="hero-badges" aria-label="Technologies principales">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>Docker</li>
                </ul>

                <div className="hero-cta">
                    <a href="#projets">Voir mes projets</a>
                    <a href="#contact">Me contacter</a>
                </div>
            </div>
        </section>
    );
}