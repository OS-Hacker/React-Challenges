const SearchInput = ({ inputText, setInputText }) => (
  <input
    value={inputText}
    onChange={(e) => setInputText(e.target.value)}
    placeholder="Search..."
  />
);

export default SearchInput;
