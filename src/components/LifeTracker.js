import React, { useContext } from 'react';
import PlayerContext from '../context/playerContext';

const LifeTracker = () => {
  const { p1, p2 } = useContext(PlayerContext);

  // Handles the display of both totalLife and lifeHistory for each player

  return (
    <div className='row '>
      <div className='col-1 life-history'>
        +/-
        <hr />
        <span className='life-history-scroll'>
          {p1.lifeArray.map((item, i) => {
            return (
              <span key={i}>
                {item}
                <br />
              </span>
            );
          })}
        </span>
      </div>
      <div className='col life offset'>
        LIFE
        <div className='p1 life-count'>{p1.totalLife}</div>
      </div>
      <div className='col-1 life-history'>
        +/-
        <hr />
        <span className='life-history-scroll'>
          {p2.lifeArray.map((item, i) => {
            return (
              <span key={i}>
                {item}
                <br />
              </span>
            );
          })}{' '}
        </span>
      </div>
      <div className='col life offset'>
        LIFE
        <div className='life-count'>{p2.totalLife}</div>
      </div>
    </div>
  );
};

export default LifeTracker;
