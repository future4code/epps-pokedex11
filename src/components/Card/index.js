import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styled";

import {goToPage} from "../../router/Coordinator"
import GlobalStateContext from "../../contexts/GlobalStateContext";

const Card = (props) => {
  const history = useHistory();

  const {setTargetId} = useContext(GlobalStateContext)

  const seeDetails = (pokemonId, history) =>{
    setTargetId(pokemonId)
    history.push(`/poke-detail/${pokemonId}`)
  }

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
        <button onClick={() => seeDetails(props.pokemonId, history)}>
          Detalhes
        </button>
      </div>
    </Container>
  );
};

export default Card;
