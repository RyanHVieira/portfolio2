import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import type { ProjectFunction } from "../data/projects";
import { coplaceFunctions } from "../data/projects";
import { useTranslation, useTranslationObject } from "../i18n/useTranslation";
import "../styles/ProjectDetail.css";

const defaultProjectFunctions: Record<string, ProjectFunction[]> = {
  coplace: coplaceFunctions,
};

interface FunctionCardsProps {
  slug: string;
}

export default function FunctionCards({ slug }: FunctionCardsProps) {
  const t = useTranslation();
  const tObject = useTranslationObject();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const localizedFunctionsRaw = tObject(`projects.${slug}.functions`);
  const functions: ProjectFunction[] =
    Array.isArray(localizedFunctionsRaw) && localizedFunctionsRaw.length > 0
      ? localizedFunctionsRaw
      : defaultProjectFunctions[slug] || [];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedImageIndex]);

  // Close modal on escape key, navigate with left/right arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowRight" && selectedImageIndex !== null) {
        setSelectedImageIndex((current) =>
          current !== null && current < functions.length - 1 ? current + 1 : current
        );
      } else if (e.key === "ArrowLeft" && selectedImageIndex !== null) {
        setSelectedImageIndex((current) =>
          current !== null && current > 0 ? current - 1 : current
        );
      }
    };

    if (selectedImageIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, functions.length]);

  if (functions.length === 0) {
    return (
      <p style={{
        textAlign: 'center',
        color: '#888',
        fontStyle: 'italic',
        marginTop: '2rem'
      }}>
        {t('projectDetail.noFunctions') !== 'projectDetail.noFunctions'
          ? t('projectDetail.noFunctions')
          : 'Nenhuma funcionalidade disponível para este projeto.'}
      </p>
    );
  }

  const selectedFunc = selectedImageIndex !== null ? functions[selectedImageIndex] : null;

  const modalNode = selectedFunc && selectedImageIndex !== null ? (
    <div className="image-modal-overlay" onClick={() => setSelectedImageIndex(null)}>
      <div className="image-modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-counter">
              0{selectedImageIndex + 1} / 0{functions.length}
            </span>
            <h3 className="modal-title">{selectedFunc.title}</h3>
          </div>
          <button
            className="modal-close-btn"
            onClick={() => setSelectedImageIndex(null)}
            aria-label={t('projectDetail.closeModal') !== 'projectDetail.closeModal'
              ? t('projectDetail.closeModal')
              : 'Fechar'}
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <button
            className="modal-nav-btn modal-nav-prev"
            onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}
            disabled={selectedImageIndex === 0}
            aria-label="Anterior"
          >
            ◀
          </button>

          <div className="modal-image-wrapper">
            <img
              src={selectedFunc.image}
              alt={selectedFunc.title}
              className="modal-image-preview"
            />
          </div>

          <button
            className="modal-nav-btn modal-nav-next"
            onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}
            disabled={selectedImageIndex === functions.length - 1}
            aria-label="Próximo"
          >
            ▶
          </button>
        </div>

        <div className="modal-footer">
          <p className="modal-description">{selectedFunc.description}</p>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="function-cards-container">
        {functions.map((func, index) => (
          <div key={func.id ?? index} className="function-card-item">
            <div className="function-card-content">
              <div className="function-card-header">
                <span className="function-card-badge">0{index + 1}</span>
                <h3 className="function-card-title">{func.title}</h3>
              </div>
              <p className="function-card-desc">{func.description}</p>
            </div>

            <div
              className="function-card-image-box"
              onClick={() => setSelectedImageIndex(index)}
              title={t('projectDetail.viewScreenshot') !== 'projectDetail.viewScreenshot'
                ? t('projectDetail.viewScreenshot')
                : 'Clique para ampliar'}
            >
              <img
                src={func.image}
                alt={func.title}
                className="function-card-img"
                loading="lazy"
              />
              <span className="function-card-zoom-hint">🔍 Expandir</span>
            </div>
          </div>
        ))}
      </div>

      {typeof document !== "undefined" && modalNode
        ? createPortal(modalNode, document.body)
        : modalNode}
    </>
  );
}
