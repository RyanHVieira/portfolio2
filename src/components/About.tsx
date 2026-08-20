import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="hero glass-panel">
      <div className="hero-copy">
        <p className="eyebrow">Portfolio</p>
        <h1>Ryan</h1>
        <p className="hero-text">
          lorem ipsum legal
        </p>
      </div>

      <div className="hero-badges">
        <div className="github-badge">
          <a href="https://github.com/RyanHVieira" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" width="53" height="53"/>
          </a>
        </div>
        <div className="hero-badge">
          <span>Desenvolvedor Full-Stack </span>
        </div>
      </div>
    </section>
  );
}