// used in case UPDATE_LIFE
export const updateLifeHelper = (player, lifeChange, state) => {
  const { totalLife, lifeHistory } = state[player];
  return {
    ...state,
    [player]: {
      ...state[player],
      totalLife: totalLife + lifeChange,
      lifeHistory: lifeHistory + lifeChange,
    },
  };
};

// used in case UPDATE_LIFE_ARRAY
export const updateLifeArrayHelper = (player, state) => {
  const { lifeArray, lifeHistory } = state[player];
  return {
    ...state,
    [player]: {
      ...state[player],
      lifeArray:
        lifeHistory !== 0 ? [...lifeArray, lifeHistory] : [...lifeArray],
      lifeHistory: 0,
    },
  };
};

// used in  case UPDATE_POISON
export const updatePoisonHelper = (player, poison, state) => {
  const { poisonCounters } = state[player];
  if (poison === -1 && poisonCounters <= 0) {
    return { ...state };
  }
  return {
    ...state,
    [player]: {
      ...state[player],
      poisonCounters: poisonCounters + poison,
    },
  };
};
