import React from 'react'
import { Link } from 'react-router-dom'
import './../style/navbar.css'

const Navbar = (props) => {
  const { images, onCategorySelect } = props

  return (
    <div className="top-nav-container">
      {images.map((image) => (
        <div
          className=" div-item"
          key={image.id}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            onCategorySelect(image.title)
          }}
        >
          <Link to={`/category/${image.title}`}>
            <img
              className="nav-images"
              src={require(`../images/${image.src}`)}
              alt={image.description}
            />
          </Link>
          <p>
            {image.title
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ')}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Navbar
