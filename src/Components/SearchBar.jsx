const SearchBar = ({ onSearch }) => {

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        onChange={(e) => onSearch(e)}
        placeholder="Rechercher par nom..."
        className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
