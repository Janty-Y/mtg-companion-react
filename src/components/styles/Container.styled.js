import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  className: 'container-fluid',
}))`
  background-color: rgb(121, 107, 94);
  border: 1px solid black;
  max-width: 800px;
`;
