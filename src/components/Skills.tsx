import "../styles/Skills.css";
import Panel from "./Panel";

interface SkillItem {
  label: string;
  badge: string;
  bgColor: string;
  textColor: string;
}

interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

interface SkillsProps {
  groups: SkillGroup[];
  sectionSub?: string;
}

export default function Skills({ groups }: SkillsProps) {
  return (
    <Panel id="Skills" className="skills-card" title="" category="Skills">
      {groups.map((group, groupIndex) => (
        <div key={`skill-group-${groupIndex}`} className="skill-group">
          <h4>{group.title}</h4>
          <div className="skill-grid">
            {group.skills.map((skill, skillIndex) => (
              <span key={`skill-${groupIndex}-${skillIndex}`} className="skill-pill">
                <span
                  className="sq"
                  style={{ background: skill.bgColor, color: skill.textColor }}
                >
                  {skill.badge}
                </span>
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Panel>
  );
}