import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

const ListPokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const URL = import.meta.env.VITE_URL_API + 'pokemon?limit=50'

  const fetchData = async () => {
    try {
      const response = await axios.get(URL)
      setPokemons(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  })

  if (!pokemons.results) return null

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
      <ul className="flex justify-center items-center gap-5 p-10 bg-bodyColor w-[65%] flex-wrap rounded-lg">
        {pokemons.results.map((pokemon, index) => (
          <li key={index}>
            <Card name={pokemon.name} url={pokemon.url} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListPokemon