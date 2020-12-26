import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { ProductColors } from './product-colors'
import Modal from './modal'
import styled from 'styled-components'

const ProductDisplayItem = styled.div`
  max-width: 100%;
  font-weight: 400;
  font-family: Brandon Text;
  position: relative;
  &:hover .overlay {
    opacity: 1;
  }
  &:hover .image {
    opacity: 0.5;
  }
`

const ImageContainer = styled.div`
  transition: 0.5s ease;
  transform: translat(50%, 50%);
  text-align: center;
  bottom: 10%;
  width: 100%;
`

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
`

const Overlay = styled.div`
  background-color: rgba(65, 64, 64, 0.5);
  color: white;
  font-size: 16px;
  bottom: 0px;
  opacity: 0;
`

const StyledLink = styled(Link)`
  color: black !important;
  text-decoration: none !important;
`

const ColorContainer = styled.div`
  margin-top: 10px;
`

const StyledP = styled.p`
  font-size: 12px;
  text-transform: capitalize;
  @media screen and (min-width: 1020px) {
    font-size: 16px;
  }
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

const Productdisplay = (props) => {
  const { product, productsData } = props
  const [isModalVisible, setIsModalVisiblel] = useState(false)

  return (
    <ProductDisplayItem>
      <ImageContainer className="imageContainer">
        <StyledLink to={`/product-details/${product.id}`}>
          <StyledImg
            className="image"
            src={product.api_featured_image}
            alt={product.name}
          />
        </StyledLink>

        <Overlay
          className="overlay"
          isModalVisible={isModalVisible}
          onClick={() => setIsModalVisiblel(!isModalVisible)}
        >
          {' '}
          Quick View
        </Overlay>
      </ImageContainer>
      <StyledLink to={`/product-details/${product.id}`}>
        <ColorContainer>
          <div>
            {product.product_colors.length > 0
              ? product.product_colors
                  .slice(0, 5)
                  .map((color) => (
                    <ProductColors
                      key={color.hex_value}
                      color={color.hex_value}
                    />
                  ))
              : null}
            {product.product_colors.length > 5 && (
              <p>
                <small> More Colors</small>
              </p>
            )}
            <StyledP>{product.brand}</StyledP>
          </div>
        </ColorContainer>
      </StyledLink>

      <Modal
        showModal={isModalVisible}
        setShowModal={setIsModalVisiblel}
        product={product}
        productsData={productsData}
      />
    </ProductDisplayItem>
  )
}

export default Productdisplay

// class Productdisplay extends React.Component {
//   state = {
//     showModal: false,
//     selectedIndex: 0,
//   }

//   toggleModal = () => {
//     this.setState({ showModal: !this.state.showModal })
//   }

//   handleNext = () => {
//     const productsData = this.props
//     let selectedIndex = this.state.SelectedIndex
//     if (selectedIndex >= 0 && selectedIndex < productsData.length) {
//       this.setState({ selectedIndex: productsData + 1 })
//     }
//   }

//   render() {
//     const { showModal } = this.state
//     const { productsData, product } = this.props
//     return (
//       <React.Fragment>
//         <ProductDisplayItem>
//           <ImageContainer>
//             <StyledLink to={`/product-details/${product.id}`}>
//               <StyledImg src={product.api_featured_image} alt={product.name} />
//             </StyledLink>
//             <Overlay onClick={this.toggleModal}> Quick View</Overlay>
//           </ImageContainer>
//           <StyledLink to={`/product-details/${product.id}`}>
//             <ColorContainer>
//               <div>
//                 {product.product_colors.slice(0, 5).map((color) => (
//                   <ProductColors
//                     key={color.hex_value}
//                     color={color.hex_value}
//                   />
//                 ))}
//                 <p>
//                   {product.brand }
//                 </p>
//               </div>
//             </ColorContainer>
//           </StyledLink>
//           {/* Modal Component */}
//           <Modal
//             showModal={showModal}
//             onModalClick={this.toggleModal}
//             product={product}
//             handleNext={this.handleNext}
//             productsData={productsData}
//           />
//         </ProductDisplayItem>
//       </React.Fragment>
//     )
//   }
// }

// export default Productdisplay
