import React from 'react'
import Search from '../Search/Search'
import "./Pokedox.css"
import PokemonList from '../PokemonList/PokemonList'
const Pokedex = () => {
  return (
    <>
    <div className='pokedex-wrapper'>
      <h1 className='pokedex-heading'>Pokedex</h1>
    <Search/>
    <PokemonList/>
    </div>
    <div>
      
    </div>
  


    </>
  )
}

export default Pokedex