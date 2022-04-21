import React, { useContext, useEffect, useState } from 'react';
import PlayerContext from '../context/playerContext';

const Timer = () => {
  const { timer, updateTimer, toggleTimer, resetTimer } =
    useContext(PlayerContext);
  const { seconds, minutes, hours, start } = timer;

  const [timerInterval, setTimerInterval] = useState(null);

  // When the start property of the timer is truthy, this will set the timer interval to update the
  // clock every second. When it is false, i.e. the timer is stopped, it will clear the
  // interval and set the state back to null.
  useEffect(() => {
    if (start) {
      setTimerInterval(
        setInterval(() => {
          updateTimer();
        }, 1000)
      );
    } else {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
  }, [start]);

  const handleToggle = () => {
    toggleTimer();
  };

  const handleReset = () => {
    resetTimer();
  };

  return (
    <>
      <div className='col bottom'>
        <button className='btn btn-secondary' onClick={handleToggle}>
          {start ? 'Stop' : 'Start'}
        </button>
        <span className='game-time'>
          {'  '}
          {hours < 9 ? '0' + hours : hours}:
          {minutes > 9 ? minutes : '0' + minutes}:
          {seconds > 9 ? seconds : '0' + seconds}
          {'  '}
        </span>

        <button className='btn btn-secondary ' onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Timer;
