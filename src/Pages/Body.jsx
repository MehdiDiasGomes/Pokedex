import React, { useState } from 'react'
import ListPokemon from '../Components/ListPokemon'
import Pagination from '../Components/Pagination'
import SearchBar from '../Components/SearchBar'
import PokemonProvider from '../providers/PokemonProvider'
import usePokemon from '../hooks/usePokemon'

export default function Body() {
  return (
    <PokemonProvider>
      <div className="mb-24 flex flex-col gap-5">
        <SearchBar />

        <div className="">
          <ListPokemon />
        </div>

        <div className="flex justify-center gap-5">
          <Pagination />
        </div>
      </div>
    </PokemonProvider>
  )
}
