const Search = ({ value, onChange, placeholder = 'search ...', children = 'Search' }) => {
  return (
    <label>
      { children }
      <input
        type="text"
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
      />
    </label>
  )
}

export default Search
