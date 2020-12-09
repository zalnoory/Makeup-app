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
        >
          {`${item
            .toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}`}
        </li>
      ))}
    </ul>
  )
}

export default List
