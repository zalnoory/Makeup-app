import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-direction: column;
  height: 50px;
  width: 30px;
`

const ProductColors = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.color.hex_value};
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
`
const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  padding-top: 5px;
`

const ColorName = styled.div`
  font-family: Brandon Text;
  font-weight: 500;
  font-size: 12px;
`

const Colors = (props) => {
  const { color, handleOnMouseLeave, handleOnMouseEnter, isHovering } = props
  return (
    <Wrapper onMouseLeave={handleOnMouseLeave} onMouseOver={handleOnMouseEnter}>
      <InnerDiv>
        <ProductColors color={color} />
      </InnerDiv>
      <InnerDiv>
        {isHovering && <ColorName>{color.colour_name}</ColorName>}
      </InnerDiv>
    </Wrapper>
  )
}

export default Colors
