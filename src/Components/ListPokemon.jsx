import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

const ListPokemon = ({ start, end, searchTerm }) => {
  const [pokemons, setPokemons] = useState([])

  const URL = import.meta.env.VITE_URL_API + `pokemon?limit=${end - start}&offset=${start}`

  const fetchData = async () => {
    try {
      const response = await axios.get(URL)
      if (response.data) {
        if (searchTerm)
          return setPokemons(response.data.results.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())))

        setPokemons(response.data.results)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [start, end, searchTerm])

  if (!pokemons) return <p className="absolute bottom-10 right-10 text-3xl text-white">Aucun résultat trouvé.</p>

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
      <ul className="flex justify-center items-center gap-5 p-10 bg-bodyColor lg:w-[65%] sm:w-[85%] flex-wrap rounded-lg">
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
