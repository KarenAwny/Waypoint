import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import CareerPaths from './components/CareerPaths';
import Assessment from './components/Assessment';
import HowItWorks from './components/HowItWorks';
import ClosingCta from './components/ClosingCta';
import Footer from './components/Footer';
import PathModal from './components/Modals/PathModal';
import PolicyModal from './components/Modals/PolicyModal';
import { paths } from './data/pathsData';

export default function App() {
  const [selectedPathKey, setSelectedPathKey] = useState(null);
  const [selectedPolicyKey, setSelectedPolicyKey] = useState(null);

  const handleOpenPath = (pathKey) => {
    setSelectedPathKey(pathKey);
  };

  const handleClosePath = () => {
    setSelectedPathKey(null);
  };

  const handleOpenPolicy = (policyKey) => {
    setSelectedPolicyKey(policyKey);
  };

  const handleClosePolicy = () => {
    setSelectedPolicyKey(null);
  };

  const activePath = selectedPathKey ? paths[selectedPathKey] : null;

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <CareerPaths onSelectPath={handleOpenPath} />
        <Assessment onExploreRecommended={handleOpenPath} />
        <HowItWorks />
        <ClosingCta />
      </main>
      <Footer onOpenPolicy={handleOpenPolicy} />

      {/* Modals */}
      <PathModal
        path={activePath}
        isOpen={Boolean(selectedPathKey)}
        onClose={handleClosePath}
      />
      <PolicyModal
        policyKey={selectedPolicyKey}
        isOpen={Boolean(selectedPolicyKey)}
        onClose={handleClosePolicy}
      />
    </>
  );
}

