import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function StatsStrip() {
  const { t } = useLanguage();

  return (
    <section className="stats-strip">
      <div className="container stats-grid">
        <div className="stat-item">
          <span className="stat-number">01</span>
          <span>{t.stat1}</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">02</span>
          <span>{t.stat2}</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">03</span>
          <span>{t.stat3}</span>
        </div>
      </div>
    </section>
  );
}

