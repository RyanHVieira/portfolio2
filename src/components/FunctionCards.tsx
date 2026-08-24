import type { ProjectFunction } from "../data/projects";

// Mock function data for demonstration
// In a real app, this could come from an API or be part of the project object
const projectFunctions: Record<string, ProjectFunction[]> = {
  coplace: [
    {
      id: 1,
      title: "Conexão de Pessoas",
      description: "Conecte indivíduos com interesses semelhantes para colaborar em projetos",
      image: "/projects/image1.png"
    },
    {
      id: 2,
      title: "Gestão de Projetos",
      description: "Ferramentas completas para planejar, executar e acompanhar nossos projetos",
      image: "/projects/image2.png"
    },
    {
      id: 3,
      title: "Comunidade Ativa",
      description: "Participe de discussões, compartilhe conhecimento e cresça juntos",
      image: "/projects/image3.png"
    }
  ],
  "pixel-canvas": [
    {
      id: 1,
      title: "Canvas Colaborativo",
      description: "Desenhe simultaneamente com outros usuários em tempo real",
      image: "/projects/image1.png"
    },
    {
      id: 2,
      title: "Paleta de Cores",
      description: "Acesse uma vasta gama de cores para suas criações",
      image: "/projects/image2.png"
    },
    {
      id: 3,
      title: "Salvar e Compartilhar",
      description: "Salve suas artes e compartilhe com a comunidade",
      image: "/projects/image3.png"
    }
  ],
  "outro-projeto": [
    {
      id: 1,
      title: "Funcionalidade Principal",
      description: "Descrição da funcionalidade principal deste projeto",
      image: "/projects/image1.png"
    },
    {
      id: 2,
      title: "Interface Intuitiva",
      description: "Design pensado para facilitar o uso pelo usuário final",
      image: "/projects/image2.png"
    },
    {
      id: 3,
      title: "Performance Otimizada",
      description: "Carregamento rápido e experiência fluida em todos os dispositivos",
      image: "/projects/image3.png"
    }
  ],
  "outro-projeto2": [
    {
      id: 1,
      title: "Funcionalidade A",
      description: "Primeira funcionalidade do segundo outro projeto",
      image: "/projects/image1.png"
    },
    {
      id: 2,
      title: "Funcionalidade B",
      description: "Segunda funcionalidade com foco em usabilidade",
      image: "/projects/image2.png"
    },
    {
      id: 3,
      title: "Integração",
      description: "Integração com outras plataformas e servicios",
      image: "/projects/image3.png"
    }
  ],
  "outro-projeto3": [
    {
      id: 1,
      title: "Recurso Destacado",
      description: "O recurso que diferencia este projeto dos demais",
      image: "/projects/image1.png"
    },
    {
      id: 2,
      title: "Escalabilidade",
      description: "Arquitetura preparada para crescimento e aumento de usuários",
      image: "/projects/image2.png"
    },
    {
      id: 3,
      title: "Segurança",
      description: "Proteção de dados e privacidade como prioridade máxima",
      image: "/projects/image3.png"
    }
  ]
};

interface FunctionCardsProps {
  slug: string;
}

export default function FunctionCards({ slug }: FunctionCardsProps) {
  const functions = projectFunctions[slug as keyof typeof projectFunctions] || [];

  if (functions.length === 0) {
    return (
      <p style={{
        textAlign: 'center',
        color: '#888',
        fontStyle: 'italic',
        marginTop: '2rem'
      }}>
        Nenhuma funcionalidade disponível para este projeto.
      </p>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gap: '2rem',
      marginTop: '2rem'
    }}>
      {functions.map((func) => (
        <FunctionCard key={func.id} func={func} />
      ))}
    </div>
  );
}

interface FunctionCardProps {
  func: ProjectFunction;
}

function FunctionCard({ func }: FunctionCardProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      padding: '1.5rem',
      border: '1px solid #333',
      borderRadius: '8px',
      backgroundColor: 'rgba(255,255,255,0.05)'
    }}>
      <div style={{ flex: 1 }}>
        <h3 style={{
          margin: '0 0 0.5rem 0',
          color: '#fff',
          fontSize: '1.25rem'
        }}>
          {func.title}
        </h3>
        <p style={{
          margin: '0',
          color: '#ccc',
          lineHeight: '1.5'
        }}>
          {func.description}
        </p>
      </div>

      <div style={{
        flex: '0 0 150px',
        width: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img
          src={func.image}
          alt={func.title}
          style={{
            maxWidth: '100%',
            maxHeight: '150px',
            borderRadius: '4px',
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  );
}