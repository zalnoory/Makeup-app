import React from 'react'
import List from './list'
import '../../style/listGroup.css'
import styled from 'styled-components'

const ListGrpContainer = styled.div`
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLabel = styled.label`
  font-family: Brandon Text;
  font-weight: 500;
  position: relative;
  display: block;
  padding: 2px 10px;
  cursor: pointer;
  font-size: 16px;
  white-space: nowrap;
  width: 100%;
  color: rgba(0, 0, 0, 0.863);
  border-bottom: 1px solid rgb(179, 175, 175);
  &::after {
    content: '+';
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    right: 10px;
    top: 4px;
  }
`

const StyledContent = styled.div`
  background: white;
  padding: 5px 0px;
  border: 0px;
  margin: 0 0 1px 0;
  border-radius: 3px;
`

const ListGroup = (props) => {
  const {
    brands,
    tags,
    onBrandSelect,
    onTagSelect,
    selectedTag,
    selectedBrand,
  } = props

  return (
    <ListGrpContainer>
      <input type="checkbox" id="brands" />
      <StyledLabel htmlFor="brands">Brands</StyledLabel>

      <StyledContent className="content">
        <List
          items={brands}
          onItemSelect={onBrandSelect}
          selectedItem={selectedBrand}
        />
      </StyledContent>
      <input type="checkbox" id="byTag" />
      <StyledLabel htmlFor="byTag">By Tag</StyledLabel>
      <StyledContent className="content">
        <List
          items={tags}
          onItemSelect={onTagSelect}
          selectedItem={selectedTag}
        />
      </StyledContent>
    </ListGrpContainer>
  )
}

export default ListGroup
