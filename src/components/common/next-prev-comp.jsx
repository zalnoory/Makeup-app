import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  padding: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  font-family: Brandon Text;
`

const Prev = styled.div``

const Next = styled.div``

const NextPrevComp = (props) => {
  const { filtered, currentPage, pageSize, handleNextBack } = props
  const pagesCount = Math.ceil(filtered.length / pageSize)

  return (
    <ButtonContainer id="ButtonContainer">
      {currentPage > 1 ? (
        <Prev onClick={() => handleNextBack('back')}>&laquo; Previous</Prev>
      ) : null}
      <div></div>

      {currentPage >= 1 && currentPage < pagesCount ? (
        <Next onClick={() => handleNextBack('next')}>Next &raquo;</Next>
      ) : null}
    </ButtonContainer>
  )
}

export default NextPrevComp
