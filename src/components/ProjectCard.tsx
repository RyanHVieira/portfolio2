import { useNavigate } from "react-router-dom";
import "../styles/ProjectCard.css";
import { useTranslation } from "../i18n/useTranslation";

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
  const t = useTranslation();

  return (
    <article className="project-card">
      <div className="project-card-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <button onClick={() => navigate(`/projects/${slug}`)}>
          {t('projectCard.detailsButton')}
        </button>
      </div>

      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
    </article>
  );
}