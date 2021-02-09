import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { goToPage, goBack } from "./Coordinator";
import Header from "../components/Header";
import HomePage from '../pagesTeste/PageHome';
import PokedexPage from '../pagesTeste/PagePokedex';
import PokeDetailPage from '../pagesTeste/PageDetails';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Header 
                        title="Lista de pokemons"
                        BtnPokedex={goToPage}
                    />
                    <HomePage />
                </Route>
                <Route exact path="/poke-detail/:pokeName">
                    <Header 
                        BtnBack={goBack}
                        title=""
                        BtnPokedex={goToPage}
                    />
                    <PokeDetailPage />
                </Route>
                <Route exact path="/pokedex">
                    <Header 
                        BtnHome={goToPage}
                        title="Pokedex"
                    />
                    <PokedexPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router

