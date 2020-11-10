import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  cursor: pointer;
  align-self: center;
`

const Prev = styled.div`
  padding-right: 100px;
  padding-bottom: 30px;
`

const Next = styled.div`
  padding-left: 100px;
  padding-bottom: 30px;
`

const NextPrevComp = (props) => {
  const { filtered, currentPage, pageSize, handleNextBack } = props
  const pagesCount = Math.ceil(filtered.length / pageSize)

  return (
    <ButtonContainer id="ButtonContainer ">
      {currentPage > 1 ? (
        <Prev onClick={() => handleNextBack('back')}>&laquo; Previous</Prev>
      ) : null}
      {currentPage >= 1 && currentPage < pagesCount ? (
        <Next onClick={() => handleNextBack('next')}>Next &raquo;</Next>
      ) : null}
    </ButtonContainer>
  )
}

export default NextPrevComp
