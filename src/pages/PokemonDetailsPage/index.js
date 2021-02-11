import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import GlobalStateContext from '../../contexts/GlobalStateContext';
import { goBack } from './../../router/Coordinator';

const PokemonDetailsPage = () => {
    const history = useHistory()
    const {pokemonId} = useParams();

    const { getPokemonDetails, pokemonDetails } = useContext(
      GlobalStateContext
    );

    useEffect(() =>{
        getPokemonDetails(pokemonId);
    }, [])

    return (
      <div>
        <button onClick={() => goBack(history)}>Voltar</button>
        {/* DETALHES ID:{pokemonId} */}
      </div>
    );
}

export default PokemonDetailsPage
