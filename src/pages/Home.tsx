import Navbar from "../components/Navbar";
import CardHolder from "../components/CardHolder";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

const projects = [
  {
    title: "CoPlace",
    description: "Uma plataforma desenvolvida para conectar pessoas e projetos.",
    image: "/projects/coplace.png",
    slug: "coplace",
  },
  {
    title: "Pixel Canvas",
    description: "Uma plataforma colaborativa de pixel art.",
    image: "/projects/pixelcanvas.png",
    slug: "pixel-canvas",
  },
  {
    title: "Outro Projeto",
    description: "Descrição do meu projeto.",
    image: "/projects/outro.png",
    slug: "outro-projeto",
  },
  {
    title: "Outro Projeto2",
    description: "Descrição do meu projeto.",
    image: "/projects/outro.png",
    slug: "outro-projeto2",
  },
  {
    title: "Outro Projeto3",
    description: "Descrição do meu projeto.",
    image: "/projects/outro.png",
    slug: "outro-projeto3",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <About/>
      <Experience />
      <Skills />
      <CardHolder projects={projects} />
    </>
  );
}