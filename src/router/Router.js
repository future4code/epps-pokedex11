import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { goToPage, goBack } from "./Coordinator";
import Coordinator from '../router/Coordinator'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Coordinator 
                        title="Lista de pokemons"
                        BtnPokedex={goToPage}
                    />
                    {/* <HomePage /> */}
                </Route>
                <Route exact path="/poke-detail/:pokeName">
                    <Coordinator 
                        BtnBack={goBack}
                        title=""
                        BtnPokedex={goToPage}
                    />
                   {/*  <PokeDetailPage /> */}
                </Route>
                <Route exact path="/pokedex">
                    <Coordinator 
                        BtnHome={goToPage}
                        title="Pokedex"
                    />
                   {/*  <PokedexPage /> */}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router

