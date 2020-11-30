import React from 'react'
import '../../style/searchBox.css'
import styled from 'styled-components'

const Input = styled.input`
  display: initial;
  height: 20px;
  width: 100%;
  font-weight: 100;
  font-size: 16px;
  font-family: Brandon Text;
  border: 1px solid rgb(179, 175, 175);
  border-radius: 4px;
  outline: none;
  transition: 0.3s;
  cursor: pointer;
  align-self: flex-end;

  :focus {
    border-color: #dbdbdb;
    box-shadow: 0 0 8px 0#dbdbdb;
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
