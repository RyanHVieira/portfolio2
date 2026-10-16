import { type ReactNode } from "react";
import "../styles/Experience.css";
import Panel from "./Panel";
import { useTranslation } from "../i18n/useTranslation";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: ReactNode[];
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

  // If columns is not an array, provide empty array
  const safeColumns = Array.isArray(columns) ? columns : [];

  return (
    <Panel id="experience" className="experience" title={t('experience.title')} category={t('experience.category')}>
      <div className="exp-columns">
        {safeColumns.map((column, colIndex) => (
          <div key={`exp-column-${colIndex}`} className="exp-column">
            <h3 className="exp-column-title">{column.title}</h3>
            {column.items.map((item, itemIndex) => (
              <div key={`exp-item-${colIndex}-${itemIndex}`} className="exp-item">
                <div className="exp-period">{item.period}</div>
                <div>
                  <div className="exp-role">{item.role}</div>
                  <div className="exp-company">{item.company}</div>
                  {item.description.map((desc, descIndex) => {
                    if (Array.isArray(desc)) {
                      return (
                        <ul key={descIndex} className="exp-list">
                          {desc.map((listItem, listIndex) => (
                            <li key={listIndex}>{listItem}</li>
                          ))}
                        </ul>
                      );
                    } else {
                      return (
                        <p key={descIndex} className="exp-desc"><span className="prompt">{'>'}</span>{desc}</p>
                      );
                    }
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Panel>
  );
}