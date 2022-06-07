import styled from 'styled-components';

export const StyledLifeTracker = styled.div`
  .life,
  .life-history {
    background-color: #fff;
    height: 260px;
    border: none;
    text-align: center;
  }

  .life-history {
    text-align: left;
  }

  div.life {
    border-right: 1px rgb(170, 170, 170) solid;
  }

  div.life ~ div.life {
    border-right: 0;
  }

  .offset {
    padding-right: 80px;
    background-color: #fff;
  }

  .life-history-scroll {
    position: absolute;
    overflow-y: scroll;
    max-height: 220px;
    font-size: 1.1rem;
    margin-left: 0;
    padding-right: 15px;
  }

  .life-count {
    margin: 25px 0 0 0;
    font-size: 5.5rem;
  }

  @media (max-height: 800px), (max-width: 450px) {
    .life,
    .life-history {
      background-color: #fff;
      height: 160px;
      border: none;
      width: 40px;
    }

    .life-history-scroll {
      background-color: #fff;
      max-height: 130px;
      font-size: 0.8rem;
      text-align: left;
      width: 60px;
    }
    .life-count {
      font-size: 2.2rem;
      height: 1rem;
    }
    .offset {
      padding-right: 40px;
      background-color: #fff;
    }
  }
`;
