import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 400px;
  border: 1px solid black;
  color: #000;
  box-shadow: 5px 5px 6px -3px #000;
  border-radius: 5px;

  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background-color: #003a70;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .btn-container {
    button {
      height: 2rem;
      width: 50%;
      background-color: #cc0000;
      color: yellow;
      letter-spacing: 1px;
      border: 1px solid #000;

      outline: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #cc0000;
        background-color: yellow;
        transition: all 0.3s ease-in-out;
      }
    }
    button:nth-child(1) {
      border-radius: 0 0 0 5px;
    }
    button:nth-child(2) {
      border-radius: 0 0 5px 0;
    }
  }
`;