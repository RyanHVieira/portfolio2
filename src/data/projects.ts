export interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface ProjectFunction {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const coplaceFunctions: ProjectFunction[] = [
  {
    id: 1,
    title: "Autenticação de Usuários",
    description: "Sistema seguro de login para que usuários possam acessar suas contas, gerenciar suas criações e entrar em salas de desenho com seu perfil.",
    image: "/projects/coplace/Login.png"
  },
  {
    id: 2,
    title: "Cadastro com Validação de Senha",
    description: "Formulário de cadastro intuitivo com regras de segurança em tempo real, exigindo ao menos 8 caracteres, maiúsculas, minúsculas e caracteres especiais.",
    image: "/projects/coplace/Cadastro.png"
  },
  {
    id: 3,
    title: "Lobby e Busca de Salas",
    description: "Pesquisa dinâmica de salas de canvas diretamente pela interface ou via slug na URL (ex: /canvas/bnv), integrando sessão de usuário e opção de sair.",
    image: "/projects/coplace/BuscaCanvas.png"
  },
  {
    id: 4,
    title: "Canvas Colaborativo e Paleta de Cores",
    description: "Grade de pixels interativa em tempo real com paleta de cores diversificada, permitindo múltiplos participantes criarem pixel art de forma sincronizada.",
    image: "/projects/coplace/Canva.png"
  }
];

export const projects: Project[] = [
  {
    title: "CoPlace",
    description: "Plataforma colaborativa para criação de Pixel Art em tempo real. Os usuários podem se autenticar, explorar ou criar salas personalizadas através de slugs, e desenhar juntos em um canvas interativo com paleta de cores completa.",
    image: "/projects/coplace/Canva.png",
    slug: "coplace",
  }
];
