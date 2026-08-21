import "../styles/Skills.css";
import Panel from "./Panel"

export default function Skills() {
  return (
    <Panel
              id="projects"
              className="project-panel"
              title="My Skills"
              category="Skills"
            >
      <h2 className="eyebrow">Skills</h2>
      <h2>My Skills</h2>
      <p className="section-sub">Aqui umas ferramentas que já utilizei em meus projetos ou estou em processo de aprendizado.</p>
      <div className="skill-group">
        <h4>Linguagens</h4>
        <div className="skill-grid">
          <span className="skill-pill">
            <span className="sq" style={{background: "#f7df1e", color: "#1a1200"}}>JS</span>JavaScript
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#007396", color: "#fff"}}>J</span>Java
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#e34c26", color: "#fff"}}>H</span>HTML
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#563d7c", color: "#fff"}}>C</span>CSS
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#3776ab", color: "#fff"}}>Py</span>Python
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#000080", color: "#fff"}}>Lu</span>TypeScript
          </span>
        </div>
      </div>
      <div className="skill-group">
        <h4>Frameworks & Bibliotecas</h4>
        <div className="skill-grid">
          <span className="skill-pill">
            <span className="sq" style={{background: "#61dafb", color: "#06222b"}}>R</span>React
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#68a063", color: "#fff"}}>N</span>Node.js
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#ff3e00", color: "#fff"}}>S</span>Angular
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#007396", color: "#fff"}}>S</span>Spring Boot
          </span>
        </div>
      </div>
      <div className="skill-group">
        <h4>Ferramentas</h4>
        <div className="skill-grid">
          <span className="skill-pill">
            <span className="sq" style={{background: "#f1602a", color: "#fff"}}>G</span>Git
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#007396", color: "#fff"}}>NB</span>Docker
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#2496ed", color: "#fff"}}>E</span>VS Code
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#001e36", color: "#00d4ff"}}>Ps</span>Figma
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#9999cc", color: "#fff"}}>Pr</span>Postman
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#007acc", color: "#fff"}}>VS</span>Webpack
          </span>
        </div>
      </div>
      <div className="skill-group">
        <h4>Soft-Skills</h4>
        <div className="skill-grid">
          <span className="skill-pill">
            <span className="sq" style={{background: "#f1602a", color: "#fff"}}>T</span>Teamwork
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#ff9500", color: "#fff"}}>C</span>Communication
          </span>
          <span className="skill-pill">
            <span className="sq" style={{background: "#4caf50", color: "#fff"}}>P</span>Proactivity
          </span>
        </div>
      </div>
    </Panel>
  );
}