import React from 'react';

const Mechanics = () => {
  return (
    <>
      <h4>Mechanics</h4>
      <ul>
        <li>
          When a player reaches a life total of 0 or less, that player will lose
          the game.
        </li>
        <li>
          However, there are many mechanics in Magic: The Gathering. Some of the
          more popular ones are clauses that will not allow a player to win or
          lose the game until the card that grants the effect leaves the game.
        </li>
        <li>
          If one of the conditions are changed from checked to unchecked, the
          app will check if a winner is declared from that outcome.
        </li>
        <li>
          On the left of each player's life total is a history to keep track of
          life changes throughout the course of the game. Once a heart button is
          tapped, the sum of any calculations in the span of 2 seconds will be
          accounted for.
          <ul>
            <li>
              i.e. If a player gained 3 life, tapping +1 3 times will show "+3"
              in the history, rather than "+1 +1 +1"
            </li>
          </ul>
        </li>
        <li>
          <strong>Poison counters:</strong> some creatures will leave a poision
          counter on a player when they deal damage to them. A player that has
          10 or more poison counters loses the game.
        </li>
      </ul>
    </>
  );
};

export default Mechanics;
