import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-direction: column;
  height: 40px;
`

const ProductColors = styled.span`
  height: 16px;
  width: 16px;
  margin: 1.5px;
  background-color: ${(props) => props.color.hex_value};
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: inline-flex;
  text-align: center;

  @media screen and (min-width: 750px) {
    height: 25px;
    width: 25px;
  }
`
const InnerDiv = styled.div`
  display: flex;
  /* flex-flow: row wrap; */
  justify-content: center;
  white-space: nowrap;
`

const ColorName = styled.div`
  font-family: Brandon Text;
  font-weight: 500;
  font-size: 14px;
`

const Colors = (props) => {
  const { color, handleOnMouseLeave, handleOnMouseEnter, isHovering } = props
  return (
    <Wrapper>
      <InnerDiv>
        <ProductColors
          color={color}
          onMouseLeave={handleOnMouseLeave}
          onMouseEnter={handleOnMouseEnter}
        />
      </InnerDiv>
      <InnerDiv>
        {isHovering && <ColorName>{color.colour_name}</ColorName>}
      </InnerDiv>
    </Wrapper>
  )
}

export default Colors
