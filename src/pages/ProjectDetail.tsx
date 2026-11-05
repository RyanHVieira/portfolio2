import { Link, useParams } from 'react-router-dom';
import Panel from "../components/Panel";
import FunctionCards from "../components/FunctionCards";
import "../styles/ProjectDetail.css";
import { useTranslation, useLanguage } from "../i18n/useTranslation";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const t = useTranslation();
  const { language, setLanguage } = useLanguage();

  const staticProject = projects.find((p) => p.slug === slug);

  // Get project data from translations with fallback to static project data
  const rawTitle = t(`projects.${slug}.title`);
  const rawDesc = t(`projects.${slug}.description`);

  const hasTranslation = rawTitle !== `projects.${slug}.title` && rawDesc !== `projects.${slug}.description`;
  const projectTitle = hasTranslation ? rawTitle : staticProject?.title;
  const projectDescription = hasTranslation ? rawDesc : staticProject?.description;

  const projectExists = Boolean(projectTitle && projectDescription);

  if (!projectExists) {
    return (
      <main style={{ padding: '2rem', color: '#fff', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Link to="/" style={{ color: '#8be9fd', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
          {t('projectDetail.backLink')}
        </Link>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{t('projectDetail.notFoundTitle')}</h1>
        <p style={{ color: '#888' }}>{t('projectDetail.notFoundDescription')}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem', color: '#fff', minHeight: '100vh', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <Link
          to="/"
          style={{
            color: '#8be9fd',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
            padding: '0.5rem 1rem',
            border: '1px solid rgba(139, 233, 253, 0.4)',
            borderRadius: '6px',
            background: 'rgba(139, 233, 253, 0.05)',
            transition: 'all 0.3s ease',
          }}
        >
          <span>←</span> {t('projectDetail.backLink')}
        </Link>

        <button
          onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0.45rem 0.85rem',
            color: '#fff',
            fontSize: '0.9rem',
            transition: 'all 0.3s ease',
          }}
          aria-label="Alternar idioma / Toggle language"
        >
          {language === 'en' ? (
            <img src="https://flagcdn.io/flags/4x3/us.svg" alt="USA" width={22} height={22} style={{ borderRadius: '3px' }} />
          ) : (
            <img src="https://flagcdn.io/flags/4x3/br.svg" alt="Brasil" width={22} height={22} style={{ borderRadius: '3px' }} />
          )}
          <span style={{ fontWeight: 600 }}>{language.toUpperCase()}</span>
        </button>
      </div>

      <section>
        <Panel id={slug} className={slug} title={projectTitle ?? ''} category={t('navbar.projects') || 'Projetos'}>
          <h1 style={{ marginTop: '1rem', textAlign: 'center', fontSize: '2.5rem', fontWeight: 800 }}>{projectTitle}</h1>
          <p
            style={{
              textAlign: 'center',
              color: '#ccc',
              maxWidth: '750px',
              margin: '1.25rem auto 2.5rem auto',
              lineHeight: '1.7',
              fontSize: '1.05rem',
            }}
          >
            {projectDescription}
          </p>

          <FunctionCards slug={slug!} />
        </Panel>
      </section>
    </main>
  );
}
