import React, { useState } from 'react';
import { AppStage } from './types';
import { StageIntro } from './components/StageIntro';
import { StageTimeline } from './components/StageTimeline';

import { StageQuestion } from './components/StageQuestion';
import { StageSuccess } from './components/StageSuccess';

function App() {
  const [stage, setStage] = useState<AppStage>(AppStage.INTRO);

  const renderStage = () => {
    switch (stage) {
      case AppStage.INTRO:
        return <StageIntro onNext={() => setStage(AppStage.TIMELINE)} />;
      case AppStage.TIMELINE:
        return <StageTimeline onNext={() => setStage(AppStage.THE_QUESTION)} />;

      case AppStage.THE_QUESTION:
        return <StageQuestion onYes={() => setStage(AppStage.SUCCESS)} />;
      case AppStage.SUCCESS:
        return <StageSuccess />;
      default:
        return <StageIntro onNext={() => setStage(AppStage.TIMELINE)} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-rose-50 min-h-screen">
      {renderStage()}
    </div>
  );
}

export default App;