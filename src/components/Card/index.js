import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../parameters/API";
import { goToPage } from "../../router/Coordinator";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import { Container } from "./styled";

const Card = (props) => {
  const history = useHistory();
  const { pokedex, setPokedex } = useContext(GlobalStateContext);

  const addToPokedex = async (pokemonId) => {
    try {
      const res = await axios.get(`${BASE_URL}/${pokemonId}`);
      const pokemonIndex = pokedex.findIndex(
        (pokemon) => pokemon.id === pokemonId
      );
      if (pokemonIndex < 0) {
        const newPokemon = {
          id: res.data.id,
          name: res.data.name,
          moves: res.data.moves,
          stats: res.data.stats,
          types: res.data.types,
          sprites: res.data.sprites,
        };
        setPokedex((pokedex) => [...pokedex, newPokemon]);
        alert("O Pokémon foi adicionado à Pokédex.");
      } else {
        alert("O Pokémon já encontra-se na Pokédex.");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const removeFromPokedex = (pokemonId) => {
    const pokemonIndex = pokedex.findIndex(
      (pokemon) => pokemon.id === pokemonId
    );
    let newPokedex = [...pokedex]
    newPokedex.splice(pokemonIndex,1);
    setPokedex(newPokedex);
    alert("O Pokémon foi libertado!")
  };

  const currentPathname = window.location.pathname; //CAPTURA O CAMINHO DA URL
  console.log(currentPathname);

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
          <button onClick={() => removeFromPokedex(props.pokemonId)}>
            Libertar
          </button> //SE ESTIVER NA PÁGINA DA POKEDEX, O TEXTO DO BOTÃO MUDA PARA 'LIBERTAR'
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
