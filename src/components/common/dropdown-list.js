import React from 'react'
import styled from 'styled-components'

const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 400;
  font-family: Brandon Text;
  font-size: 1rem;
  color: black;
  background: #ffffff;
`
const DropDownListContainer = styled.div``
const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-right: 1em;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: black;
  font-size: 1rem;
  font-weight: 400;
  font-family: Brandon Text;
  &:first-child {
    padding-top: 0.8em;
  }
`
const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`

const DropList = (props) => {
  const { items, selectedItem, onItemSelect, name } = props
  return (
    <React.Fragment>
      <DropDownHeader>{name}</DropDownHeader>
      <DropDownListContainer>
        <DropDownList>
          {items.sort().map((item) => (
            <ListItem key={item} onClick={() => onItemSelect(item)}>
              {`${item
                .toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}`}
            </ListItem>
          ))}
        </DropDownList>
      </DropDownListContainer>
    </React.Fragment>
  )
}

export default DropList
