import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line"></span>
          <span>{t.heroEyebrow}</span>
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
        <p className="hero-description">{t.heroDesc}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#assessment">
            {t.heroCtaPrimary} <span>↗</span>
          </a>
          <a className="text-link" href="#paths">
            {t.heroCtaSecondary} <span>↓</span>
          </a>
        </div>
        <div className="hero-proof">
          <div className="proof-icon">
            <span>✳</span>
          </div>
          <div>
            <strong>{t.heroProofTitle}</strong>
            <span>{t.heroProofSubtitle}</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow"></div>
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>
        <div className="orbit orbit-three"></div>
        <div className="compass">
          <div className="compass-inner">
            <div className="compass-center">
              <span>W</span>
            </div>
            <span className="compass-north">N</span>
            <span className="compass-east">E</span>
            <span className="compass-south">S</span>
            <span className="compass-west">W</span>
            <div className="compass-needle"></div>
          </div>
        </div>
        <div className="floating-card floating-card-top">
          <span className="floating-icon lime-icon">✳</span>
          <div>
            <strong>{t.heroFloatingCardTopTitle}</strong>
            <span>{t.heroFloatingCardTopSubtitle}</span>
          </div>
        </div>
        <div className="floating-card floating-card-bottom">
          <span className="floating-icon violet-icon">↗</span>
          <div>
            <strong>{t.heroFloatingCardBottomTitle}</strong>
            <span>{t.heroFloatingCardBottomSubtitle}</span>
          </div>
        </div>
        <div className="visual-coordinate coordinate-one">30°02' N</div>
        <div className="visual-coordinate coordinate-two">YOUR JOURNEY / 001</div>
      </div>

      <div className="hero-bottom-note">
        <span></span>
        <span>{t.heroBottomNote}</span>
      </div>
    </section>
  );
}

