import styled from 'styled-components';

export const ContainerPokemonDitails = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 100px;
`

export const ContainerContentPokemon = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    height: 60vh;

    h2{
        text-align: center;
    }

    h2, p{
            
        margin: 30px;
    }

   .imgs-Pokemon{
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       
       img{
           background-color: #f2f2f2;
           width: 170px;
       }
   }

   .stats{
        background-color: #f2f2f2;
        width: 300px;

        

   }

   .types-And-Moves{
       display: flex;
       justify-content: space-between;
       flex-direction: column;
       width: 300px;
   }

   .types{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #f2f2f2;
    height: 50px;
   }

   .moves{
       height: 320px;
       background-color: #f2f2f2;
   }
`

