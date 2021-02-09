import styled from "styled-components";
import "../../fonts/fonts.css";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 999;

  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  padding: 10px;
  background-color: #cc0000;
  box-shadow: 0px 4px 8px -6px;

  align-items: center;

  .pokedex-btn {
    /* margin-top: 5px; */
    height: 40px;
    width: fit-content;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2) rotate(-7deg);
      transition: all 0.3s ease-in-out;
    }

    button{
      height: 100%;
      background: transparent;
      border: none;
      cursor: pointer;

      &:focus{
        outline: none;
      }
    }

    img {
      height: 100%;
    }
  }

  .title {
    display: flex;
    margin-top: -30px;
    width: 100%;
    justify-content: center;
    h2 {
      font-family: "PokemonFont";
      font-size: 30px;
      letter-spacing: 3px;

      color: #ffcb05;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #003a70;
    }
  }

  .home-btn {
      display: flex;
      justify-content: center;

      button{
      height: 100%;
      background: transparent;
      border: none;
      cursor: pointer;

      font-family: "PokemonFont";
      color: yellow;
      padding: 10px;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #003a70;

      &:focus{
        outline: none
      }
    }
  }
`;
