import React from 'react'
import { Link } from 'react-router-dom'
// import { ProductColors } from './product-colors'
import styled from 'styled-components'

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  z-index: 1010;
  background: rgb(0, 0, 0);
  background: rgba(241, 241, 241, 0.9);
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Brandon Text;
  font-weight: 200;
`

const ImageContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 20px;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`

const Paragrh1 = styled.p`
  font-size: 25px;
`

const Paragrh2 = styled.p`
  font-size: 20px;
  text-transform: capitalize;
`

const ProductColors = styled.span`
  height: 10px;
  width: 10px;
  margin: 2px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: inline-block;
  text-align: center;
  @media screen and (min-width: 1020px) {
    height: 16px;
    width: 16px;
  }
`

const Modal = (props) => {
  const { showModal, setShowModal, product } = props
  if (!showModal) {
    return null
  }
  return (
    <ModalContainer
      showModal={showModal}
      onClick={() => setShowModal(!showModal)}
    >
      <ImageContainer>
        <img
          style={{ maxWidth: '450px', maxHeight: '450px', width: '100%' }}
          src={product.api_featured_image}
          alt={product.name}
        />
      </ImageContainer>
      <DetailsContainer>
        <Paragrh1>{product.name}</Paragrh1>
        <Paragrh2>{product.brand}</Paragrh2>
        <div>
          {product.product_colors.slice(0, 20).map((color) => (
            <ProductColors
              key={color.hex_value}
              className="page-item"
              color={color.hex_value}
            />
          ))}
        </div>
        <small>
          <Link
            to={`/product-details/${product.id}`}
            style={{ fontSize: '16px', color: 'navy' }}
          >
            See Full Details.
          </Link>
        </small>
      </DetailsContainer>
    </ModalContainer>
  )
}

export default Modal
