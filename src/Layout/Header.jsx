import React from 'react'
import { CgPokemon } from 'react-icons/cg'

export default function Header() {
  return (
    <div className="">
      <div>
        <div className="flex justify-center gap-2 font-bold p-10">
          <CgPokemon className=" text-7xl text-white" />
          <h1 className="text-5xl text-white font-titrePok tracking-widest">
            Pokédex
          </h1>
        </div>
      </div>
    </div>
  )
}
