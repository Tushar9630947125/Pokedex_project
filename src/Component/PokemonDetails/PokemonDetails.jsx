import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./PokemonDetail.css"
import { FaHome } from "react-icons/fa";

const PokemonDetails = () => {
  let [pokemon, setPokemon] = useState([]);
  const { id } = useParams();

  async function downloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response.data);
    setPokemon({
      image: response.data.sprites.other.dream_world.front_default,
      name: response.data.name,
      weigth: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name),
    });
  }

  useEffect(() => {
    downloadPokemon();
  }, []);

  return (
    <div className="main-head">
      <div className="head">
        <h1 className="pokedex-heading">
          <Link className="pokedex-heading"  to="/"><FaHome /> Pokedex</Link>
        </h1>
      </div>
      <div className="main-2">
      <img src={pokemon.image} alt="" />
       <h1 >NAme:{pokemon.name}</h1>
      <div>Height :<span>{pokemon.height}</span> </div>
      <div><h4>Weight:{pokemon.weight}</h4></div>
      <div>
        {pokemon.types && pokemon.types.map((t) => <div key={t}>Type : {t}</div>)}
      </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
