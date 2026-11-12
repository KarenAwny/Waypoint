import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { paths } from '../data/pathsData';

export default function CareerPaths({ onSelectPath }) {
  const { isArabic, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { key: 'all', label: t.filterAll },
    { key: 'development', label: t.filterDev },
    { key: 'data', label: t.filterData },
    { key: 'security', label: t.filterSecurity },
    { key: 'design', label: t.filterDesign }
  ];

  const pathsList = Object.values(paths);

  const filteredPaths = activeFilter === 'all'
    ? pathsList
    : pathsList.filter(path => path.categoryFilter === activeFilter);

  const formattedCount = `${String(filteredPaths.length).padStart(2, '0')} ${t.pathsCount}`;

  return (
    <section className="section paths-section container" id="paths">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>{t.pathsEyebrow}</span>
          </div>
          <h2 dangerouslySetInnerHTML={{ __html: t.pathsTitle }} />
        </div>
        <p>{t.pathsDesc}</p>
      </div>

      <div className="path-toolbar">
        <div className="filter-list" role="group" aria-label="Filter career paths">
          {filterOptions.map(option => (
            <button
              key={option.key}
              className={`filter-chip ${activeFilter === option.key ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveFilter(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <span className="results-count" id="resultsCount">
          {formattedCount}
        </span>
      </div>

      <div className="paths-grid" id="pathsGrid">
        {filteredPaths.map(path => {
          const title = isArabic ? path.arTitle : path.title;
          const desc = isArabic ? path.shortDescAr : path.shortDescEn;
          const skills = isArabic ? path.arSkills.slice(0, 3) : path.skills.slice(0, 3);

          return (
            <article
              key={path.id}
              className="path-card"
              data-category={path.categoryFilter}
              data-path={path.id}
            >
              <div className="path-card-top">
                <span className={`path-icon ${path.iconClass}`}>{path.symbol}</span>
                <span className="path-number">PATH / {path.number}</span>
              </div>
              <div className="path-tags">
                {path.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="path-skills">
                {skills.map((skill, idx) => (
                  <span key={idx}>{skill}</span>
                ))}
              </div>
              <button
                className="path-link"
                type="button"
                onClick={() => onSelectPath(path.id)}
              >
                {t.explorePath} <span>↗</span>
              </button>
            </article>
          );
        })}
      </div>

      {filteredPaths.length === 0 && (
        <p className="no-results" id="noResults">
          {t.noPaths}
        </p>
      )}
    </section>
  );
}

