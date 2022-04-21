import React from 'react';

const Version = () => {
  return (
    <div>
      <h2>Version 2.0</h2>
      <ul>
        <li>
          <a
            href=' https://github.com/Janty-Y/mtg-companion-react'
            target='blank'
          >
            Source code for Version 2.0
          </a>
        </li>

        <li>This app was converted to a React app in version 2.0</li>
        <li>
          Functionality remains consistent with version 1.0 with one small
          change:
          <ul>
            <li>
              The timer will automatically begin when a change is made to Life,
              Poison Counters, or Cannot Win/Lose checks.
            </li>
          </ul>
        </li>
        <li>Minor UI changes</li>
        <ul>
          <li>
            Game result area below the timer no longer expands when a winner is
            declared, and instead uses a dedicated area
          </li>
        </ul>
      </ul>
      <h2>Version 1.0</h2>
      <ul>
        <li>
          <a href='https://github.com/Janty-Y/mtg-companion' target='blank'>
            Source code for Version 1.0
          </a>
        </li>
        <li>The first version used plain JavaScript, HTML, CSS, and jQuery.</li>
        <li>
          Version 1.0 can be viewed{' '}
          <a href='https://mtg-companion.herokuapp.com/' target='blank'>
            here
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Version;
