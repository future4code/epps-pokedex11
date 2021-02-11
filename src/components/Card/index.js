import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../parameters/API";
import { goToPage } from "../../router/Coordinator";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import { Container } from "./styled";
import { Button } from './../GlobalStyleds/GlobalStyleds';

const Card = (props) => {
  const history = useHistory();
  const { pokedex, addToPokedex, removeFromPokedex } = useContext(
    GlobalStateContext
  );

  const currentPathname = window.location.pathname; //CAPTURA O CAMINHO DA URL

  useEffect(() => {
    if (pokedex.length > 0) {
      localStorage.setItem("pokedex", JSON.stringify(pokedex));
    }
  }, [pokedex]);

  return (
    <Container>
      <div className="label-container">
        <h2>{props.name}</h2>
      </div>
      <div className="img-container">
        <img src={props.image} alt="pokemon image" />
      </div>
      <div className="btn-container">
        {currentPathname === "/pokedex" ? (
          <Button onClick={() => removeFromPokedex(props.pokemonId)}>
            Libertar
          </Button> //SE ESTIVER NA PÁGINA DA POKEDEX, O TEXTO DO BOTÃO MUDA PARA 'LIBERTAR'
        ) : (
          <button onClick={() => addToPokedex(props.pokemonId)}>
            Capturar
          </button> //SE ESTIVER NAS OUTRAS PÁGINAS, O TEXTO DO BOTÃO MUDA PARA 'CAPTURAR'
        )}
        <button
          onClick={() => goToPage(history, `/poke-detail/${props.pokemonId}`)}
        >
          Detalhes
        </button>
      </div>
    </Container>
  );
};

export default Card;
