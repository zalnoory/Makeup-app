import React from 'react'
import '../../style/searchBox.css'
import styled from 'styled-components'

const Input = styled.input`
  height: 50px;
  font-size: 25px;
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  outline: none;
  transition: 0.3s;
  cursor: pointer;
  align-self: flex-end;
  display: initial;

  :focus {
    border-color: #4d4e4e;
    box-shadow: 0 0 8px 0 #4d4e4e;
  }
`

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
        <Input
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
        />
      </div>
    )
  }
}

export default SearchBox
