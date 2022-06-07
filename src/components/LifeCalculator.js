import React, { useContext, useEffect } from 'react';
import PlayerContext from '../context/playerContext';
import { StyledLifeCalculator } from './styles/LifeCalculator.styled';

const LifeCalculator = () => {
  const { updateLife, updateLifeArray, updateChecks, p1, p2, checkForWinner } =
    useContext(PlayerContext);
  const handleLife = (e) => {
    // name = p1 or p2, value = the amount of life change
    const { name, value } = e.target;
    updateLife(name, Number(value));

    // Updates the life history array for accumulations of life change totals within 2 seconds
    setTimeout(() => {
      updateLifeArray(name);
    }, 2000);
  };

  // The id passed will determine what state is changed when checking a box
  const handleChecks = (e) => {
    updateChecks(e.target.id);
  };

  // Checks for a winner each time when either p1 or p2 state changes
  useEffect(() => {
    checkForWinner();
  }, [p1, p2]);

  return (
    <StyledLifeCalculator>
      <div className='row'>
        <div className='col life-calc '>
          <div className='row cannot-checks'>
            <div className='col '>
              <input type='checkbox' id='p1CannotWin' onClick={handleChecks} />{' '}
              <label htmlFor='p1CannotWin'>Cannot Win</label>
            </div>

            <div className='col'>
              <input type='checkbox' id='p1CannotLose' onClick={handleChecks} />{' '}
              <label htmlFor='p1CannotLose'>Cannot Lose</label>
            </div>
            <hr />
          </div>

          <div className='row'>
            <div className='col'>
              <button
                className='btn heart fas fa-heart'
                name='p1'
                value='-1'
                onClick={handleLife}
              >
                -1
              </button>
              <button
                className='btn heart fas fa-heart'
                name='p1'
                value='-5'
                onClick={handleLife}
              >
                -5
              </button>
            </div>
            <div className='col'>
              <button
                className='btn heart fas fa-heart'
                name='p1'
                value='+1'
                onClick={handleLife}
              >
                +1
              </button>
              <button
                className='btn heart fas fa-heart'
                name='p1'
                value='+5'
                onClick={handleLife}
              >
                +5
              </button>
            </div>
          </div>
        </div>
        <div className='col life-calc '>
          <div className='row cannot-checks'>
            <div className='col'>
              <input type='checkbox' id='p2CannotWin' onClick={handleChecks} />{' '}
              <label htmlFor='p2CannotWin'>Cannot Win</label>
            </div>

            <div className='col '>
              <input type='checkbox' id='p2CannotLose' onClick={handleChecks} />{' '}
              <label htmlFor='p2CannotLose'> Cannot Lose</label>
            </div>
            <hr />
          </div>

          <div className='row'>
            <div className='col'>
              <button
                className='btn heart fas fa-heart'
                name='p2'
                value='-1'
                onClick={handleLife}
              >
                -1
              </button>
              <button
                className='btn heart fas fa-heart'
                name='p2'
                value='-5'
                onClick={handleLife}
              >
                -5
              </button>
            </div>
            <div className='col'>
              <button
                className='btn heart fas fa-heart'
                name='p2'
                value='+1'
                onClick={handleLife}
              >
                +1
              </button>
              <button
                className='btn heart fas fa-heart'
                name='p2'
                value='+5'
                onClick={handleLife}
              >
                +5
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledLifeCalculator>
  );
};

export default LifeCalculator;
