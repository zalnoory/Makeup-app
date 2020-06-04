import React from 'react'
import './../style/navbar.css'

const Navbar = (props) => {
  const { images } = props

  return (
    <ul className="nav justify-content-right">
      {images.map((image) => (
        <li key={image.id} className="nav-item m-0">
          <a className="nav-link active" href="#">
            <img
              src={require(`../images/${image.src}`)}
              alt={image.description}
            />
          </a>
          {image.title}
        </li>
      ))}
    </ul>
  )
}

export default Navbar
