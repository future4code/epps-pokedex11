import styled from "styled-components";

export const ContainerPokemonDetails = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 100px;
  cursor: default;
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
  h2 {
    text-align: center;
    font-family: "PokemonFont";
    color: #ffcb05;
    font-size: 40px;
    letter-spacing: 3px;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: #003a70;
    margin: 0;
  }
`;

export const ContainerContentPokemon = styled.div`
  display: flex;
  width: 850px;
  max-width: calc(100vw - 20px);
  justify-content: space-evenly;
  height: 60vh;
  flex-wrap: wrap;
  gap: 10px;
  color: #ffcb05;
  div,
  img {
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
      transition: all 0.3s ease-in-out;
      &:hover {
        box-shadow: 2px 2px 5px black;
        transition: all 0.3s ease-in-out;
      }
    }
    @media screen and (max-width: 619px) {
      flex-direction: row;
    }
  }
  .stats {
    background-color: #cc0000;
    width: 300px;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 2px 2px 5px black;
      transition: all 0.3s ease-in-out;
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
    height: 100px;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 2px 2px 5px black;
      transition: all 0.3s ease-in-out;
    }
    .type-img {
      height: 100px;
    }
  }
  .moves {
    height: 320px;
    background-color: #cc0000;
    h2 {
      margin: 0;
    }
    div {
      height: 200px;
      overflow-y: auto;

      /* width */
      ::-webkit-scrollbar {
        width: 15px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
        background-color: #3d7dca;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #ffcb05;
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #cc0000;
      }
    }
    &:hover {
      box-shadow: 2px 2px 5px black;
    }
  }
`;
