import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onOpenPolicy }) {
  const { isArabic, t } = useLanguage();

  const handlePolicyClick = (e, policyKey) => {
    e.preventDefault();
    onOpenPolicy(policyKey);
  };

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a className="brand footer-brand" href="#home">
              <img src="/logo-mark.png" alt="Waypoint" className="brand-logo-img" />
              <span>
                <span className="brand-way">Way</span>point<span className="brand-period">.</span>
              </span>
            </a>
            <p>{t.footerDesc}</p>
            <span className="footer-location">
              <span className="announcement-dot"></span>
              <span>{t.footerBadge}</span>
            </span>
          </div>

          <div className="footer-links-column">
            <h4>{t.footerColExplore}</h4>
            <a href="#paths">{t.navPaths}</a>
            <a href="#assessment">{isArabic ? "اختبار المجال" : "Career quiz"}</a>
            <a href="#how-it-works">{t.navHow}</a>
          </div>

          <div className="footer-links-column">
            <h4>{t.footerColInfo}</h4>
            <a href="#our-story" onClick={(e) => handlePolicyClick(e, 'story')}>
              {isArabic ? "قصتنا" : "Our Story"}
            </a>
            <a href="#policies" onClick={(e) => handlePolicyClick(e, 'policies')}>
              {isArabic ? "السياسات" : "Policies"}
            </a>
            <a href="#contact" onClick={(e) => handlePolicyClick(e, 'contact')}>
              {isArabic ? "تواصل معانا" : "Contact Us"}
            </a>
          </div>

          <div className="footer-links-column">
            <h4>{t.footerColMore}</h4>
            <a href="#allergens" onClick={(e) => handlePolicyClick(e, 'allergens')}>
              {isArabic ? "معلومات الحساسية" : "Allergens"}
            </a>
            <a href="#locations" onClick={(e) => handlePolicyClick(e, 'locations')}>
              {isArabic ? "أماكننا" : "Our Locations"}
            </a>
            <a href="#team" onClick={(e) => handlePolicyClick(e, 'team')}>
              {isArabic ? "انضم للفريق" : "Join the Team"}
            </a>
          </div>
        </div>

        <div className="footer-social-row">
          <span>{t.footerConnected}</span>
          <div className="social-links">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              facebook ↗
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              twitter ↗
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              instagram ↗
            </a>
            <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
              tiktok ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>©2026 DD IP Holder LLC.</span>
          <a href="#home" className="back-to-top" onClick={handleBackToTop}>
            {t.footerBackToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}

