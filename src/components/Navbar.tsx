import { useState, useEffect } from "react";
import { useTranslation, useLanguage } from "../i18n/useTranslation";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {setScrolled(window.scrollY > 50);};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className={`nav-inner ${scrolled ? "nav-inner-scrolled" : ""}`}>
        <a href="#" className="logo">
          <span className="logo-accent">&lt;</span>Ryan<span className="logo-accent">/&gt;</span>
        </a>
        <ul className="nav-links">
          <li key="about">
            <a href="#About" className="nav-link">
              {t('navbar.about')}
            </a>
          </li>
          <li key="experience">
            <a href="#experience" className="nav-link">
              {t('navbar.experience')}
            </a>
          </li>
          <li key="skills">
            <a href="#Skills" className="nav-link">
              {t('navbar.skills')}
            </a>
          </li>
          <li key="projects">
            <a href="#projects" className="nav-link">
              {t('navbar.projects')}
            </a>
          </li>
          <li key="contact">
            <a href="#contact" className="nav-link">
              {t('navbar.contact')}
            </a>
          </li>
          <li key="language-toggle" style={{ marginLeft: 'auto' }}>
            <button
              onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
              className="nav-link"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '0'
              }}
            >
              {language === 'en' ? (
                <img src="https://flagcdn.io/flags/4x3/us.svg" alt="USA" width={32} height={32} style={{ borderRadius: '6px' }} />
              ) : (
                <img src="https://flagcdn.io/flags/4x3/br.svg" alt="Brasil" width={32} height={32} style={{ borderRadius: '6px' }} />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}