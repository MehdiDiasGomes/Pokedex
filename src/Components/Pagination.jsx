import React from 'react'
import usePokemon from '../hooks/usePokemon'

const Pagination = () => {
  const { totalPages, setCurrentPage, currentPage, search } = usePokemon()

  const handlePageChange = page => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (search) return null

  return (
    <div>
      <div className="flex justify-center gap-5 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`border-2 rounded-lg border-white w-10 h-10 duration-300 ${
              currentPage === pageNumber ? 'text-black bg-white' : 'text-white bg-transparent'
            } hover:bg-white hover:text-black`}>
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Pagination
