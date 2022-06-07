import React from 'react';
import NewGame from './headerButtons/NewGame';
import ResetGame from './headerButtons/ResetGame';
import Logs from './headerButtons/Logs';
import About from './headerButtons/About';
import { StyledTopButtonRow } from './styles/TopButtonRow.styled';
import { Col } from 'react-bootstrap';

const Header = () => {
  // Handles rendering of the app title and buttons on the top

  return (
    <StyledTopButtonRow>
      <Col>
        <h1>Magic: The Gathering Companion</h1>
        <NewGame />
        <ResetGame />
        <Logs />
        <About />
      </Col>
    </StyledTopButtonRow>
  );
};

export default Header;
