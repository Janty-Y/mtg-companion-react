import styled from 'styled-components';

export const StyledPoison = styled.div.attrs(() => ({ className: 'row' }))`
  .poison {
    background-color: rgb(217, 223, 221);
  }

  .poison ~ .poison {
    border-left: 0;
  }

  .psn-down:hover,
  .psn-up:hover {
    color: rgb(31, 170, 31);
  }
`;
