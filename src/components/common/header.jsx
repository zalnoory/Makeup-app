import React from 'react'
import vecteezyVector from '../../images/vecteezyVector.jpg'
import SearchBox from './searchBox'

const Header = (props) => {
  const { handleSearchTerm } = props
  return (
    <React.Fragment>
      <div></div>
      <img
        src={vecteezyVector}
        style={{
          width: '175px',
          height: '175px',
        }}
      />
      <div></div>

      <div style={{ paddingTop: '70px' }}>
        <SearchBox handleSearchTerm={handleSearchTerm} />
      </div>
    </React.Fragment>
  )
}

export default Header
