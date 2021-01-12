import React from 'react'
import '../../style/list.css'

const List = (props) => {
  const { items, selectedItem, onItemSelect } = props
  return (
    <ul className="list-group list-group-flush">
      {items.sort().map((item) => (
        <li
          key={item}
          className={
            item === selectedItem
              ? 'list-group-item active '
              : 'list-group-item border-0'
          }
          onClick={() => onItemSelect(item)}
          style={{ textTransform: 'capitalize' }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default List
