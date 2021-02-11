import React, { useState, useEffect } from "react";
import axios from "axios";
import { PokemonsContainer } from "./styled";
import { BASE_URL } from "./../../parameters/API";
import Card from "../../components/Card";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [limitSearch, setLimitSearch] = useState("20");

  const getPokemons = async () => {
    try {
      const res = await axios.get(`${BASE_URL}?limit=${limitSearch}`);
      let newArr = res.data.results;
      //   Adicionado Id e link de imagem ao Array de Pokemons
      newArr.forEach((pokemon) => {
        // Colocando a primeira letra maiúscula
        pokemon.name = pokemon.name
          .toLowerCase()
          .split(" ")
          .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
          .join(" ");
        pokemon.id = Number(
          pokemon.url.split("/")[pokemon.url.split("/").length - 2]
        );
        pokemon.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
      });
      setPokemons(newArr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  // const randomList = () => {
  //   const listLength = limitSearch + 1;
  //   setLimitSearch("1188");
  //   getPokemons();
  //   let newList = [];
  //   let pokemonId = -1
  //   let newListIndex = -2
  //   for (let i = 0; i < listLength; i++) {
  //     pokemonId = Math.floor(Math.random() * 1188) + 1;
  //     newListIndex = newList.findIndex(
  //       (pokemon) => pokemon.id === pokemonId
  //     );
  //     while (newListIndex !== -1) {
  //       newListIndex = newList.findIndex((pokemon) => pokemon.id === pokemonId);
  //     }
  //     let pokemonsIndex = pokemons.findIndex(
  //       (pokemon) => pokemon.id === pokemonId
  //     );
  //     newList.push(pokemons[pokemonsIndex]);
  //   }
  // };

  return (
    <div>
      <PokemonsContainer>
        {/* <div className="filter-container">
          <div className="searchbar">
            <input placeholder="Buscar Pokémon" />
          </div>
          <div className="number-filter">
            <label>
              Listar:{" "}
              <input
                type="number"
                min="1"
                placeholder="de 1 a 1188"
                onChange={(e) => setLimitSearch(e.target.value)}
              />{" "}
              Pokémons
            </label>
            <button onClick={() => getPokemons()}>Gerar lista</button>
            <button>Lista aleatória</button>
          </div>
        </div> */}
        <div className="pokemons-list">
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
        </div>
      </PokemonsContainer>
    </div>
  );
};

export default HomePage;
