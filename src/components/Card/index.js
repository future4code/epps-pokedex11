import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styled";

import {goToPage} from "../../router/Coordinator"

const Card = (props) => {
  const history = useHistory();

  return (
    <Container>
      <div className="label-container">
        <h2>{props.name}</h2>
      </div>
      <div className="img-container">
        <img src={props.image} alt="pokemon image" />
      </div>
      <div className="btn-container">
        <button>Adicionar à PokéDex</button>
        <button onClick={() => goToPage(history, `/poke-detail/${props.pokemonId}`)}>
          Detalhes
        </button>
      </div>
    </Container>
  );
};

export default Card;
