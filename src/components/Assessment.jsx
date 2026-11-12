import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { quizQuestions } from '../data/quizQuestions';
import { paths } from '../data/pathsData';

export default function Assessment({ onExploreRecommended }) {
  const { isArabic, t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [hasError, setHasError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [recommendedKey, setRecommendedKey] = useState('frontend');

  const totalQuestions = quizQuestions.length;
  const questionNumber = currentQuestion + 1;
  const percent = Math.round((questionNumber / totalQuestions) * 100);

  const currentQ = quizQuestions[currentQuestion];

  const handleOptionSelect = (value) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
    setHasError(false);
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      setHasError(true);
      return;
    }
    setHasError(false);
    setCurrentQuestion(prev => Math.min(prev + 1, totalQuestions - 1));
  };

  const handleBack = () => {
    setHasError(false);
    setCurrentQuestion(prev => Math.max(prev - 1, 0));
  };

  const calculateRecommendation = () => {
    const scores = {
      frontend: 0,
      backend: 0,
      data: 0,
      cybersecurity: 0,
      uiux: 0,
      mobile: 0
    };

    quizQuestions.forEach((_, index) => {
      const ans = answers[index];
      if (ans && Object.prototype.hasOwnProperty.call(scores, ans)) {
        scores[ans] += 1;
      }
    });

    const order = Object.keys(scores);
    return order.reduce((best, key) => {
      return scores[key] > scores[best] ? key : best;
    }, order[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any question is unanswered
    for (let i = 0; i < totalQuestions; i++) {
      if (!answers[i]) {
        setCurrentQuestion(i);
        setHasError(true);
        return;
      }
    }

    const recommendation = calculateRecommendation();
    setRecommendedKey(recommendation);
    setShowResult(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setHasError(false);
    setShowResult(false);
    const element = document.getElementById('assessment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const recommendedPath = paths[recommendedKey] || paths.frontend;
  const recommendedTitle = isArabic ? recommendedPath.arTitle : recommendedPath.title;
  const recommendedDesc = isArabic ? recommendedPath.arDescription : recommendedPath.description;
  const recommendedRoadmap = (isArabic ? recommendedPath.arRoadmap : recommendedPath.roadmap).slice(0, 3);

  return (
    <section className="assessment-section" id="assessment">
      <div className="container assessment-layout">
        <div className="assessment-intro">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>{t.quizEyebrow}</span>
          </div>
          <h2 dangerouslySetInnerHTML={{ __html: t.quizTitle }} />
          <p>{t.quizDesc}</p>
          <div className="assessment-note">
            <span>✳</span>
            <span>{t.quizNote}</span>
          </div>
          <div className="assessment-decoration">
            <span>01</span>
            <span>—</span>
            <span>05</span>
          </div>
        </div>

        {!showResult ? (
          <div className="quiz-panel" id="quizPanel">
            <div className="quiz-topline">
              <span id="questionCounter">
                {t.question} {String(questionNumber).padStart(2, '0')} / {String(totalQuestions).padStart(2, '0')}
              </span>
              <span id="progressPercent">{percent}%</span>
            </div>

            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${percent}%` }}></div>
            </div>

            <form id="careerQuiz" onSubmit={handleSubmit}>
              <div className="quiz-question active">
                <h3>{isArabic ? currentQ.titleAr : currentQ.titleEn}</h3>
                <p>{isArabic ? currentQ.subtitleAr : currentQ.subtitleEn}</p>

                {currentQ.options.map((option, idx) => {
                  const isChecked = answers[currentQuestion] === option.value;
                  return (
                    <label key={idx} className="quiz-option">
                      <input
                        type="radio"
                        name={`q${currentQuestion}`}
                        value={option.value}
                        checked={isChecked}
                        onChange={() => handleOptionSelect(option.value)}
                      />
                      <span className="option-symbol">{option.symbol}</span>
                      <span>{isArabic ? option.labelAr : option.labelEn}</span>
                      <span className="option-check"></span>
                    </label>
                  );
                })}
              </div>

              {hasError && (
                <div className="quiz-error" role="alert">
                  {t.missingAnswer}
                </div>
              )}

              <div className="quiz-controls">
                <button
                  className="button button-quiet"
                  type="button"
                  id="quizBack"
                  disabled={currentQuestion === 0}
                  onClick={handleBack}
                >
                  <span>←</span> <span>{t.quizBack}</span>
                </button>

                {currentQuestion < totalQuestions - 1 ? (
                  <button
                    className="button button-primary"
                    type="button"
                    id="quizNext"
                    onClick={handleNext}
                  >
                    <span>{t.quizNext}</span> <span>→</span>
                  </button>
                ) : (
                  <button
                    className="button button-primary"
                    type="submit"
                    id="quizSubmit"
                  >
                    <span>{t.quizSubmit}</span> <span>↗</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          <div className="quiz-result" id="quizResult" aria-live="polite">
            <div className="result-symbol" id="resultSymbol">
              {recommendedPath.symbol}
            </div>
            <span className="result-eyebrow">{t.quizFinished}</span>
            <h3 id="resultTitle">{recommendedTitle}</h3>
            <p id="resultDescription">{recommendedDesc}</p>

            <div className="result-roadmap">
              <span>{t.resultRoadmap}</span>
              <ol id="resultSteps">
                {recommendedRoadmap.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>

            <p className="result-disclaimer">{t.resultDisclaimer}</p>

            <div className="result-actions">
              <button
                className="button button-primary"
                id="resultExplore"
                type="button"
                onClick={() => onExploreRecommended(recommendedKey)}
              >
                {t.resultButton} ↗
              </button>
              <button
                className="button button-quiet"
                id="quizRestart"
                type="button"
                onClick={handleRestart}
              >
                {t.quizRestart}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

