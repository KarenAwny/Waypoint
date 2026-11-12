import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ClosingCta() {
  const { t } = useLanguage();

  return (
    <section className="closing-section container">
      <div className="closing-card">
        <div className="closing-orbit closing-orbit-one"></div>
        <div className="closing-orbit closing-orbit-two"></div>
        <div className="closing-content">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>{t.closingEyebrow}</span>
          </div>
          <h2 dangerouslySetInnerHTML={{ __html: t.closingTitle }} />
          <p>{t.closingDesc}</p>
          <a className="button button-primary" href="#assessment">
            {t.closingCta} <span>↗</span>
          </a>
        </div>
        <div className="closing-mark">
          <img src="/logo-mark.png" alt="Waypoint Mark" className="closing-logo-img" />
        </div>
      </div>
    </section>
  );
}

