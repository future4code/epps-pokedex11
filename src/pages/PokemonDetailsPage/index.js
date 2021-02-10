import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import GlobalStateContext from '../../contexts/GlobalStateContext';
import { goBack } from './../../router/Coordinator';
import getDetailsPokemon from '../../global/GlobalState'

const PokemonDetailsPage = () => {
    const history = useHistory()
    const {pokemonId} = useParams();

    const data = useContext(GlobalStateContext)
    console.log(data)

    useEffect(() =>{
        data.getDetailsPokemon()
    }, [])

    return (
        <div>
            <button onClick={()=>goBack(history)}>Voltar</button>
            {/* DETALHES ID:{pokemonId} */}
        </div>
    )
}

export default PokemonDetailsPage
