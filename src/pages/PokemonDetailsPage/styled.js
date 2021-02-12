import styled from "styled-components";

export const ContainerPokemonDitails = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 100px;

  .back-btn {
    position: absolute;
    top: 80px;
    left: 10px;
  }

  .catch-btn {
    position: absolute;
    top: 80px;
    right: 10px;
  }
`;

export const ContainerContentPokemon = styled.div`
  display: flex;
  min-width: 80%;
  justify-content: space-evenly;
  height: 60vh;
  flex-wrap: wrap;
  gap: 25px;
  color: #ffcb05;

  div, img{
    border-radius: 10px;
  }

  h2 {
    text-align: center;
    font-family: "PokemonFont";
    letter-spacing: 3px;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: #003a70;
    margin: 0;
  }
  
  p {
    margin: 30px;
  }

  .imgs-Pokemon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      background-color: #cc0000;
      width: 150px;

      &:hover{
        box-shadow: 2px 2px 5px black;
      }
    }

    @media screen and (max-width: 619px) {
      flex-direction: row;
    }
  }

  .stats {
    background-color: #cc0000;
    width: 300px;

    &:hover{
        box-shadow: 2px 2px 5px black;
      }
  }

  .types-And-Moves {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 300px;
  }

  .types {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #cc0000;
    height: 50px;

    &:hover{
        box-shadow: 2px 2px 5px black;
      }
  }

  .moves {
    height: 320px;
    background-color: #cc0000;

    h2{
      margin: 0;
    }

    div {
      height: 200px;
      overflow-y: auto;
    }

    &:hover{
        box-shadow: 2px 2px 5px black;
      }
  }
`;
