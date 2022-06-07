import styled from 'styled-components';

export const StyledPlayerName = styled.div.attrs(() => ({ className: 'row' }))`
  padding-top: 5px;

  div {
    background-color: #504c4c;
    border: 1px rgb(170, 170, 170) solid;
    border-left: 0;
    color: #fff;
  }

  div ~ div {
    border-right: 0;
  }
`;
