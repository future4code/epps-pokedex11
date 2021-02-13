import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import { PokemonsContainer } from "./styled";
import Card from "../../components/Card";
import { Button } from "../../components/GlobalStyleds/GlobalStyleds";
import { goToPage } from "../../router/Coordinator";

const PokedexPage = () => {
  const history = useHistory();
  const { pokedex, setPokedex } = useContext(GlobalStateContext);

  useEffect(() => {
    const storedPokedex = JSON.parse(localStorage.getItem("pokedex"));
    if (storedPokedex) {
      setPokedex(storedPokedex);
    }
  }, []);
  return (
    <PokemonsContainer>
      <div className="back-btn">
        <Button onClick={() => goToPage(history, "/")}>Voltar</Button>
      </div>
      <div className="battle-btn">
        <Button onClick={() => goToPage(history, "/battle")}>Batalhar</Button>
      </div>
      {pokedex.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            pokemonId={pokemon.id}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          />
        );
      })}
    </PokemonsContainer>
  );
};

export default PokedexPage;
