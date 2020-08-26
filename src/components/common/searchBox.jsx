import React from 'react'
import '../../style/searchBox.css'
const SearchBox = (props) => {
  const { searchTerm, handleSearchTerm } = props
  return (
    <input
      style={{
        display: 'initial',
      }}
      type="text"
      id="search"
      placeholder="Search... "
      value={searchTerm}
      onChange={handleSearchTerm}
    ></input>
  )
}

export default SearchBox
