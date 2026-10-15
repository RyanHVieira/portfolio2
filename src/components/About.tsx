import "../styles/About.css";
import Panel from "./Panel";
import { useTranslation } from "../i18n/useTranslation";

export default function About() {
  const t = useTranslation();

  return (
    <Panel id="About" className="hero" title={t('about.title')} category={t('about.category')}>
      <div className="hero-copy">
        <p className="hero-text">{t('about.heroText')}</p>
      </div>
      <div className="hero-badges">
        <div className="github-badge">
          <a
            href="https://github.com/RyanHVieira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('about.githubAriaLabel')}
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
              alt={t('about.githubAriaLabel')}
            />
          </a>
        </div>
        <div className="hero-badge">
          <span>{t('about.heroBadgeText')}</span>
        </div>
      </div>
    </Panel>
  );
}