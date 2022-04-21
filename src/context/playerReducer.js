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

export default (state, action) => {
  switch (action.type) {
    // Sets customer player and deck names
    // Used in: NewGame component
    case SET_PLAYERS:
      const { p1Name, p1DeckName, p2Name, p2DeckName } = action.payload;
      return {
        ...state,
        p1: {
          ...state.p1,
          playerName: p1Name || 'PLAYER 1',
          deckName: p1DeckName || 'DECK NAME',
        },
        p2: {
          ...state.p2,
          playerName: p2Name || 'PLAYER 2',
          deckName: p2DeckName || 'DECK NAME',
        },
      };

    // Tracks poison counter for players
    // Does not allow for negative counters
    // Used in: Poison component
    case UPDATE_POISON:
      const { playerPoison, poison } = action.payload;
      if (playerPoison === 'p1') {
        const { poisonCounters } = state.p1;
        if (poison === -1 && poisonCounters <= 0) {
          return { ...state };
        }
        return {
          ...state,
          p1: { ...state.p1, poisonCounters: poisonCounters + poison },
        };
      } else if (playerPoison === 'p2') {
        const { poisonCounters } = state.p2;
        if (poison === -1 && poisonCounters <= 0) {
          return { ...state };
        }
        return {
          ...state,
          p2: { ...state.p2, poisonCounters: poisonCounters + poison },
        };
      }

    // Updates player life to display to user
    // Also keeps track of lifeHistory - the amount of life change that spans within 2 seconds of an initial change
    // Used in: LifeCalculator
    case UPDATE_LIFE:
      const { playerLife, lifeChange } = action.payload;
      if (playerLife === 'p1') {
        const { totalLife, lifeHistory } = state.p1;
        return {
          ...state,
          p1: {
            ...state.p1,
            totalLife: totalLife + lifeChange,
            lifeHistory: lifeHistory + lifeChange,
          },
        };
      } else if (playerLife === 'p2') {
        const { totalLife, lifeHistory } = state.p2;
        return {
          ...state,
          p2: {
            ...state.p2,
            totalLife: totalLife + lifeChange,
            lifeHistory: lifeHistory + lifeChange,
          },
        };
      }

    // Adds the lifeHistory to the array and resets it to 0
    // Since this fires off every time a heart button is clicked, it needs to check if lifeHistory is 0
    // This is to prevent '0' to be added to the life array.
    // Example: Player 1 took 4 points of damage and clicked -1 four times.
    //          This will prevent -4, 0, 0, and 0 being added to the array, and just add the -4 to it.
    //Used in: LifeCalculator
    case UPDATE_LIFE_ARRAY:
      const { playerArray } = action.payload;
      if (playerArray === 'p1') {
        const { lifeArray, lifeHistory } = state.p1;
        return {
          ...state,
          p1: {
            ...state.p1,
            lifeArray:
              lifeHistory !== 0 ? [...lifeArray, lifeHistory] : [...lifeArray],
            lifeHistory: 0,
          },
        };
      } else if (playerArray === 'p2') {
        const { lifeArray, lifeHistory } = state.p2;
        return {
          ...state,
          p2: {
            ...state.p2,
            lifeArray:
              lifeHistory !== 0 ? [...lifeArray, lifeHistory] : [...lifeArray],
            lifeHistory: 0,
          },
        };
      }

    // Handles the "Cannot Win" and "Cannot Lose" states
    //Used in: LifeCalculator
    case UPDATE_CHECKS:
      if (action.payload === 'p1CannotWin') {
        const { cannotWin } = state.p1;
        return { ...state, p1: { ...state.p1, cannotWin: !cannotWin } };
      } else if (action.payload === 'p1CannotLose') {
        const { cannotLose } = state.p1;
        return { ...state, p1: { ...state.p1, cannotLose: !cannotLose } };
      } else if (action.payload === 'p2CannotWin') {
        const { cannotWin } = state.p2;
        return { ...state, p2: { ...state.p2, cannotWin: !cannotWin } };
      } else if (action.payload === 'p2CannotLose') {
        const { cannotLose } = state.p2;
        return { ...state, p2: { ...state.p2, cannotLose: !cannotLose } };
      }

    case RESET_GAME:
      // Payload is the initial state -- default values
      const { p1, p2, timer } = action.payload;

      // Unchecks the "Cannot Win" and "Cannot Lose" options
      let checkboxes = document.querySelectorAll('input[type=checkbox]');
      checkboxes.forEach((checkbox) => (checkbox.checked = false));

      return {
        p1: {
          ...p1,
          playerName: state.p1.playerName,
          deckName: state.p1.deckName,
        },
        p2: {
          ...p2,
          playerName: state.p2.playerName,
          deckName: state.p2.deckName,
        },
        // Player names and deck names will not reset - user must clear manually in NewGame
        winner: null,
        timer: { ...timer },
      };

    // Used in: the useEffect hook in Poison and LifeTracker components.
    // Will start the timer automatically when a state change is made
    case CHECK_FOR_WINNER:
      if (state.p2.totalLife <= 0 || state.p2.poisonCounters >= 10) {
        if (!state.p1.cannotWin && !state.p2.cannotLose) {
          return {
            ...state,
            winner: state.p1.playerName,
            timer: { ...state.timer, start: false },
          };
        } else {
          return {
            ...state,
            winner: null,
            timer: { ...state.timer, start: true },
          };
        }
      } else if (state.p1.totalLife <= 0 || state.p1.poisonCounters >= 10) {
        if (!state.p2.cannotWin && !state.p1.cannotLose) {
          return {
            ...state,
            winner: state.p2.playerName,
            timer: { ...state.timer, start: false },
          };
        } else {
          return {
            ...state,
            winner: null,
            timer: { ...state.timer, start: true },
          };
        }
      } else {
        return {
          ...state,
          winner: null,
          timer: { ...state.timer, start: true },
        };
      }

    // Boolean toggle to stop/start the timer
    case TOGGLE_TIMER:
      return { ...state, timer: { ...state.timer, start: !state.timer.start } };

    // Resets timer to 00:00:00
    case RESET_TIMER:
      return { ...state, timer: action.payload };

    // Keeps track of timer - used in useEffect of Timer component
    case UPDATE_TIMER:
      const { hours, minutes, seconds } = state.timer;
      let tic = seconds + 1;

      if (tic / 60 === 1) {
        return {
          ...state,
          timer: { ...state.timer, seconds: 0, minutes: minutes + 1 },
        };
      } else if (minutes / 60 === 1) {
        return {
          ...state,
          timer: { ...state.timer, seconds: tic, minutes: 0, hours: hours + 1 },
        };
      } else {
        return { ...state, timer: { ...state.timer, seconds: tic } };
      }

    // Prevents user from saving a match more than once
    // Used in: Results
    case LOG_SAVED:
      return { ...state, logSaved: true };

    default:
      return { ...state };
  }
};
