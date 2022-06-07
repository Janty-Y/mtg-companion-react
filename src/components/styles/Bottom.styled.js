import styled from 'styled-components';

export const StyledBottom = styled.div.attrs(() => ({ className: 'row' }))`
  background-color: #504c4c;
  color: #fff;
  height: 100%;

  button {
    width: 150px;
    height: 40px;
    font-size: 1.1rem;
  }

  .game-time {
    font-size: 3rem;
  }

  .results {
    font-size: 2rem;
    height: 6.5rem;
  }

  .save-button {
    padding-top: 0;
    margin-bottom: 20px;
  }

  .match-history {
    text-align: center;
  }

  @media (max-height: 800px), (max-width: 450px) {
    .game-time {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }
    .bottom button.btn {
      width: 30%;
      height: 40px;
      font-size: 1rem;
    }
    .results {
      font-size: 1.5rem;
      height: 5.5rem;
    }
  }

  @media only screen and (max-height: 670px) {
    .game-time {
      font-size: 1.2rem;
      margin: 0;
    }

    .bottom button.btn {
      height: 28px;
      width: 25%;
      font-size: 0.8rem;
      margin: 0;
    }

    div.results {
      font-size: 1rem;
    }
  }
`;
