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

export const projects: Project[] = [
  {
    title: "CoPlace",
    description: "Uma plataforma desenvolvida para conectar pessoas e projetos.",
    image: "/projects/image1.png",
    slug: "coplace",
  },
  {
    title: "Pixel Canvas",
    description: "Uma plataforma colaborativa de pixel art.",
    image: "/projects/image2.png",
    slug: "pixel-canvas",
  },
  {
    title: "Outro Projeto",
    description: "Descrição do meu projeto.",
    image: "/projects/image3.png",
    slug: "outro-projeto",
  },
  {
    title: "Outro Projeto2",
    description: "Descrição do meu projeto.",
    image: "/projects/image1.png",
    slug: "outro-projeto2",
  },
  {
    title: "Outro Projeto3",
    description: "Descrição do meu projeto.",
    image: "/projects/image2.png",
    slug: "outro-projeto3",
  },
];