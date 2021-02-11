import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../contexts/GlobalStateContext";

import bg from "../../images/pokemon-pattern.jpg";
import { Background } from "./../../components/Background/styled";
import { PokemonsContainer } from "./styled";
import Card from "../../components/Card";

const PokedexPage = () => {
  const { pokedex, setPokedex } = useContext(GlobalStateContext);

  useEffect(() => {
    const storedPokedex = JSON.parse(localStorage.getItem("pokedex"));
    if (storedPokedex) {
      setPokedex(storedPokedex);
    }
  }, []);
  return (
    <div>
      <Background image={bg} />
      <PokemonsContainer>
        {pokedex.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              pokemonId={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
            />
          );
        })}
      </PokemonsContainer>
    </div>
  );
};

export default PokedexPage;
