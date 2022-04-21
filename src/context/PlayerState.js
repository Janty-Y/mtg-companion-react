import React, { useReducer } from 'react';
import PlayerContext from './playerContext';
import playerReducer from './playerReducer';
import {
  SET_PLAYERS,
  UPDATE_POISON,
  UPDATE_LIFE,
  UPDATE_LIFE_ARRAY,
  UPDATE_CHECKS,
  RESET_GAME,
  CHECK_FOR_WINNER,
  UPDATE_TIMER,
  TOGGLE_TIMER,
  RESET_TIMER,
  LOG_SAVED,
} from './types';

const PlayerState = (props) => {
  const initialState = {
    p1: {
      playerName: 'PLAYER 1',
      deckName: 'DECK NAME',
      totalLife: 20,
      lifeHistory: 0,
      lifeArray: [],
      poisonCounters: 0,
      cannotWin: false,
      cannotLose: false,
    },
    p2: {
      playerName: 'PLAYER 2',
      deckName: 'DECK NAME',
      totalLife: 20,
      lifeHistory: 0,
      lifeArray: [],
      poisonCounters: 0,
      cannotWin: false,
      cannotLose: false,
    },
    winner: null,
    logSaved: false,
    timer: {
      start: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  };

  const [state, dispatch] = useReducer(playerReducer, initialState);

  // Set player and deck names - used in NewGameModal component
  const updateNames = (names) => {
    dispatch({ type: SET_PLAYERS, payload: names });
  };

  // Resets the game to initial state - used in NewGameModal and Reset Game components
  const resetGame = () => {
    dispatch({ type: RESET_GAME, payload: initialState });
  };

  // Update poison counters - used in Poison component
  const updatePoison = (playerPoison, poison) => {
    dispatch({ type: UPDATE_POISON, payload: { playerPoison, poison } });
  };

  // Update life totals - used in LifeCalculator component
  const updateLife = (playerLife, lifeChange) => {
    dispatch({ type: UPDATE_LIFE, payload: { playerLife, lifeChange } });
  };

  // Update life-change history - used in LifeCalculator component
  const updateLifeArray = (playerArray) => {
    dispatch({
      type: UPDATE_LIFE_ARRAY,
      payload: { playerArray },
    });
  };

  // Update checks for cannot win/cannot lose conditions - used in LifeCalculator component
  const updateChecks = (checkSelected) => {
    dispatch({ type: UPDATE_CHECKS, payload: checkSelected });
  };

  // Checks for winner - called in useEffect hook in LifeCalculator and Poison components
  const checkForWinner = () => {
    dispatch({ type: CHECK_FOR_WINNER });
  };

  // Starts or Stops the timer - used in Timer component
  const toggleTimer = () => {
    dispatch({ type: TOGGLE_TIMER });
  };

  // Updates the timer to re-render the current count - used in Timer component
  const updateTimer = () => {
    dispatch({ type: UPDATE_TIMER });
  };

  // Resets the timer to 00:00:00 - used in Timer, ResetGame, and NewGame components
  const resetTimer = () => {
    const { timer: defaultTimer } = initialState;
    dispatch({ type: RESET_TIMER, payload: defaultTimer });
  };

  // Prevents multiple saves for a single match - used in Results component
  const saveToggle = () => {
    dispatch({ type: LOG_SAVED });
  };

  return (
    <PlayerContext.Provider
      value={{
        p1: state.p1,
        p2: state.p2,
        winner: state.winner,
        timer: state.timer,
        currentLogs: state.currentLogs,
        logSaved: state.logSaved,
        updateNames,
        updatePoison,
        updateLife,
        updateLifeArray,
        updateChecks,
        resetGame,
        checkForWinner,
        toggleTimer,
        updateTimer,
        resetTimer,
        saveToggle,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
