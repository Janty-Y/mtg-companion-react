import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import PlayerContext from '../context/playerContext';
import { StyledLifeTracker } from './styles/LifeTracker.styled';

const LifeTracker = () => {
  const { p1, p2 } = useContext(PlayerContext);

  // Handles the display of both totalLife and lifeHistory for each player

  return (
    <StyledLifeTracker>
      <Row>
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
      </Row>
    </StyledLifeTracker>
  );
};

export default LifeTracker;
