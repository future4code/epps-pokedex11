import axios from 'axios';
import React, { useState } from 'react';
import GlobalStateContext from '../contexts/GlobalStateContext';
import { BASE_URL } from '../parameters/API';

const GlobalState = (props) =>{

    const [pokedex, setPokedex] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState('');
    

    const getDetailsPokemon = (pokemonId) =>{
        axios.get(`${BASE_URL}/${pokemonId}`)
        .then((res) =>{
            console.log('datelhes pokemon', res.data)
            setPokemonDetails(res.data)
        })
        .catch((error) =>{
            console.log(error)
        });
    };

    const data = {
        pokedex,
        setPokedex,
        pokemonDetails, 
        setPokemonDetails, 
        getDetailsPokemon,
    };

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;