import React, { useState } from 'react'
import Card from '../Components/Card'
import ListPokemon from '../Components/ListPokemon'
import Pagination from '../Components/Pagination'
import SearchBar from '../Components/SearchBar'

export default function Body() {
  const itemsPerPage = 50
  const totalPokemon = 472
  const totalPages = Math.ceil(totalPokemon / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const handlePageChange = page => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearch = term => {
    setSearchTerm(term)
    setCurrentPage(1)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalPokemon)

  return (
    <div className="mb-24 flex flex-col gap-5">
      <SearchBar onSearch={handleSearch} />

      <div className="">
        <ListPokemon start={startIndex} end={endIndex} searchTerm={searchTerm} />
      </div>

      <div className="flex justify-center gap-5">
        <Pagination currentPage={currentPage} handlePageChange={handlePageChange} totalPages={totalPages} />
      </div>
    </div>
  )
}
