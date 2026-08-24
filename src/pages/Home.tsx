import Navbar from "../components/Navbar";
import CardHolder from "../components/CardHolder";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import { projects } from "../data/projects";

const experienceData = [
  {
    title: "Estudo",
    items: [
      {
        period: "2022 — 2024",
        role: "Ensino Médio / Técnico em Informática",
        company: "Cedup Hermann Hering",
        description: "Elaborei projetos escolares em desenvolvimento web, lógica, banco de dados e UX/UI design.",
      },
      {
        period: "2025 — 2028",
        role: "Bacharelado em Ciência da Computação",
        company: "FURB - Fundação Universidade Regional de Blumenau",
        description: (
          <>
            <p className="exp-desc"><span className="prompt">{'>'}</span>Desenvolvimento JAVA, SQL, JavaScript, HTML e CSS.</p>
            <p className="exp-desc"><span className="prompt">{'>'}</span>Banco de Dados.</p>
            <p className="exp-desc"><span className="prompt">{'>'}</span>UI/UX Design.</p>
          </>
        ),
      },
    ],
  },
  {
    title: "Trabalho",
    items: [
      {
        period: "2025 — atual",
        role: "Suporte Técnico de TI (autônomo)",
        company: "Empresas que já ofereci suporte:",
        description: (
          <>
            <ul>
              <li>FabiDiscos</li>
              <li>SpaceKids</li>
              <li>FitaMágica Presentes</li>
            </ul>
            <p className="exp-desc"><span className="prompt">{'>'}</span>Manutenção e reparo de equipamentos de informática, rede e suporte técnico nos sistemas.</p>
          </>
        ),
      },
    ],
  },
];

const skillsData = [
  {
    title: "Linguagens",
    skills: [
      { label: "JavaScript", badge: "JS", bgColor: "#f7df1e", textColor: "#1a1200" },
      { label: "Java", badge: "J", bgColor: "#007396", textColor: "#fff" },
      { label: "HTML", badge: "H", bgColor: "#e34c26", textColor: "#fff" },
      { label: "CSS", badge: "C", bgColor: "#563d7c", textColor: "#fff" },
      { label: "Python", badge: "Py", bgColor: "#3776ab", textColor: "#fff" },
      { label: "TypeScript", badge: "TS", bgColor: "#000080", textColor: "#fff" },
    ],
  },
  {
    title: "Frameworks & Bibliotecas",
    skills: [
      { label: "React", badge: "R", bgColor: "#61dafb", textColor: "#06222b" },
      { label: "Node.js", badge: "N", bgColor: "#68a063", textColor: "#fff" },
      { label: "Angular", badge: "A", bgColor: "#ff3e00", textColor: "#fff" },
      { label: "Spring Boot", badge: "SB", bgColor: "#007396", textColor: "#fff" },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { label: "Git", badge: "G", bgColor: "#f1602a", textColor: "#fff" },
      { label: "Docker", badge: "D", bgColor: "#007396", textColor: "#fff" },
      { label: "VS Code", badge: "VS", bgColor: "#2496ed", textColor: "#fff" },
      { label: "Figma", badge: "F", bgColor: "#001e36", textColor: "#00d4ff" },
      { label: "Postman", badge: "P", bgColor: "#9999cc", textColor: "#fff" },
      { label: "Webpack", badge: "W", bgColor: "#007acc", textColor: "#fff" },
    ],
  },
  {
    title: "Soft-Skills",
    skills: [
      { label: "Teamwork", badge: "T", bgColor: "#f1602a", textColor: "#fff" },
      { label: "Communication", badge: "C", bgColor: "#ff9500", textColor: "#fff" },
      { label: "Proactivity", badge: "P", bgColor: "#4caf50", textColor: "#fff" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Experience columns={experienceData} />
      <Skills groups={skillsData} />
      <CardHolder projects={projects} />
    </>
  );
}