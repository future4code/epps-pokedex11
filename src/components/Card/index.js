import React from "react";
import {useHistory, useParams} from 'react-router-dom';
import { Container } from "./styled";
import {goToPage} from '../../router/Coordinator';

const Card = (props) => {

  const history = useHistory()

  return (
    <Container>
      <div className="img-container"><img src={props.image} alt="pokemon image" /></div>
      <div className="btn-container">
        <button>Adicionar à PokéDex</button>
        <button onClick={() => goToPage(history, '/poke-detail/:pokeName')}>Detalhes</button>
      </div>
    </Container>
  );
};

export default Card;
