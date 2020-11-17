import React from 'react'
import '../../style/searchBox.css'
import { Redirect } from 'react-router-dom'

class SearchBox extends React.Component {
  state = {
    searchTermValue: '',
    redirect: null,
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
    const { searchTermValue } = this.state

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
          value={searchTermValue}
          onChange={this.getSearchTermValue}
          onBlur={() => this.setState({ searchTermValue: '' })}
        ></input>
      </div>
    )
  }
}

export default SearchBox
