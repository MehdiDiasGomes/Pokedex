import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Rechercher par nom..."
        className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
