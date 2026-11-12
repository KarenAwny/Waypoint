import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function PathModal({ path, isOpen, onClose }) {
  const dialogRef = useRef(null);
  const { isArabic, t } = useLanguage();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener('cancel', handleCancel);
    return () => dialog.removeEventListener('cancel', handleCancel);
  }, [onClose]);

  if (!path) return null;

  const title = isArabic ? path.arTitle : path.title;
  const description = isArabic ? path.arDescription : path.description;
  const skills = isArabic ? path.arSkills : path.skills;
  const roadmap = isArabic ? path.arRoadmap : path.roadmap;
  const project = isArabic ? path.arProject : path.project;

  return (
    <dialog
      ref={dialogRef}
      className="info-dialog"
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          onClose();
        }
      }}
    >
      <div className="dialog-top">
        <span className="dialog-label">{path.category}</span>
        <button
          type="button"
          className="dialog-close"
          onClick={onClose}
          aria-label={isArabic ? "إغلاق" : "Close"}
        >
          ×
        </button>
      </div>

      <div className="dialog-symbol">{path.symbol}</div>
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="dialog-section">
        <h3>{t.dialogLearn}</h3>
        <ul>
          {skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="dialog-section">
        <h3>{t.dialogRoadmap}</h3>
        <ol>
          {roadmap.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="dialog-section">
        <h3>{t.dialogProject}</h3>
        <p>{project}</p>
      </div>

      <button
        type="button"
        className="button button-primary dialog-done"
        onClick={onClose}
      >
        {t.dialogGotIt}
      </button>
    </dialog>
  );
}

