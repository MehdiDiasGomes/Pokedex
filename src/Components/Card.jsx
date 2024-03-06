import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { createPortal } from 'react-dom'
import { Children } from 'react'

const Card = ({ name, url }) => {
  const [pokemon, setPokemon] = useState()
  const [isOpen, setIsOpen] = useState(false)

  const handleChangeIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      setPokemon(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!pokemon) return null

  return (
    <>
      {isOpen &&
        createPortal(
          <div className="p-10 bg-white absolute z-50">Modal</div>,
          document.body
        )}
      <div
        onClick={() => handleChangeIsOpen}
        className="flex cursor-pointer items-center justify-center bg-white rounded-lg duration-300 shadow-shadowCard hover:scale-95">
        <div className="w-52 h-52 flex flex-col gap-10 p-3 items-center justify-end">
          <img
            className="w-7/12"
            src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${String(
              pokemon.id
            ).padStart(3, '0')}.png`}
            alt={name}
          />
          <h2 className="text-2xl font-bold">
            {name && name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
        </div>
      </div>
    </>
  )
}

export default Card
