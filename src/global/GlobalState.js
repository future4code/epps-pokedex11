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
      setPokemonDetails(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const data = {
    pokedex,
    setPokedex,
    pokemonDetails,
    setPokemonDetails,
    getPokemonDetails,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
