import React from 'react'
import { Link } from 'react-router-dom'
import { ProductColors } from './product-colors'
import Modal from './modal'
import styled from 'styled-components'

const ProductDisplayItem = styled.div`
  max-width: 100%;
`

const ImageContainer = styled.div`
  padding-bottom: 1em;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100%;
`

const StyledImg = styled.img`
  display: inline-flex;
  max-width: 100%;
  width: 100%;
  max-height: 300px;
  object-fit: contain;
`

class Productdisplay extends React.Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const { showModal } = this.state
    const { product } = this.props
    return (
      <React.Fragment>
        <ProductDisplayItem>
          <ImageContainer className="image-container">
            <Link to={`/product-details/${product.id}`}>
              <StyledImg
                className="image"
                src={product.api_featured_image}
                alt={product.name}
              />
            </Link>
            <div className="overlay" onClick={this.toggleModal}>
              {' '}
              Quick View
            </div>
          </ImageContainer>
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
        </ProductDisplayItem>
      </React.Fragment>
    )
  }
}

export default Productdisplay
