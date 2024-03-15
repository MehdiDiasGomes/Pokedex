import { createContext } from 'react'

const InitialState = {
  pokemons: [],
  setPokemons: () => null,

  search: '',
  setSearch: () => null,

  currentPage: 0,
  setcurrentPage: () => null,

  totalPages: 0,
}

const PokemonContext = createContext(InitialState)

export default PokemonContext
