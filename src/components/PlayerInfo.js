import React, { useContext } from 'react';
import PlayerContext from '../context/playerContext';

const PlayerInfo = () => {
  const playerContext = useContext(PlayerContext);

  const { p1, p2 } = playerContext;

  return (
    <div className='row player-title'>
      <div className='col player'>
        {p1.playerName.toUpperCase()}
        <hr />
        {p1.deckName.toUpperCase()}
      </div>
      <div className='col player p2-info'>
        {p2.playerName.toUpperCase()}
        <hr />
        {p2.deckName.toUpperCase()}
      </div>
    </div>
  );
};

export default PlayerInfo;
