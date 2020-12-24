import React from 'react'
import vecteezyVector from '../../images/vecteezyVector.jpg'
import SearchBox from './searchBox'
import { useHistory } from 'react-router-dom'

const Header = (props) => {
  const { handleSearchTerm } = props
  const history = useHistory()
  const goHome = () => {
    history.push('/')
  }

  return (
    <React.Fragment>
      <div></div>
      <img
        src={vecteezyVector}
        style={{
          width: '100px',
          height: '100px',
        }}
        onClick={goHome}
      />
      <div></div>

      <div style={{ paddingTop: '30px', paddingRight: '10px' }}>
        <SearchBox handleSearchTerm={handleSearchTerm} />
      </div>
    </React.Fragment>
  )
}

export default Header
