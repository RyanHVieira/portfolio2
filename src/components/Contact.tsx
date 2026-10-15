import "../styles/Contact.css";
import Panel from "./Panel";
import { useTranslation } from "../i18n/useTranslation";

export default function Contact() {
  const t = useTranslation();

  return (
    <Panel id="contact" className="hero" title={t('contact.title')} category={t('contact.category')}>
      <div className="hero-copy">
        <p className="hero-text">{t('contact.heroText')}</p>
      </div>
      <div className="hero-badges">
        <div className="contact-badge">
          <a
            href="https://www.linkedin.com/in/ryanvieira-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('contact.linkedinAriaLabel')}
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
              alt={t('contact.linkedinAriaLabel')}
            />
          </a>
        </div>
        <div className="contact-badge">
          <a
            href="mailto:ryanvieiradev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('contact.gmailAriaLabel')}
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg"
              alt={t('contact.gmailAriaLabel')}
            />
          </a>
        </div>
        <div className="contact-badge">
          <a
            href="https://github.com/RyanHVieira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('contact.githubAriaLabel')}
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
              alt={t('contact.githubAriaLabel')}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}