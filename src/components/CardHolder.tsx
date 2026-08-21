import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Panel from "./Panel";
import "../styles/CardHolder.css";

interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface ProjectHolderProps {
  projects: Project[];
}

export default function ProjectHolder({ projects }: ProjectHolderProps) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActive((current) => (current + 1) % projects.length);
    }, 8000);
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [projects.length]);

  return (
    <Panel
      id="projects"
      className="project-panel"
      title="Meus projetos"
      category="Projects"
    >
      <div className="project-holder-track">
        {projects.map((project, index) => {
          const offset =
            (index - active + projects.length) % projects.length;

          let position = "hidden";

          if (offset === 0) position = "center";
          else if (offset === 1) position = "right";
          else if (offset === projects.length - 1) position = "left";

          return (
            <div
              key={project.slug}
              className={`project-holder-card ${position}`}
              onClick={() => {
                setActive(index);
                resetInterval();
              }}
            >
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>

      <div className="project-holder-dots">
        {projects.map((project, index) => (
          <button
            key={project.slug}
            className={index === active ? "active" : ""}
            onClick={() => {
              setActive(index);
              resetInterval();
            }}
            aria-label={`Mostrar ${project.title}`}
          />
        ))}
      </div>
    </Panel>
  );
}