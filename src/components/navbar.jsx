import React from 'react'
import './../style/navbar.css'

const Navbar = (props) => {
  const { images } = props

  return (
    <div className="container">
      <ul className="nav">
        {images.map((image) => (
          <li key={image.id} className=" nav-item">
            <a className="nav-link active" href="#">
              <img
                className="navbar-images"
                src={require(`../images/${image.src}`)}
                alt={image.description}
              />
            </a>
            {image.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar

{
  /* <ul className="nav justify-content">
      {images.map((image) => (
        <li key={image.id} className="ml-0 nav-item">
          <a className="nav-link active" href="#">
            <img
              className="navbar-images"
              src={require(`../images/${image.src}`)}
              alt={image.description}
            />
          </a>
          {image.title}
        </li>
      ))}
    </ul> */
}
