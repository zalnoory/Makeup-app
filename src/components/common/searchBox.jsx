import React from 'react'
import '../../style/searchBox.css'

class SearchBox extends React.Component {
  state = {
    searchTermValue: '',
    redirect: null,
  }

  getSearchTermValue = (e) => {
    this.setState({ searchTermValue: e.target.value })
  }

  submitSearchTermValue = (e) => {
    /*submit searchTermValue on 'Enter' */
    if (e.key === 'Enter') {
      /*send searchTerm value to parent */
      this.props.handleSearchTerm(this.state.searchTermValue)
      this.setState({ searchTermValue: '' })
    }
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
          onKeyDown={(e) => this.submitSearchTermValue(e)}
          onBlur={() => this.setState({ searchTermValue: '' })}
        ></input>
      </div>
    )
  }
}

export default SearchBox
