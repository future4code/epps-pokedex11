import React, { useContext } from 'react'
import {useHistory, useParams} from 'react-router-dom';
import GlobalStateContext from '../contexts/GlobalStateContext';


export const goBack = (history) => {
    history.goBack();
  };
  
  export const goToPage = (history, path, setter) =>{
      history.push(path)
  }



//   export default function Coordinator(){

//     const history = useHistory()
//     return(
//         <div>
//             <button onClick={() => goToPage(history, '/')}>Home</button>
//             <button onClick={() => goToPage(history, '/pokedex')}>Pokedex</button>
//             <button onClick={() => goToPage(history, '/poke-detail/daniel')}>Detail</button>
//         </div>
//     )
//   }