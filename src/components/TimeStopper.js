import React, { useContext, useEffect } from 'react';
import PlayerContext from '../context/playerContext';

const TimeStopper = () => {
  const { resetTimer } = useContext(PlayerContext);

  useEffect(() => {
    resetTimer();
  }, []);

  /*  This allows the timer to be stopped by default.
      It will begin counting when a life/poison/checkbox state changes,
      or when the "Start" button is clicked.

      Since the useEffect hook in LifeCalculator.js uses checkForWinner() and is dependent
      on p1 and p2, a winner is checked right away upon initial load.
      The else statement in the reducer sets the timer to true, because
      if a winning condition is reverted, then the timer starts again by itself.

        Example: if a player has 5 life, and takes 4 points of damage, the user may
        log that by hitting -5, then +1. The -5 would check for a winner and 
        declare it in that instance, thus stopping the timer. Then, the +1 would check
        for a winner again, and set winner = null. As a result, the timer will resume. 

      For this to work properly, this component needs to load at the very end
      of the component tree, so that it may switch timer.start to false by default instead of 
      keeping it true after the useEffect call takes place upon initial load. 
  */

  return <></>;
};

export default TimeStopper;
