import "../styles/About.css";
import Panel from "./Panel";

export default function About() {
  return (
   <Panel id="about" className="hero" title="Ryan" category="About">
      <div className="hero-copy">
        <p className="hero-text">
          Desenvolvedor Full-Stack apaixonado por tecnologia, desenvolvimento
          de software e criação de projetos.
        </p>
      </div>
      <div className="hero-badges">
        <div className="github-badge">
          <a href="https://github.com/RyanHVieira" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub"/>
          </a>
        </div>
        <div className="hero-badge">
          <span>Desenvolvedor Full-Stack</span>
        </div>
      </div>
    </Panel>
  );
}