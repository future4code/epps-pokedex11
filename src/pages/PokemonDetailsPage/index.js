import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import GlobalStateContext from '../../contexts/GlobalStateContext';
import { goBack } from './../../router/Coordinator';
import { ContainerPokemonDitails, ContainerContentPokemon } from '../PokemonDetailsPage/styled'; 



const PokemonDetailsPage = () => {
    const history = useHistory()
    const {pokemonId} = useParams();

    const { getDetailsPokemon, pokemonDetails } = useContext(
        GlobalStateContext
    );
  
    useEffect(() =>{
        getPokemonDetails(pokemonId);
    }, [])

    const stats = pokemonDetails && pokemonDetails.stats.map((stat) =>{
        return (
            <p><strong>{stat.stat.name}:</strong> {stat.base_stat}</p>
        )
    })

    const types = pokemonDetails && pokemonDetails.types.map((type) =>{
        return (
            <div>
                <p>{type.type.name}</p>
            </div>
        )
    })

    const moves = pokemonDetails && pokemonDetails.moves.map((move, index) =>{
        return index < 5 && <p>{move.move.name}</p>
    })

    return (
        <ContainerPokemonDitails>
            <ContainerContentPokemon>
                <div className='imgs-Pokemon'>
                    <img src={pokemonDetails && pokemonDetails.sprites.front_default}/>
                    <img src={pokemonDetails && pokemonDetails.sprites.back_default}/>
                </div>
                <div className='stats'>
                    <h2>Poderes</h2>
                    {stats}
                </div>
                <div className='types-And-Moves'>
                    <div className='types'>
                        {types}
                    </div>
                    <div className='moves'>
                        <h2>Principais Ataques</h2>
                        {moves}
                    </div>
                </div>
            </ContainerContentPokemon>
            <button onClick={()=>goBack(history)}>Voltar</button>
        </ContainerPokemonDitails>
    )
}

export default PokemonDetailsPage;
