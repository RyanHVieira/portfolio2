import "../styles/Contact.css";
import Panel from "./Panel";

export default function Contact() {
  return (
    <Panel id="contact" className="hero" title="Contato" category="Entre em contato">
      <div className="hero-copy">
        <p className="hero-text">
          Fique à vontade para me contatar através das plataformas abaixo.
        </p>
      </div>
      <div className="hero-badges">
        <div className="contact-badge">
          <a
            href="https://www.linkedin.com/in/ryanvieira-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
        <div className="contact-badge">
          <a
            href="mailto:ryanvieiradev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg"
              alt="Gmail"
            />
          </a>
        </div>
        <div className="contact-badge">
          <a
            href="https://github.com/RyanHVieira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}