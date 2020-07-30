import React from 'react'
import { Link } from 'react-router-dom'
import './../style/navbar.css'

const Navbar = (props) => {
  const { images } = props

  return (
    <div className="top-nav-container">
      {images.map((image) => (
        <div key={image.id} className=" div-item">
          <Link to={`/category/${image.title}`} className="top-nav-link">
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

// return (
//   <div className="top-nav-container">

//     {images.map((image) => (
//       <div key={image.id} className=" div-item">

//         <a className="top-nav-link" href="#">
//           <img
//             className="nav-images"
//             src={require(`../images/${image.src}`)}
//             alt={image.description}
//           />
//         </a>
//         <p>{image.title}</p>
//       </div>
//     ))}

//   </div>
// )
