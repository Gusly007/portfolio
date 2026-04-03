import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

const projects = [
  {
    name: "EcoTrack",
    stack: "Node.js • Express • Docker • WebSockets",
    description:
      "Plateforme de gestion des dechets avec suivi en temps reel et tableau de bord de performances.",
    githubLink: "https://github.com/Gusly007/ecotrack-sjma",
  },
  {
    name: "Task Manager API",
    stack: "Node.js • JWT • Swagger • Docker",
    description:
      "API REST securisee pour gestion de taches, authentification et documentation technique complete.",
    githubLink: "https://github.com/gusly007/task-manager-api",
  },
  {
    name: "Logic Games",
    stack: "React • TypeScript • PHP • MySQL",
    description:
      "Plateforme educative de jeux interactifs orientee logique et progression utilisateur.",
    githubLink: "https://github.com/gusly007/jeux_logique_website",
  },
];

export function Projects() {
  return (
    <section id="projets" className="projects page-section reveal delay-1">
      <h2 className="section-heading">Projets Selectionnes</h2>
      <p className="section-lead">
        Quelques realisations qui montrent ma capacite a concevoir une solution,
        livrer le code, documenter et deployer.
      </p>
      <div className="cards-container">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}