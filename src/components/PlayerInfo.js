import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import PlayerContext from '../context/playerContext';
import { StyledPlayerName } from './styles/PlayerName.styled';

const PlayerInfo = () => {
  const playerContext = useContext(PlayerContext);

  const { p1, p2 } = playerContext;

  return (
    <StyledPlayerName>
      <Col>
        {p1.playerName.toUpperCase()}
        <hr />
        {p1.deckName.toUpperCase()}
      </Col>
      <Col>
        {p2.playerName.toUpperCase()}
        <hr />
        {p2.deckName.toUpperCase()}
      </Col>
    </StyledPlayerName>
  );
};

export default PlayerInfo;
