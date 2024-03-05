import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Body from '../Pages/Body'

export default function Card() {
  const [data, setData] = useState()
  const [name, setName] = useState()
  const [img, setImg] = useState()
  const [number, setNumber] = useState(25)

  const URL = import.meta.env.VITE_URL_API + "pokemon/" + number;
  console.log(URL)

  useEffect(() => {
    axios
      .get(URL)
      .then(response => {
        setData(response.data)
        setName(response.data.name)
        setImg(response.data.sprites.front_default)
      })
      .catch(err => {
        window.alert(err)
      })
  }, [])

  return (
    <>
      <a
        href="#"
        className="flex items-center justify-center bg-white rounded-lg duration-300 shadow-shadowCard hover:scale-95">
        <div className="w-52 h-52 flex flex-col p-3 items-center">
          <img src={img} alt={name} />
          <h2 className="text-2xl font-bold">
            {name && name.charAt(0).toUpperCase() + name.slice(1)}
          </h2>
          <button
            className="bg-white"
            onClick={() => {
              console.log(numberOfPokemon)
            }}>
            test
          </button>
        </div>
      </a>
    </>
  )
}
