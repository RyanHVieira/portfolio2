import "../styles/Skills.css";
import Panel from "./Panel";
import { useTranslation } from "../i18n/useTranslation";

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
  groups?: SkillGroup[];
  sectionSub?: string;
}

export default function Skills({ groups }: SkillsProps) {
  const t = useTranslation();

  const safeGroups = Array.isArray(groups) ? groups : [];

  return (
    <Panel id="Skills" className="skills-card" title={t('skills.title')} category={t('skills.category')}>
      {safeGroups.map((group, groupIndex) => {
        if (!group || typeof group !== 'object') {
          return null;
        }
        return (
          <div key={`skill-group-${groupIndex}`} className="skill-group">
            <h4>{group.title ?? ''}</h4>
            <div className="skill-grid">
              {Array.isArray(group.skills) ? group.skills.map((skill, skillIndex) => {
                if (!skill || typeof skill !== 'object') {
                  return null;
                }
                return (
                  <span key={`skill-${groupIndex}-${skillIndex}`} className="skill-pill">
                    <span className="sq" style={{ background: skill.bgColor ?? '#000000', color: skill.textColor ?? '#ffffff' }}>
                      {skill.badge ?? ''}
                    </span>
                    {skill.label ?? ''}
                  </span>
                );
              }) : []}
            </div>
          </div>
        );
      })}
    </Panel>
  );
}