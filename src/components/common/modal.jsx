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
          <div>{product.name}</div>
          <div className="detail">
            {(product.brand || '')
              .toLowerCase()
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ')}
          </div>
          <div className="container">
            {product.product_colors.slice(0, 20).map((color) => (
              <ProductColors
                key={color.hex_value}
                className="page-item"
                color={color.hex_value}
              />
            ))}
          </div>
          <small>
            <Link to={`/product_details/${product.id}`}>
              see full details {product.id}
            </Link>
          </small>
        </div>
      </div>
    )
  }
}

export default Modal

{
  /* <div className="p-modal">
        <div className="product-description" onClick={() => onModalClick()}>
          <img
            className="product-image"
            src={product.api_featured_image}
            alt={product.name}
          />
          <p className="detail">
            <span className="m-2">
              {(product.brand || '')
                .toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
            </span>
            <span>
              {product.product_type.charAt(0).toUpperCase() +
                product.product_type.slice(1)}
            </span>
          </p>
        </div>
      </div> */
}

{
  /* <div>
            <div
              style={{ textalign: 'center' }}
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {product.product_colors.slice(0, 20).map((color) => (
                    <ProductColors
                      key={color.hex_value}
                      className="page-item"
                      color={color.hex_value}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div> */
}
{
  /* </div> */
}
