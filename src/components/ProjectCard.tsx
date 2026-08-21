import { useNavigate } from "react-router-dom";
import "../styles/ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  slug,
}: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <article className="project-card">
      <div className="project-card-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <button onClick={() => navigate(`/projects/${slug}`)}>
          Project Details
        </button>
      </div>

      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
    </article>
  );
}