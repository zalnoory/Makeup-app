import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductColors } from './product-colors'
import Modal from './modal'
import styled from 'styled-components'

const ProductDisplayItem = styled.div`
  max-width: 100%;
`

const ImageContainer = styled.div`
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

const Overlay = styled.div`
  position: absolute;
  bottom: 0px;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 16px;
  width: 60%;
  left: 20%;
  z-index: 10;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`

const StyledLink = styled(Link)`
  color: black !important;
  text-decoration: none !important;
`

const ColorContainer = styled.div`
  margin-top: 25px;
`

const Productdisplay = (props) => {
  const { product, productsData } = props
  const [isModalVisible, setIsModalVisiblel] = useState(false)
  const [selectIndex, setSelectIndex] = useState(0)

  // const handleNext = () => {
  //   const productsData = this.props
  //   let selectedIndex = this.state.SelectedIndex
  //   if (selectedIndex >= 0 && selectedIndex < productsData.length) {
  //     this.setState({ selectedIndex: productsData + 1 })
  //   }
  // }

  return (
    <React.Fragment>
      <ProductDisplayItem>
        <ImageContainer>
          <StyledLink to={`/product-details/${product.id}`}>
            <StyledImg src={product.api_featured_image} alt={product.name} />
          </StyledLink>
          <Overlay
            isModalVisible={isModalVisible}
            onClick={() => setIsModalVisiblel(!isModalVisible)}
          >
            {' '}
            Quick View
          </Overlay>
          {/* <Overlay onClick={this.toggleModal}> Quick View</Overlay> */}
        </ImageContainer>
        <StyledLink to={`/product-details/${product.id}`}>
          <ColorContainer>
            <div>
              {product.product_colors.slice(0, 5).map((color) => (
                <ProductColors key={color.hex_value} color={color.hex_value} />
              ))}
              <p>
                {(product.brand || '')
                  .toLowerCase()
                  .split(' ')
                  .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}{' '}
                {product.product_type.charAt(0).toUpperCase() +
                  product.product_type.slice(1)}
              </p>
            </div>
          </ColorContainer>
        </StyledLink>
        {/* Modal Component */}

        <Modal
          showModal={isModalVisible}
          setShowModal={setIsModalVisiblel}
          product={product}
          productsData={productsData}
        />
      </ProductDisplayItem>
    </React.Fragment>
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
//                   {(product.brand || '')
//                     .toLowerCase()
//                     .split(' ')
//                     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//                     .join(' ')}{' '}
//                   {product.product_type.charAt(0).toUpperCase() +
//                     product.product_type.slice(1)}
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
