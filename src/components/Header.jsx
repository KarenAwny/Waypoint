import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { isArabic, t, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot"></span>
        {t.announcement}{' '}
        <a href="#assessment">
          {t.announcementLink} <span>↗</span>
        </a>
      </div>

      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Waypoint home" onClick={closeMenu}>
            <img src="/logo-mark.png" alt="Waypoint" className="brand-logo-img" />
            <span>
              <span className="brand-way">Way</span>point<span className="brand-period">.</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            id="menuToggle"
            type="button"
            aria-label={
              isMenuOpen
                ? isArabic
                  ? "إغلاق القائمة"
                  : "Close navigation"
                : isArabic
                ? "فتح القائمة"
                : "Open navigation"
            }
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="mainNav">
            <a href="#paths" onClick={closeMenu}>
              {t.navPaths}
            </a>
            <a href="#assessment" onClick={closeMenu}>
              {t.navFind}
            </a>
            <a href="#how-it-works" onClick={closeMenu}>
              {t.navHow}
            </a>
          </div>

          <div className="nav-actions">
            <button
              className="language-toggle"
              id="languageToggle"
              type="button"
              aria-label={t.langSwitchAria}
              onClick={toggleLanguage}
            >
              {t.langSwitch}
            </button>
            <a
              className="button button-small button-primary nav-cta"
              href="#assessment"
              onClick={closeMenu}
            >
              {t.navGetStarted} <span>↗</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

