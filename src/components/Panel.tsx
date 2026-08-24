import "../styles/Panel.css";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  category?: string;
}

export default function Panel({ children, className = "", id, title, category }: PanelProps) {
  return (
    <section id={id} className={`panel ${className}`}>
      {(category || title) && (
        <header className="panel-header">
          {category && <h2 className="eyebrow">{category}</h2>}
          {title && <h1 className="panel-title">{title}</h1>}
        </header>
      )}
      {children}
    </section>
  );
}