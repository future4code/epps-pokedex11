import React, { useState, useEffect } from "react";
import axios from "axios";
import { PokemonsContainer } from "./styled";
import { BASE_URL } from "./../../parameters/API";
import Card from "../../components/Card";
import { Button } from "../../components/GlobalStyleds/GlobalStyleds";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [fullList, setFullList] = useState([]);
  const [searchName, setSearchName] = useState("")
  const [limitSearch, setLimitSearch] = useState("151");

  const getPokemons = async () => {
    try {
      const res = await axios.get(`${BASE_URL}?limit=${limitSearch}`);
      let newArr = res.data.results;
      //   Adicionado Id e link de imagem ao Array de Pokemons
      newArr.forEach((pokemon) => {
        // Colocando a primeira letra maiúscula
        pokemon.name = pokemon.name
          .toLowerCase()
          .split(" ")
          .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
          .join(" ");
        pokemon.id = Number(
          pokemon.url.split("/")[pokemon.url.split("/").length - 2]
        );
        pokemon.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
      });
      setPokemons(newArr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const randomList = () => {
    axios
      .get(`${BASE_URL}?limit=1118`)
      .then((res) => {
        let newArr = res.data.results;
        newArr.forEach((pokemon) => {
          pokemon.name = pokemon.name
            .toLowerCase()
            .split(" ")
            .map(
              (letter) => letter.charAt(0).toUpperCase() + letter.substring(1)
            )
            .join(" ");
          pokemon.id = Number(
            pokemon.url.split("/")[pokemon.url.split("/").length - 2]
          );
          pokemon.imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
        });

        let newList = [];
        let randomIndex = -1;
        let match = -1

        for (let i = 0; i < limitSearch; i++) {
          randomIndex = Math.floor(Math.random() * 1188) + 1;
          console.log(randomIndex)
          match = newList.findIndex(
            (pokemon) => pokemon.id == newArr[randomIndex].id
          );
          while (match > -1) {
            randomIndex = Math.floor(Math.random() * 1188) + 1;
            match = newList.findIndex(
              (pokemon) => pokemon.id == newArr[randomIndex].id
            );
          }
          newList.push(newArr[randomIndex])
        }
        setPokemons(newList)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterPokemons = () => {
    let filteredByName = pokemons.filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(searchName.toLowerCase())
    );
    return filteredByName;
  };

  const filteredPokemons = filterPokemons();

  return (
    <div>
      <PokemonsContainer>
        <div className="filter-container">
          <div className="searchbar">
            <input
              placeholder="Buscar Pokémon"
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <div className="number-filter">
            <input
              type="number"
              min="1"
              placeholder="Escolha de 1 a 1118 Pokémons"
              onChange={(e) => setLimitSearch(e.target.value)}
            />
            <div className="btn-container">
              <Button onClick={() => getPokemons()}>Lista Padrão</Button>
              <Button onClick={() => randomList()}>Lista aleatória</Button>
            </div>
          </div>
        </div>
        <div className="pokemons-list">
          {pokemons.length > 0 &&
            filteredPokemons.map((pokemon) => {
              return (
                <Card
                  key={pokemon.id}
                  pokemonId={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.imgUrl}
                />
              );
            })}
        </div>
      </PokemonsContainer>
    </div>
  );
};

export default HomePage;
