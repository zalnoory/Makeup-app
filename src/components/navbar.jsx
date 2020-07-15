import React from 'react'
import './../style/navbar.css'

const Navbar = (props) => {
  const { images } = props

  return (
    <div className="top-nav-container">
      {images.map((image) => (
        <div key={image.id} className=" div-item">
          <a className="top-nav-link" href="#">
            <img
              className="nav-images"
              src={require(`../images/${image.src}`)}
              alt={image.description}
            />
          </a>
          <p>{image.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Navbar
