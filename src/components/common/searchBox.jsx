import React from 'react'
import '../../style/searchBox.css'
const SearchBox = (props) => {
  const { searchTerm, handleSearchTerm } = props
  return (
    <input
      style={{
        display: 'initial',
        padding: '1em',
      }}
      type="text"
      spellCheck="false"
      id="search"
      placeholder="Search... "
      value={searchTerm}
      onChange={handleSearchTerm}
    ></input>
  )
}

export default SearchBox
