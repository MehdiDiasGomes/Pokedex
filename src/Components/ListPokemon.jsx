import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

const ListPokemon = ({ start, end }) => {
  const [pokemons, setPokemons] = useState([])

  const URL = import.meta.env.VITE_URL_API + `pokemon?limit=${end - start}&offset=${start}`

  const fetchData = async () => {
    try {
      const response = await axios.get(URL)
      setPokemons(response.data.results)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [start, end])

  if (!pokemons.length) return null

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
      <ul className="flex justify-center items-center gap-5 p-10 bg-bodyColor w-[65%] flex-wrap rounded-lg">
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Card name={pokemon.name} url={pokemon.url} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListPokemon
