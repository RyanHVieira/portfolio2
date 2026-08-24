import { Link, useParams } from 'react-router-dom'
import Panel from "../components/Panel"
import FunctionCards from "../components/FunctionCards"
import "../styles/ProjectDetail.css"

export default function ProjectDetail() {
  const { slug } = useParams()

  // Mock projects data - in a real app, this would be imported or fetched
  const mockProjects = [
    {
      title: "CoPlace",
      description: "Uma plataforma desenvolvida para conectar pessoas e projetos.",
      slug: "coplace",
    },
    {
      title: "Pixel Canvas",
      description: "Uma plataforma colaborativa de pixel art.",
      slug: "pixel-canvas",
    },
    {
      title: "Outro Projeto",
      description: "Descrição do meu projeto.",
      slug: "outro-projeto",
    },
    {
      title: "Outro Projeto2",
      description: "Descrição do meu projeto.",
      slug: "outro-projeto2",
    },
    {
      title: "Outro Projeto3",
      description: "Descrição do meu projeto.",
      slug: "outro-projeto3",
    }
  ];

  const project = mockProjects.find(p => p.slug === slug);

  if (!project) {
    return (
      <main style={{ padding: '2rem', color: '#fff', textAlign: 'center' }}>
        <Link to="/" style={{ color: '#8be9fd', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
          ← Voltar
        </Link>
        <h1>Projeto não encontrado</h1>
        <p>O projeto solicitado não existe.</p>
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
          <span>←</span> Voltar
        </Link>
      </div>

      <section>
        <Panel id={project.slug} className={project.slug} title={project.title} category={project.slug}>
          <h1 style={{ marginTop: '1rem', textAlign: 'center' }}>{project.title}</h1>
          <p style={{
            textAlign: 'center',
            color: '#ccc',
            maxWidth: '600px',
            margin: '1rem auto',
            lineHeight: '1.6'
          }}>
            {project.description}
          </p>

          <FunctionCards slug={slug!} />
        </Panel>
      </section>
    </main>
  )
}