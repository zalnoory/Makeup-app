import React from 'react'
import vecteezyVector from '../../images/vecteezyVector.jpg'
import SearchBox from './searchBox'
import styled from 'styled-components'

const Vector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = (props) => {
  const { handleSearchTerm } = props

  return (
    <React.Fragment>
      <div></div>
      <Vector onClick={(e) => this.disableLink(e)}>
        <a href="https://www.vecteezy.com/free-vector/abc">
          <img
            src={vecteezyVector}
            style={{
              width: '175px',
              height: '175px',
            }}
          ></img>
        </a>
        <p style={{ marginTop: '-50px', color: '#f0f0f0' }}>
          <small>vecteezy</small>
        </p>
      </Vector>
      <div></div>

      <div style={{ paddingTop: '70px' }}>
        <SearchBox handleSearchTerm={handleSearchTerm} />
      </div>
    </React.Fragment>
  )
}

export default Header
