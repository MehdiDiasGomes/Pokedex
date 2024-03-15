import usePokemon from "../hooks/usePokemon";

const SearchBar = () => {

  const {search, setSearch} = usePokemon()

  return (
    <div className="flex gap-5 items-center justify-center">
      <input
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher par nom..."
        className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
      />
      <button className="border-2 border-gray-300 bg-white hover:bg-gray-200 duration-200 rounded-md px-3 py-2" onClick={() => {setSearch('')} }>Effacer</button>
    </div>
  );
};

export default SearchBar;
