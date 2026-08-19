import { Link, useParams } from 'react-router-dom'

export default function ProjectDetail() {
  const { slug } = useParams()

  return (
    <main style={{ padding: '2rem', color: '#fff' }}>
      <Link to="/" style={{ color: '#8be9fd', textDecoration: 'none' }}>
        ← Voltar
      </Link>

      <h1 style={{ marginTop: '1rem' }}>Projeto: {slug}</h1>
      <p>Detalhes do projeto em desenvolvimento.</p>
    </main>
  )
}
