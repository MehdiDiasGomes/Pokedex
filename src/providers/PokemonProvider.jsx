import { useCallback } from 'react'
import PokemonContext from '../contexts/PokemonContext'
import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const PokemonProvider = ({ children, ...props }) => {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPokemon = 470
  const limit = 50
  const totalPages = Math.ceil(totalPokemon / limit)

  const calculStartIndex = useCallback(() => {
    setStartIndex((currentPage - 1) * limit)
  }, [currentPage])

  const fetchData = useCallback(async () => {
    if (search) {
      const URL = import.meta.env.VITE_URL_API + `pokemon?limit=1302`
      const response = await axios.get(URL)
      if (response.data.results)
        return setPokemons(response.data.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        ))
    }

    calculStartIndex()
    const URL = import.meta.env.VITE_URL_API + `pokemon?limit=${limit}&offset=${startIndex}`
    const response = await axios.get(URL)
    if (response.data.results) return setPokemons(response.data.results)
  }, [startIndex, search, currentPage])

  useEffect(() => {
    fetchData()
  }, [startIndex, search, currentPage])

  const value = useMemo(() => {
    return {
      pokemons,
      setPokemons: p => setPokemons(p),
      search,
      setSearch: s => setSearch(s),
      currentPage,
      setCurrentPage: sp => setCurrentPage(sp),
      totalPages,
    }
  }, [pokemons, search, startIndex, currentPage])

  return (
    <PokemonContext.Provider value={value} {...props}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider
