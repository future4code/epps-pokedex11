import React from "react";
import {useHistory} from 'react-router-dom'
import { Wrapper } from "./styled";
import headerLogo from "../../images/header-logo.png"
import {goToPage} from '../../router/Coordinator'

export default function Header(props) {

  const history = useHistory()

  return (
    <Wrapper>
      <div className="pokedex-btn">
        <button onClick={() => goToPage(history, '/pokedex')}>
          <img src={headerLogo} alt="pokedex button" />
        </button>
      </div>
      <div className="title">
        <h2>Pokepédia</h2>
      </div>
      <div className="home-btn">
        <button onClick={() => goToPage(history, '/')}>HOME</button>
      </div>
    </Wrapper>
  );
}
