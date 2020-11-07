import React from 'react'
import styled from 'styled-components'

export const DisplayTime = () => {
  const date = new Date().getFullYear()
  return (
    <div>
      <div>Contact: Zahrah Alnoory (214) 335-3849</div>
      <div>&copy; Zahrah Alnoory {date}</div>
    </div>
  )
}

// export default DisplayTime
