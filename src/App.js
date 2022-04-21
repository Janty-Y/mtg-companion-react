import React, { Fragment } from 'react';
import PlayerState from './context/PlayerState';
import Header from './components/Header';
import LifeTracker from './components/LifeTracker';
import PlayerInfo from './components/PlayerInfo';
import Poison from './components/Poison';
import LifeCalculator from './components/LifeCalculator';
import Timer from './components/Timer';
import TimeStopper from './components/TimeStopper';
import Results from './components/Results';

function App() {
  return (
    <div className='container-fluid main '>
      <PlayerState>
        <Header />
        <PlayerInfo />
        <LifeTracker />
        <Poison />
        <LifeCalculator />
        <div className='row bottom'>
          <Timer />
          <Results />
        </div>
        <TimeStopper />
      </PlayerState>
    </div>
  );
}

export default App;
