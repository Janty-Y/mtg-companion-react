import React, { useContext, useEffect } from 'react';
import PlayerContext from '../context/playerContext';
import { StyledPoison } from './styles/Poison.styles';

const Poison = () => {
  const { p1, p2, updatePoison, checkForWinner } = useContext(PlayerContext);

  const handlePoison = (e) => {
    // name = player to update, value = +1 or -1 depending on the button clicked
    const { name, value } = e.target;
    updatePoison(name, Number(value));
  };

  // Checks for a winner each time when either p1 or p2 state changes
  useEffect(() => {
    checkForWinner();
  }, [p1, p2]);

  return (
    <StyledPoison>
      <div className='col  poison'>
        POISON COUNTERS <i className='fas fa-skull-crossbones'> </i> <hr />
        <button
          className='btn btn-lg psn-down fas fa-caret-square-down'
          type='button'
          name='p1'
          value='-1'
          onClick={handlePoison}
        ></button>
        <span>{p1.poisonCounters} </span>
        <button
          className='btn btn-lg psn-up fas fa-caret-square-up'
          onClick={handlePoison}
          name='p1'
          value='+1'
        ></button>
      </div>
      <div className='col poison'>
        POISON COUNTERS <i className='fas fa-skull-crossbones'></i>
        <hr />
        <button
          className='btn btn-lg psn-down fas fa-caret-square-down'
          type='button'
          name='p2'
          value='-1'
          onClick={handlePoison}
        ></button>
        <span>{p2.poisonCounters} </span>
        <button
          className='btn btn-lg psn-up fas fa-caret-square-up'
          type='button'
          name='p2'
          value='1'
          onClick={handlePoison}
        ></button>
      </div>
    </StyledPoison>
  );
};

export default Poison;
