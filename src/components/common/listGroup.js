import React, { Fragment } from 'react'
import List from './list'
import '../../style/listGroup.css'
import styled from 'styled-components'

const List_grp_Container = styled.div`
  padding-top: 1em;
  padding-right: 16px;
  padding-left: 16px;
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
  padding: 5px 5px;
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
    <List_grp_Container>
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
    </List_grp_Container>
  )
}

export default ListGroup

// const ListGroup = (props) => {
//   const {
//     brands,
//     tags,
//     onBrandSelect,
//     onTagSelect,
//     selectedTag,
//     selectedBrand,
//   } = props

//   return (
//     <div className="list_grp_container">
//       <input type="checkbox" id="brands" />
//       <label htmlFor="brands">Brands</label>

//       <div className="content">
//         <List
//           items={brands}
//           onItemSelect={onBrandSelect}
//           selectedItem={selectedBrand}
//         />
//       </div>
//       <input type="checkbox" id="byTag" />
//       <label htmlFor="byTag">By Tag</label>
//       <div className="content">
//         <List
//           items={tags}
//           onItemSelect={onTagSelect}
//           selectedItem={selectedTag}
//         />
//       </div>
//     </div>
//   )
// }

// export default ListGroup
