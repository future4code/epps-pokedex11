import React, { useState } from "react";
import axios from "axios";
import GlobalStateContext from "../contexts/GlobalStateContext";
import { BASE_URL } from "../parameters/API";

const GlobalState = (props) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  const getPokemonDetails = async (pokemonId) => {
    try {
      const res = await axios.get(`${BASE_URL}/${pokemonId}`);
      // setPokemonDetails(res.data);
      const newPokemon = {
        id: res.data.id,
        name: res.data.name
          .toLowerCase()
          .split(" ")
          .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
          .join(" "),
        moves: res.data.moves,
        stats: res.data.stats,
        types: res.data.types,
        sprites: res.data.sprites,
      };
      setPokemonDetails(newPokemon);
    } catch (err) {
      console.log(err);
    }
  };

   const addToPokedex = async (pokemonId) => {
     try {
       const res = await axios.get(`${BASE_URL}/${pokemonId}`);
       const pokemonIndex = pokedex.findIndex(
         (pokemon) => pokemon.id == pokemonId
       );
       if (pokemonIndex < 0) {
         const newPokemon = {
           id: res.data.id,
           name: res.data.name
             .toLowerCase()
             .split(" ")
             .map(
               (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
             )
             .join(" "),
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
         (pokemon) => pokemon.id == pokemonId
       );
       let newPokedex = [...pokedex];
       newPokedex.splice(pokemonIndex, 1);
       setPokedex(newPokedex);
       if (pokedex.length === 1) {
         localStorage.removeItem("pokedex");
       }
       alert("O Pokémon foi libertado!");
     };

  const data = {
    pokedex,
    setPokedex,
    pokemonDetails,
    setPokemonDetails,
    getPokemonDetails,
    addToPokedex,
    removeFromPokedex,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
