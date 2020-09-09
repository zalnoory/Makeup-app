import React from 'react'
import { Link } from 'react-router-dom'
import { ProductColors } from './product-colors'
import Modal from './modal'

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
    const { productDisplayItem } = this.props
    const { showModal } = this.state
    const { product } = this.props
    return (
      <React.Fragment>
        <div className="productDisplay-item" style={productDisplayItem}>
          <div className="image-container">
            <Link to={`/product-details/${product.id}`}>
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
          <div className="color-brand-cont">
            <Link to={`/product-details/${product.id}`} id="container-m-link">
              <div>
                {product.product_colors.slice(0, 5).map((color) => (
                  <ProductColors
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
          {/* Modal Component */}
          <Modal
            showModal={showModal}
            onModalClick={this.toggleModal}
            product={product}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Productdisplay
