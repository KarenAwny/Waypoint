import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function PolicyModal({ policyKey, isOpen, onClose }) {
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

  if (!policyKey) return null;

  const policy = t.policy[policyKey] || { title: "Information", body: "" };

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
        <span className="dialog-label">WAYPOINT</span>
        <button
          type="button"
          className="dialog-close"
          onClick={onClose}
          aria-label={isArabic ? "إغلاق" : "Close"}
        >
          ×
        </button>
      </div>

      <h2>{policy.title}</h2>
      <div
        id="policyBody"
        dangerouslySetInnerHTML={{ __html: policy.body }}
      />

      <button
        type="button"
        className="button button-primary dialog-done"
        onClick={onClose}
      >
        {t.dialogClose}
      </button>
    </dialog>
  );
}

