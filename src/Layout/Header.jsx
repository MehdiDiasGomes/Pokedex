import React from 'react'
import { CgPokemon } from 'react-icons/cg'

export default function Header() {
  return (
    <div className=''>

      <div>
        <div className="flex justify-center items-center gap-2 font-bold p-10 text-Primar">
          <CgPokemon className=" text-6xl text-white" />
          <h1 className="text-5xl text-white">Pokédex</h1>
        </div>
      </div>

    </div>
  )
}
