import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalStateContext from '../contexts/GlobalStateContext';
import useRequestData from '../hooks/useRequestData';
import { BASE_URL } from '../parameters/API';

const GlobalState = (props) =>{

    const [pokedex, setPokedex] = useState([])
    const [targetId, setTargetId] = useState('')
    

    const getDetailsPokemon = () =>{
        axios.get(`${BASE_URL}/${targetId}`)
        .then((res) =>{
            console.log('datelhes pokemon', res.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    const data = {
        pokedex, setPokedex, targetId, setTargetId, getDetailsPokemon
    }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;