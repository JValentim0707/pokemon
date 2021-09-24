import React from 'react'
import { getAll } from "../api/pokemon";

const Pokemons = (props) => {
    const get = async () => {
        const pokemon = await getAll()
        return pokemon
    }
    // console.log(this.pokemon)
    get()
   return (
       <div>
           {/* <h1>Pokemons</h1> */}
       </div>
   ) 
}

export default Pokemons