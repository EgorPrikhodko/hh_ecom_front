function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Поиск товаров..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search"
    />
  );
}

export default SearchBar;