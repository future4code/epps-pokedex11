import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "../../components/GlobalStyleds/GlobalStyleds";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import { goToPage } from "../../router/Coordinator";
import {
  ContainerPokemonDitails,
  ContainerContentPokemon,
} from "../PokemonDetailsPage/styled";

const PokemonDetailsPage = () => {
  const history = useHistory();
  const { pokemonId } = useParams();

  const {
    pokedex,
    getPokemonDetails,
    pokemonDetails,
    addToPokedex,
    removeFromPokedex,
  } = useContext(GlobalStateContext);

  const pokeIndex = pokedex.findIndex((pokemon) => pokemon.id == pokemonId);
  useEffect(() => {
    getPokemonDetails(pokemonId);
    if (pokedex.length > 0) {
      localStorage.setItem("pokedex", JSON.stringify(pokedex));
    }
  }, [pokedex]);

  const stats =
    pokemonDetails.stats &&
    pokemonDetails.stats.map((stat) => {
      return (
        <p key={stat.name}>
          <strong>
            {stat.stat.name
              .toLowerCase()
              .split(" ")
              .map(
                (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
            :
          </strong>{" "}
          {stat.base_stat}
        </p>
      );
    });

  const types =
    pokemonDetails.types &&
    pokemonDetails.types.map((type) => {
      return (
        <div key={type.name}>
          <p>
            {type.type.name
              .toLowerCase()
              .split(" ")
              .map(
                (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
              )
              .join(" ")}
          </p>
        </div>
      );
    });

  const moves =
    pokemonDetails.moves &&
    pokemonDetails.moves.map((move, index) => {
      return (
        <p key={move.name}>
          {move.move.name
            .toLowerCase()
            .split(" ")
            .map(
              (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
            )
            .join(" ")}
        </p>
      );
    });

  return (
    <ContainerPokemonDitails>
      <div className="back-btn">
        <Button onClick={() => goToPage(history, "/")}>Voltar</Button>
      </div>
      {pokeIndex !== -1 ? (
        <div className="catch-btn">
          <Button onClick={() => removeFromPokedex(pokemonId)}>Libertar</Button>
        </div>
      ) : (
        <div className="catch-btn">
          <Button onClick={() => addToPokedex(pokemonId)}>Capturar</Button>
        </div>
      )}
      {pokemonDetails && (
        <ContainerContentPokemon>
          <div className="imgs-Pokemon">
            <img
              src={
                pokemonDetails.sprites && pokemonDetails.sprites.front_default
              }
            />
            <img
              src={
                pokemonDetails.sprites && pokemonDetails.sprites.back_default
              }
            />
          </div>
          <div className="stats">
            <h2>Estatíticas</h2>
            {pokemonDetails.stats && stats}
          </div>
          <div className="types-And-Moves">
            <div className="types">{types}</div>
            <div className="moves">
              <h2>Ataques</h2>
              <div>{moves}</div>
            </div>
          </div>
        </ContainerContentPokemon>
      )}
    </ContainerPokemonDitails>
  );
};

export default PokemonDetailsPage;