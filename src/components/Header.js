import React from 'react';
import NewGame from './headerButtons/NewGame';
import ResetGame from './headerButtons/ResetGame';
import Logs from './headerButtons/Logs';
import About from './headerButtons/About';

const Header = () => {
  // Handles rendering of the app title and buttons on the top

  return (
    <div className='row top-button-row'>
      <div className='col'>
        <h1>Magic: The Gathering Companion</h1>
        <NewGame />
        <ResetGame />
        <Logs />
        <About />
      </div>
    </div>
  );
};

export default Header;
