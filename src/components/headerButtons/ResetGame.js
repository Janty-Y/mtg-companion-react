import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import PlayerContext from '../../context/playerContext';

const ResetGame = () => {
  const { resetGame, resetTimer } = useContext(PlayerContext);

  const handleReset = () => {
    resetGame();
    setTimeout(() => {
      resetTimer();
    }, 0); //so to not start the timer by default
  };

  return (
    <Button
      variant='btn btn-outline-warning top-button'
      type='button'
      onClick={handleReset}
    >
      Reset Game
    </Button>
  );
};

export default ResetGame;
