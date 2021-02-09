import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import { goBack } from './../../router/Coordinator';

const PokemonDetailsPage = () => {
    const history = useHistory()
    const {pokemonId} = useParams();

    return (
        <div>
            <button onClick={()=>goBack(history)}>Voltar</button>
            DETALHES ID:{pokemonId}
        </div>
    )
}

export default PokemonDetailsPage
