import styled from "styled-components";

export const PokemonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;

  .filter-container{

  }

  .pokemons-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
    padding: 15px;
  }
`;