import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { createPortal } from 'react-dom'
import ModalStats from './ModalStats'

const Card = ({ name, type }) => {
  const [pokemonData, setPokemonData] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPokemonData(response.data)
      } catch (error) {
        console.error(error)
      }

      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }

    fetchData()
  }, [name, type, isOpen])

  if (!pokemonData) return null

  const imageUrl = pokemonData.sprites.other['official-artwork'].front_default
  const typePokemon = pokemonData.types[0].type.name

  //Stats
  const id = pokemonData.id
  const hp = pokemonData.stats[0].base_stat
  const atk = pokemonData.stats[1].base_stat
  const def = pokemonData.stats[2].base_stat
  const spAtk = pokemonData.stats[3].base_stat
  const spDef = pokemonData.stats[4].base_stat
  const speed = pokemonData.stats[5].base_stat

  //Abilités
  let ab1 = ''
  let ab2 = ''

  if (pokemonData && pokemonData.abilities && pokemonData.abilities.length >= 2) {
    ab1 = pokemonData.abilities[0].ability.name
    ab2 = pokemonData.abilities[1].ability.name
  }

  return (
    <>
      <button
        className="relative flex cursor-pointer items-center justify-center bg-white rounded-lg duration-300 shadow-shadowCard hover:scale-95"
        onClick={() => setIsOpen(true)}>
        <div className="absolute right-3 top-1">
          <h4 className="text-gray-700">#{id}</h4>
        </div>
        <div className="absolute rounded-tr-xl rounded-tl-xl opacity-10 w-full h-[50%] bottom-0 bg-slate-900"></div>
        <div className="lg:w-52 lg:h-52 sm:w-36 sm:h-36 flex flex-col gap-10 sm:gap-1 p-3 items-center justify-start">
          <img className="lg:w-7/12 sm:w-1/2" src={imageUrl} alt={name} />
          <h3 className="bg-slate-600/55 w-14 flex p-1 justify-center items-center rounded-lg text-white">
            {typePokemon && typePokemon.charAt(0).toUpperCase() + typePokemon.slice(1)}
          </h3>
          <h2 className="text-2xl font-bold">{name && name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        </div>
      </button>

      {isOpen &&
        createPortal(
          <ModalStats
            ab1={ab1}
            ab2={ab2}
            atk={atk}
            def={def}
            spAtk={spAtk}
            spDef={spDef}
            speed={speed}
            hp={hp}
            name={name}
            imageUrl={imageUrl}
            closeModal={() => setIsOpen(false)}
          />,
          document.body
        )}
    </>
  )
}

export default Card
