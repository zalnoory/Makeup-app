import React from 'react'
import { Link } from 'react-router-dom'
import { ProductColors } from './product-colors'
import Modal from './modal'
// import '../../style/productdisplay.css'

class Productdisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const { showModal } = this.state
    const { product } = this.props
    return (
      <div className="discrip">
        <div className="image-container">
          <Link to={`/product-details/${product.id}`} className="details-link">
            <img
              className="image"
              src={product.api_featured_image}
              alt={product.name}
            />
          </Link>
          <div className="overlay" onClick={this.toggleModal}>
            {' '}
            Quick View
          </div>
        </div>
        <div id="container-m">
          <Link to={`/product-details/${product.id}`} id="container-m-link">
            <div className="container m-2">
              {product.product_colors.slice(0, 5).map((color) => (
                <ProductColors
                  className="page-item"
                  key={color.hex_value}
                  color={color.hex_value}
                />
              ))}
              <p className="p-3">
                {(product.brand || '')
                  .toLowerCase()
                  .split(' ')
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}{' '}
                {product.product_type.charAt(0).toUpperCase() +
                  product.product_type.slice(1)}
              </p>
            </div>
          </Link>
        </div>
        <Modal
          showModal={showModal}
          onModalClick={this.toggleModal}
          product={product}
        />
      </div>
    )
  }
}

export default Productdisplay

// return (
//   <li
//     className="list-inline-item m-2"
//     style={{
//       cursor: 'pointer',
//     }}
//   >
//     {/* <div className="container"> */}
//     <div className="image-container">
//       <img
//         className="image m-1"
//         src={product.api_featured_image}
//         alt={product.name}
//         onClick={this.toggleModal}
//       />
//       <div className="overlay" onClick={this.toggleModal}>
//         {' '}
//         Quick View
//       </div>
//     </div>
//     <div>
//       <div className="container">
//         {product.product_colors.slice(0, 5).map((color) => (
//           <ProductColors
//             key={color.hex_value}
//             className="page-item"
//             color={color.hex_value}
//           />
//         ))}
//         <p>
//           {(product.brand || '')
//             .toLowerCase()
//             .split(' ')
//             .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//             .join(' ')}{' '}
//           {product.product_type.charAt(0).toUpperCase() +
//             product.product_type.slice(1)}
//         </p>
//       </div>
//     </div>
//     {/* </div> */}

//     {/* Modal  */}
//     <Modal
//       showModal={showModal}
//       onModalClick={this.toggleModal}
//       product={product}
//     />
//   </li>
// )
