import { type ReactNode } from "react";
import "../styles/Experience.css";
import Panel from "./Panel";
import { useTranslation } from "../i18n/useTranslation";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: ReactNode;
}

interface ExperienceColumn {
  title: string;
  items: ExperienceItem[];
}

interface ExperienceProps {
  columns: ExperienceColumn[];
}

export default function Experience({ columns }: ExperienceProps) {
  const t = useTranslation();

  return (
    <Panel id="experience" className="experience" title={t('experience.title')} category={t('experience.category')}>
      <div className="exp-columns">
        {columns.map((column, colIndex) => (
          <div key={`exp-column-${colIndex}`} className="exp-column">
            <h3 className="exp-column-title">{column.title}</h3>

            {column.items.map((item, itemIndex) => (
              <div key={`exp-item-${colIndex}-${itemIndex}`} className="exp-item">
                <div className="exp-period">{item.period}</div>
                <div>
                  <div className="exp-role">{item.role}</div>
                  <div className="exp-company">{item.company}</div>
                  {typeof item.description === "string" ? (
                    <p className="exp-desc"><span className="prompt">{'>'}</span>{item.description}</p>
                  ) : item.description}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Panel>
  );
}
