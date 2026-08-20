import "../styles/Experience.css";

export default function Experience() {
  return (
    <section className="card exp-card">
      <h2 className="section-title">Experience</h2>
      <p className="section-sub">Minhas experiências até agora.</p>
      <div className="exp-columns">
        {/* Academic Column */}
        <div className="exp-column">
          <h3 className="exp-column-title">Estudo</h3>

          <div className="exp-item">
            <div className="exp-period">2022 — 2024</div>
            <div>
              <div className="exp-role">Ensino Médio / Técnico em Informática</div>
              <div className="exp-company">Cedup Hermann Hering</div>
              <p className="exp-desc"><span className="prompt">{'>'}</span>Elaborei projetos escolares em desenvolvimento web, lógica, banco de dados e UX/UI design.</p>
            </div>
          </div>

          <div className="exp-item">
            <div className="exp-period">2025 — 2028</div>
            <div>
              <div className="exp-role">Bacharelado em Ciência da Computação</div>
              <div className="exp-company">FURB - Fundação Universidade Regional de Blumenau</div>
              <p className="exp-desc"><span className="prompt">{'>'}</span>Desenvolvimento JAVA, SQL, JavaScript, HTML e CSS.</p>
              <p className="exp-desc"><span className="prompt">{'>'}</span>Banco de Dados.</p>
              <p className="exp-desc"><span className="prompt">{'>'}</span>UI/UX Design.</p>
            </div>
          </div>
        </div>

        {/* Professional Column */}
        <div className="exp-column">
          <h3 className="exp-column-title">Trabalho</h3>

          <div className="exp-item">
            <div className="exp-period">2025 — atual</div>
            <div>
              <div className="exp-role">Suporte Técnico de TI (autônomo)</div>
              <div className="exp-company">Empresas que já ofereci suporte:</div>
              <ul>
                <li>FabiDiscos</li>
                <li>SpaceKids</li>
                <li>FitaMágica Presentes</li>
              </ul>
              <br />
              <p className="exp-desc"><span className="prompt">{'>'}</span>Manutenção e reparo de equipamentos de informática, rede e suporte técnico nos sistemas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}