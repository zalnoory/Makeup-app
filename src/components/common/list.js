import React from 'react'
const List = (props) => {
  const { items, selectedItem, onItemSelect } = props
  return (
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
  )
}

export default List

// onClick={() => onItemSelect(item)}
