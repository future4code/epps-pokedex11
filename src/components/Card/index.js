import React from "react";
import { Container } from "./styled";

const Card = (props) => {
  return (
    <Container>
      <div className="img-container"><img src={props.image} alt="pokemon image" /></div>
      <div className="btn-container">
        <button>Adicionar à PokéDex</button>
        <button>Detalhes</button>
      </div>
    </Container>
  );
};

export default Card;
