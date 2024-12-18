import React from 'react'
import "./Pokemon.css"
import { Link } from 'react-router-dom'
function Pokemon({name,image,id}) {
  return (
    <div className='pokemon'>
      <Link to={`pokemon/${id}`}>
        <div>{name}</div>
        <div><img className='pokemon-image' src={image} alt="" /></div>
        </Link>
    </div>
  )
}

export default Pokemon