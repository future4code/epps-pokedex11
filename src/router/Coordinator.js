import React from 'react'
import {useHistory} from 'react-router-dom'


export const goBack = (history) => {
    history.goBack();
  };
  
  export const goToPage = (history, path) =>{
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