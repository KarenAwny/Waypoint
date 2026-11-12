import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="section how-section container" id="how-it-works">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>{t.howEyebrow}</span>
          </div>
          <h2 dangerouslySetInnerHTML={{ __html: t.howTitle }} />
        </div>
        <p>{t.howDesc}</p>
      </div>
      <div className="steps-grid">
        <article className="step-card">
          <span className="step-index">{t.step1Tag}</span>
          <div className="step-visual step-visual-one">
            <span>?</span>
            <span>✳</span>
            <span>⌘</span>
          </div>
          <h3>{t.step1Title}</h3>
          <p>{t.step1Desc}</p>
        </article>

        <article className="step-card">
          <span className="step-index">{t.step2Tag}</span>
          <div className="step-visual step-visual-two">
            <span>01</span>
            <span>02</span>
            <span>03</span>
          </div>
          <h3>{t.step2Title}</h3>
          <p>{t.step2Desc}</p>
        </article>

        <article className="step-card">
          <span className="step-index">{t.step3Tag}</span>
          <div className="step-visual step-visual-three">
            <span>↗</span>
            <span>✓</span>
            <span>→</span>
          </div>
          <h3>{t.step3Title}</h3>
          <p>{t.step3Desc}</p>
        </article>
      </div>
    </section>
  );
}

