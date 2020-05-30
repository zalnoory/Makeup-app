import React from 'react'
import '../../style/list.css'

const List = (props) => {
  const { items, selectedItem, onItemSelect } = props
  return (
    <div className="content ">
      <ul className="list-group list-group-flush">
        {items.sort().map((item) => (
          <li
            key={item}
            className={
              item === selectedItem
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => onItemSelect(item)}
          >
            {`${item
              .toLowerCase()
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ')}`}
            {/* {`${item.charAt(0).toUpperCase() + item.slice(1)}`} */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List

// onClick={() => onItemSelect(item)}
