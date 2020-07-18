import React from 'react'
import { Link } from 'react-router-dom'
import { ProductColors } from './product-colors'
import '../../style/modal.css'

class Modal extends React.Component {
  render() {
    const { showModal, onModalClick, product } = this.props
    if (!showModal) {
      return null
    }
    return (
      <div className="p-modal" onClick={() => onModalClick()}>
        <div className="product-image">
          <img
            className="featured-image"
            src={product.api_featured_image}
            alt={product.name}
          />
        </div>
        <div className="details">
          <div className="name1">{product.name}</div>
          <div className="detail">
            {(product.brand || '')
              .toLowerCase()
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ')}
          </div>
          <div className="container" id="color-container">
            {product.product_colors.slice(0, 20).map((color) => (
              <ProductColors
                key={color.hex_value}
                className="page-item"
                color={color.hex_value}
              />
            ))}
          </div>
          <small>
            <Link to={`/product-details/${product.id}`} id="modal-link">
              See full details.
            </Link>
          </small>
        </div>
      </div>
    )
  }
}

export default Modal
