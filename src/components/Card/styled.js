import styled from 'styled-components';

import "../../fonts/fonts.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;

  width: 250px;
  height: 300px;
  border: 1px solid black;
  color: #000;
  box-shadow: 5px 5px 6px -3px #000;
  border-radius: 5px;

  .label-container {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #cc0000;

    h2 {
      font-family: "PokemonFont";
      margin-top: -15px;
      color: #ffcb05;
      font-size: 22px;
      letter-spacing: 4px;
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: #003a70;
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: #3d7dca;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .btn-container {
    button {
      height: 2rem;
      width: 100%;
      background-color: #cc0000;
      font-weight: bold;
      font-size: 14px;
      color: #ffcb05;
      letter-spacing: 1px;
      border: 1px solid #3d7dca;

      outline: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #cc0000;
        background-color: #ffcb05;
        transition: all 0.3s ease-in-out;
      }
    }
    /* button:nth-child(1) {
      border-radius: 0 0 0 5px;
    } */
    button:nth-child(2) {
      border-radius: 0 0 5px 5px;
    }
  }
`;