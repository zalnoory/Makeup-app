import React, { Fragment } from 'react'
import List from './list'
import '../../style/listGroup.css'

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
    <React.Fragment>
      <input type="checkbox" id="brands" />
      <label htmlFor="brands">Brands</label>
      <List
        items={brands}
        onItemSelect={onBrandSelect}
        selectedItem={selectedBrand}
      />

      <input type="checkbox" id="byTag" />
      <label htmlFor="byTag">By Tag</label>
      <List
        items={tags}
        onItemSelect={onTagSelect}
        selectedItem={selectedTag}
      />
    </React.Fragment>
  )
}

export default ListGroup
