import React, { useContext } from 'react'
import GlobalStateContext from '../../contexts/GlobalStateContext';

const PokedexPage = () => {

    const data = useContext(GlobalStateContext)
    console.log(data)
    return (
        <div>
            POKEDEX
        </div>
    )
}

export default PokedexPage;
