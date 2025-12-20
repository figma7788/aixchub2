import React, { useState } from 'react';
import { Toaster } from 'sonner@2.0.3';
import { Layout } from './components/Layout';
import { WhitelistCopy } from './components/WhitelistCopy';
import { PredictionMarket } from './components/PredictionMarket';
import { TeamRanking } from './components/TeamRanking';
import { Profile } from './components/Profile';
import { Tasks } from './components/Tasks';
import { Leaderboard } from './components/Leaderboard';
import { Settings } from './components/Settings';
import { Playground } from './components/Playground';

import { AMAPoster } from './components/AMAPoster';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'ama-poster':
        return <AMAPoster />;
      case 'home':
        return <WhitelistCopy />;
      case 'prediction-market':
        return <PredictionMarket />;
      case 'profile':
        return <Profile />;
      case 'personal-ranking':
        return <Leaderboard />;
      case 'tasks':
        return <Tasks />;
      case 'team-ranking':
        return <TeamRanking />;
      case 'playground':
        return <Playground />;
      case 'settings':
        return <Settings />;
      default:
        return <WhitelistCopy />;
    }
  };

  return (
    <>
      <Layout currentView={currentView} setCurrentView={setCurrentView}>
        {renderView()}
      </Layout>
      <Toaster position="bottom-right" theme="dark" closeButton richColors />
    </>
  );
}
