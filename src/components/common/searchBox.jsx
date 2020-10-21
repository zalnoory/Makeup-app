import React, { useState, useEffect } from 'react'
import '../../style/searchBox.css'

class SearchBox extends React.Component {
  state = {
    searchTermValue: '',
  }
  timer = null

  getSearchTermValue = (e) => {
    clearTimeout(this.timer)
    this.setState({ searchTermValue: e.target.value })

    this.timer = setTimeout(
      /*send searchTermValue to parent */
      () => this.props.handleSearchTerm(this.state.searchTermValue),
      500
    )
  }

  // getSearchTermValue = (e) => {
  //   this.setState({ searchTermValue: e.target.value }, () => {
  //     if (this.props.handleSearchTerm) {
  //       this.props.handleSearchTerm(this.state.searchTermValue)
  //     }
  //   })
  // }

  render() {
    const { filterLists } = this.props
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
        value={this.state.searchTermValue}
        onChange={this.getSearchTermValue}
      ></input>
    )
  }
}

export default SearchBox

// return (
//   <input
//     style={{
//       display: 'initial',
//       padding: '1em',
//     }}
//     type="text"
//     spellCheck="false"
//     id="search"
//     placeholder="Search... "
//     value={this.state.searchTermValue}
//     onChange={this.getSearchTermValue}
//   ></input>
// )

// const SearchBox = (props) => {
//   const { searchTerm, handleSearchTerm } = props
//   return (
//     <input
//       style={{
//         display: 'initial',
//         padding: '1em',
//       }}
//       type="text"
//       spellCheck="false"
//       id="search"
//       placeholder="Search... "
//       value={searchTerm}
//       onChange={(e) => handleSearchTerm(e)}
//     ></input>
//   )
// }

// export default SearchBox
