import React, { Fragment } from 'react'
import '../../style/listGroup.css'

// displaying Item (Filtering).
const ListGroup = (props) => {
  const { items, onItemSelect, selectedItem } = props

  return (
    <React.Fragment>
      <input type="checkbox" id="accord1" />
      <label for="accord1">Brands</label>

      <div className="content">
        <ul className="list-group">
          {items.map((item) => (
            <li
              key={item}
              className={
                item === selectedItem
                  ? 'list-group-item active'
                  : 'list-group-item'
              }
              onClick={() => onItemSelect(item)}
            >
              {`${item.charAt(0).toUpperCase() + item.slice(1)}`}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default ListGroup
