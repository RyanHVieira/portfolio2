import { Link, useParams } from 'react-router-dom'
import Panel from "../components/Panel"
import FunctionCards from "../components/FunctionCards"
import "../styles/ProjectDetail.css"
import { useTranslation } from "../i18n/useTranslation"

export default function ProjectDetail() {
  const { slug } = useParams()
  const t = useTranslation()

  // Get project data from translations
  const projectTitle = t(`projects.${slug}.title`)
  const projectDescription = t(`projects.${slug}.description`)

  // Check if project exists (if translation returns the key itself, treat as missing)
  const projectExists = projectTitle !== `projects.${slug}.title` && projectDescription !== `projects.${slug}.description`

  if (!projectExists) {
    return (
      <main style={{ padding: '2rem', color: '#fff', textAlign: 'center' }}>
        <Link to="/" style={{ color: '#8be9fd', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
          {t('projectDetail.backLink')}
        </Link>
        <h1>{t('projectDetail.notFoundTitle')}</h1>
        <p>{t('projectDetail.notFoundDescription')}</p>
      </main>
    )
  }

  return (
    <main style={{ padding: '2rem', color: '#fff', minHeight: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <Link to="/" style={{
          color: '#8be9fd',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '1.1rem',
          padding: '0.5rem 1rem',
          border: '1px solid #8be9fd',
          borderRadius: '4px',
          transition: 'all 0.3s ease'
        }}>
          <span>←</span> {t('projectDetail.backLink')}
        </Link>
      </div>

      <section>
        <Panel id={slug} className={slug} title={projectTitle} category={slug}>
          <h1 style={{ marginTop: '1rem', textAlign: 'center' }}>{projectTitle}</h1>
          <p style={{
            textAlign: 'center',
            color: '#ccc',
            maxWidth: '600px',
            margin: '1rem auto',
            lineHeight: '1.6'
          }}>
            {projectDescription}
          </p>

          <FunctionCards slug={slug!} />
        </Panel>
      </section>
    </main>
  )
}