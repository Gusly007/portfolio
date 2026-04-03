import "./ProjectCard.css";

export function ProjectCard({ name, stack, description, githubLink, liveLink }) {
    if (!name || !stack || !description || !githubLink) {
        return null;
    }

    return (
        <article className="project-card">
            <h3>{name}</h3>
            <p className="project-stack">{stack}</p>
            <p className="project-description">{description}</p>
            <div className="project-links">
                <a href={githubLink} target="_blank" rel="noreferrer">
                    Source GitHub
                </a>
                {liveLink ? (
                    <a href={liveLink} target="_blank" rel="noreferrer">
                        Demo live
                    </a>
                ) : null}
            </div>
        </article>
    );
}