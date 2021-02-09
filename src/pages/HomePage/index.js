import React, { useState, useEffect } from "react";
import axios from "axios";

import bg from "../../images/pokemon-pattern.jpg";
import { Background } from "./../../components/Background/styled";
import { PokemonsContainer } from "./styled";
import { baseUrl } from "./../../parameters/API";
import Card from "../../components/Card";


const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);

  const GetPokemons = async () => {
    try {
      const res = await axios.get(baseUrl);
      let newArr = res.data.results
      //   Adicionado Id e link de imagem ao Array de Pokemons
      newArr.forEach((pokemon) => {
        // Colocando a primeira letra maiúscula
        pokemon.name = pokemon.name
          .toLowerCase()
          .split(" ")
          .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
          .join(" ");
        pokemon.id = Number(pokemon.url.split("/")[pokemon.url.split("/").length - 2]);
        pokemon.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
      });
      setPokemons(newArr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetPokemons();
  }, []);

  return (
    <div>
      <Background image={bg} />
      <PokemonsContainer>
        {pokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              pokemonId={pokemon.id}
              name={pokemon.name}
              image={pokemon.imgUrl}
            />
          );
        })}
      </PokemonsContainer>
    </div>
  );
};

export default HomePage;
