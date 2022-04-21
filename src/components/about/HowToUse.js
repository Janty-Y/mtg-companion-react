import React from 'react';

const HowToUse = () => {
  return (
    <>
      <h4>How To Use:</h4>
      <ul>
        <li>
          Clicking on "New Game" will allow the players to enter their names and
          their deck names.
        </li>
        <li>
          The "Reset Game" button will clear all states of the app to default,
          <em> except</em> for player/deck names. To clear those, click on "New
          Game" and "Clear" and then submit that form.
        </li>
        <li>
          "View Logs" will show any game history saved on the client. The option
          to save a log will appear once a winner is declared.
        </li>
        <li>
          The timer may be started manually by the user. It will automatically
          start if a change to Life or Poison is made, or if any of the
          checkboxes are selected.
        </li>
        <li>
          If a winner is declared, the timer will stop. However, if a winning
          condition is reverted (i.e. a players life goes from -1 to 4) the
          timer will resume automatically.
        </li>
        <li>
          The app can be used instantly when loaded. No need to customize names
          to play quickly!
        </li>
      </ul>
    </>
  );
};

export default HowToUse;
