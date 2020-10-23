import React, { useState, useEffect } from 'react'
import '../../style/searchBox.css'

// class SearchBox extends React.Component {
//   state = {
//     searchTerm: '',
//   }
//   timer = null

//   getSearchTermValue = (e) => {
//     /*set timer to hold off handleSearchTerm() untill user finish typing */
//     clearTimeout(this.timer)
//     this.setState({ searchTerm: e.target.value })
//     this.timer = setTimeout(
//       /*and then send searchTermValue to parent */
//       () => this.props.handleSearchTerm(this.state.searchTerm),
//       500
//     )
//   }

//   // getSearchTermValue = (e) => {
//   //   this.setState({ searchTermValue: e.target.value }, () => {
//   //     if (this.props.handleSearchTerm) {
//   //       this.props.handleSearchTerm(this.state.searchTermValue)
//   //     }
//   //   })
//   // }

//   render() {
//     const { filterLists } = this.props
//     return (
//       <input
//         style={{
//           display: 'initial',
//           padding: '1em',
//         }}
//         type="text"
//         spellCheck="false"
//         id="search"
//         placeholder="Search... "
//         value={this.state.searchTerm}
//         onChange={this.getSearchTermValue}
//       ></input>
//     )
//   }
// }

// export default SearchBox

/*Hooks way */
const SearchBox = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    /*set timer to hold off handleSearchTerm() untill user finish typing */
    const timer = setTimeout(
      /*and then send searchTermValue to parent */
      () => props.handleSearchTerm(searchTerm),
      500
    )
    return () => clearTimeout(timer)
  }, [searchTerm])

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
      onChange={(event) => setSearchTerm(event.target.value)}
    ></input>
  )
}

export default SearchBox

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
