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
import { Container } from './components/styles/Container.styled';
import { StyledBottom } from './components/styles/Bottom.styled';
import { GlobalStyles } from './components/styles/Global';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <PlayerState>
        <Header />
        <PlayerInfo />
        <LifeTracker />
        <Poison />
        <LifeCalculator />
        <StyledBottom>
          <Timer />
          <Results />
          <TimeStopper />
        </StyledBottom>
      </PlayerState>
    </Container>
  );
}

export default App;
