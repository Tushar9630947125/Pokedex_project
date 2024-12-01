import React from 'react'
import "./App.css"
import Pokedex from './Component/Pokedex/Pokedex'
import PokemonList from './Component/PokemonList/PokemonList'
const App = () => {
  return (
    <div>
        <Pokedex/>
        <PokemonList/>
    </div>
  )
}

export default App