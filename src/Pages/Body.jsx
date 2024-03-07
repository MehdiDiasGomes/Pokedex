import React, { useState } from 'react';
import Card from '../Components/Card';
import ListPokemon from '../Components/ListPokemon';

export default function Body() {
  const itemsPerPage = 50;
  const totalPokemon = 500;
  const totalPages = Math.ceil(totalPokemon / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalPokemon);

  return (
    <div className="mb-24 flex flex-col gap-5">
      <div className="">
        <ListPokemon start={startIndex} end={endIndex} />
      </div>

      <div className="flex justify-center gap-5">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`border-2 rounded-lg border-white w-10 h-10 duration-300 ${
              currentPage === page ? 'text-black bg-white' : 'text-white bg-transparent'
            } hover:bg-white hover:text-black`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
