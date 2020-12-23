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
          width: '100px',
          height: '100px',
        }}
      />
      <div></div>

      <div style={{ paddingTop: '30px', paddingRight: '10px' }}>
        <SearchBox handleSearchTerm={handleSearchTerm} />
      </div>
    </React.Fragment>
  )
}

export default Header
