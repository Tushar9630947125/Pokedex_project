import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PokemonDetails from '../Component/PokemonDetails/PokemonDetails'
import Pokedex from '../Component/Pokedex/Pokedex'

const CustomRoutes = () => {
  return (
    <div>
         <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pokedex/>}/>
        <Route path ='/' element={<PokemonDetails/>}/>
        <Route path ='/pokemon/:id' element={<PokemonDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default CustomRoutes