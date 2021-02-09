import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  background-image: url(${props=>props.image});
  width: 100vw;
  height: 100vh;
`;