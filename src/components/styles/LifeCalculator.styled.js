import styled from 'styled-components';

export const StyledLifeCalculator = styled.span`
  .life-calc {
    background-color: rgb(238, 229, 228);
  }

  .life-calc ~ .life-calc {
    border-left: 0;
  }

  .heart {
    font-size: 2.5rem;
    padding: 15px;
    color: rgb(206, 82, 82);
  }

  .heart:hover {
    color: rgb(148, 88, 88);
  }

  @media (max-height: 800px), (max-width: 450px) {
    .heart {
      font-size: 1.5rem;
      padding: 8px;
    }

    .cannot-checks {
      font-size: 0.8rem;
      margin: 1px;
    }
  }
`;
