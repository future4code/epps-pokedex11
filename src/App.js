import Header from "./components/Header";
import styled from "styled-components";

import bg from "./images/pokemon-pattern.jpg";
import Card from "./components/Card";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  background-image: url(${bg});
  width: 100vw;
  height: 100vh;
`;

export default function App() {
  return <div>Hello World</div>;
}
