import React, { useContext } from 'react';
import PlayerContext from '../context/playerContext';

const Results = () => {
  const { winner, p1, p2, timer, logSaved, saveToggle } =
    useContext(PlayerContext);
  const { seconds, minutes, hours } = timer;

  // Grabs the current data for a match, the saved matches in localStorage, and then adds the data
  // to the matchLogs array in localStorage using the spread operator
  const handleSave = () => {
    const displayHours = hours < 9 ? '0' + hours : hours;
    const displayMinutes = minutes > 9 ? minutes : '0' + minutes;
    const displaySeconds = seconds > 9 ? seconds : '0' + seconds;
    const currentLogs = JSON.parse(localStorage.getItem('matchLogs') || '[]');

    let currentMatch = {
      p1Log: { ...p1 },
      p2Log: { ...p2 },
      results: winner + ' won this match.',
      duration: displayHours + ':' + displayMinutes + ':' + displaySeconds,
    };

    localStorage.setItem(
      'matchLogs',
      JSON.stringify([...currentLogs, currentMatch])
    );

    saveToggle();
  };

  return (
    <>
      <div className='results'>
        {winner && winner + ' Wins!'}
        <div>
          {winner ? (
            <button
              className='btn btn-secondary'
              onClick={handleSave}
              disabled={logSaved ? true : false}
            >
              {logSaved ? 'Saved!' : 'Save Log'}
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
