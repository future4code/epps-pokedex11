import React from "react";
import { Wrapper } from "./styled";
import headerLogo from "../../images/header-logo.png"

export default function Header() {
  return (
    <Wrapper>
      <div className="pokedex-btn">
        <img src={headerLogo} alt="pokedex button" />
      </div>
      <div className="title">
        <h2>Pokepédia</h2>
      </div>
    </Wrapper>
  );
}
