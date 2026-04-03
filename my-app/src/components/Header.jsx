import "./Header.css";
export function Header() {
    const completeName = "Jean Gusly Hyppolite";

    return (
        <header className="header">
            <a className="brand" href="#accueil">
                {completeName}
            </a>

            <nav className="nav" aria-label="Navigation principale">
                <a href="#a-propos">A propos</a>
                <a href="#projets">Projets</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="header-actions">
                <a href="https://github.com/Gusly007" target="_blank" rel="noreferrer">
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/jean-gusly-hyppolite/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
            </div>
        </header>
    );
}