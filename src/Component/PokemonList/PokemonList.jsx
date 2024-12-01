import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
const PokemonList = () => {
  const [PokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

   const [PokedexUrl, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon")
   const [nextUrl,setNexturl] =useState('');
   const [prevUrl,setPrevUrl] = useState('');
  async function fetchApi() {
    setIsLoading(true);
    const response = await axios.get(PokedexUrl); //this downloads list of 20 pokemons
    const pokemonResults = response.data.results; // we get the array of pokemon from results   name and url
    console.log(response.data);
    setNexturl(response.data.next)
    setPrevUrl(response.data.previous)
    const pokemonResultspromise = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url)
    );
    console.log(pokemonResultspromise);

    const pokemonData = await axios.all(pokemonResultspromise);
    console.log(pokemonData[0].data.name);
    console.log(pokemonData[0].data.sprites.other.dream_world.front_default);

    const res = pokemonData.map((pokeData) => {
      console.log(pokeData);
      // console.log(pokeData.data.name)
      // console.log(pokeData.data.sprites.other.dream_world.front_default)
      return {
        id: pokeData.data.id,
        name: pokeData.data.name,
        image: pokeData.data.sprites.other
          ? pokeData.data.sprites.other.dream_world.front_default
          : pokeData.data.sprites.front_shiney,
        types: pokeData.data.types,
      };
    });
    console.log(res);
    setPokemonList(res);
    setIsLoading(false);
    //set pokemonData(response.data.results)
  }
  useEffect(() => {
    fetchApi();
  }, [PokedexUrl]);
  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-wrapper ">
        {isLoading
          ? "Loading..."
          : PokemonList.map((p) => (
              <Pokemon name={p.name} image={p.image} key={p.id} />
            ))}
      </div>
      <div className="controls">
        <button  disabled={prevUrl==undefined} onClick={()=> setPokedexUrl(prevUrl)}>Previos</button>
        <button disabled={nextUrl==null }onClick={()=>setPokedexUrl(nextUrl)}>Next</button>
      </div>
    </div>
  );
};

export default PokemonList;
