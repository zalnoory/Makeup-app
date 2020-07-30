import React from 'react'
import './../style/navbar.css'

const Navbar = (props) => {
  const { images } = props

  return (
    <div className="top-nav-container">
      {/* <ul className="nav-list-inline"> */}
      {images.map((image) => (
        <div key={image.id} className=" div-item">
          {/* <li key={image.id} className=" list-inline-item"> */}
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
      {/* </ul> */}
    </div>
  )
}

export default Navbar

// return (
//   <div className="top-nav-container">
//     <ul className="nav-list-inline">
//       {images.map((image) => (
//         <li key={image.id} className=" list-inline-item">
//           <a className="nav-link active" href="#">
//             <img
//               className="nav-images"
//               src={require(`../images/${image.src}`)}
//               alt={image.description}
//             />
//           </a>
//           {image.title}
//         </li>
//       ))}
//     </ul>
//   </div>
// )

// return (
//   <div className="container">
//     <ul className="nav">
//       {images.map((image) => (
//         <li key={image.id} className=" nav-item">
//           <a className="nav-link active" href="#">
//             <img
//               className="navbar-images"
//               src={require(`../images/${image.src}`)}
//               alt={image.description}
//             />
//           </a>
//           {image.title}
//         </li>
//       ))}
//     </ul>
//   </div>
// )
