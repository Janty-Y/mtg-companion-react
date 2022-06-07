import styled from 'styled-components';

export const StyledTopButtonRow = styled.div.attrs(() => ({
  className: 'row',
}))`
  margin-bottom: 5px;

  .top-button {
    margin-right: 5px;
  }

  @media (max-height: 800px), (max-width: 450px) {
    .top-button {
      width: 75px;
      height: 40px;
      font-size: 0.85rem;
      padding: 0;
    }
  }

  @media only screen and (max-height: 670px) {
    .top-button {
      width: 20%;
      height: 65%;
      font-size: 0.7rem;
      padding: 0;
    }
  }
`;
