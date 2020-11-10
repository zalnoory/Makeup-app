import React from 'react'
import '../../style/searchBox.css'

class SearchBox extends React.Component {
  state = {
    searchTermValue: '',
  }
  timer = null

  getSearchTermValue = (e) => {
    /*set timer to hold off handleSearchTerm() untill user finish typing */
    clearTimeout(this.timer)
    this.setState(
      { searchTermValue: e.target.value },
      () =>
        (this.timer = setTimeout(
          /*send searchTerm value to parent */
          () => this.props.handleSearchTerm(this.state.searchTermValue),
          350
        ))
    )
  }

  searchTermReset = () => {
    this.setState({ searchTermValue: '' })
  }

  render() {
    return (
      <div>
        <input
          style={{
            display: 'initial',
            padding: '1em',
          }}
          type="text"
          spellCheck="false"
          id="search"
          placeholder="Search Makeup... "
          value={this.state.searchTermValue}
          onChange={this.getSearchTermValue}
        ></input>
      </div>
    )
  }
}

export default SearchBox
