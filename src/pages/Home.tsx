import About from "../components/About";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <About/>

      <section id="projects" className="projects-section">
        <div className="section-header">
          <p className="eyebrow">Projetos</p>
          <h2>Seleção de trabalhos</h2>
        </div>

        <div className="projects-list">
          <ProjectCard
            title="CoPlace"
            description="Uma plataforma desenvolvida para conectar pessoas e projetos."
            image="/projects/coplace.png"
            slug="coplace"
          />

          <ProjectCard
            title="Pixel Art"
            description="Uma plataforma colaborativa para criação de pixel art."
            image="/projects/pixel-art.png"
            slug="pixel-art"
          />
        </div>
      </section>

      <footer id="contact" className="contact-section glass-panel">
        <p className="eyebrow">Contato</p>
        <h3>Vamos criar algo com identidade e impacto.</h3>
        <a href="mailto:ryan@portfolio.dev">ryan@portfolio.dev</a>
      </footer>
    </main>
  );
}