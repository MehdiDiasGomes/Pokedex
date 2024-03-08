import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Card = ({ name }) => {
  const [pokemonData, setPokemonData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPokemonData(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [name])

  if (!pokemonData) return null

  const imageUrl = pokemonData.sprites.other['official-artwork'].front_default

  return (
    <div className="relative flex cursor-pointer items-center justify-center bg-white rounded-lg duration-300 shadow-shadowCard hover:scale-95">
      <div className="absolute rounded-ss-full opacity-10 w-full h-[60%] bottom-0 bg-slate-900"></div>
      <div className="lg:w-52 lg:h-52 sm:w-36 sm:h-36 flex flex-col gap-10 sm:gap-3 p-3 items-center justify-end">
        <img className="lg:w-7/12 sm:w-1/2" src={imageUrl} alt={name} />
        <h2 className="text-2xl font-bold">{name && name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      </div>
    </div>
  )
}

export default Card
