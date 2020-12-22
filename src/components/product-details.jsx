import React from 'react'
import axios from 'axios'
import Loader from './common/loader'
// import { ProductColors } from './common/product-colors'

import styled from 'styled-components'
import Colors from './common/colors-component'

const ProdDetailsCont = styled.div`
  font-family: Brandon Text;
  display: flex;
  flex-direction: column;
  border: 1px solid gold;
  padding: 25px;
`

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  border: 1px solid red;
  justify-content: center;
`

const ProdImage = styled.img`
  width: 100%;
  max-width: 350px;
  max-height: 350px;
`

const ProductDetail = styled.div`
  padding-top: 50px;
  border: 1px solid red;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Name = styled.div`
  font-size: 18px;
  text-transform: capitalize;
  &.brand {
    font-size: 16px;
  }
`

const ParagraphContainer = styled.div`
  padding-top: 30px;
  font-size: 18px;
  text-align: left;
`

const Row = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid gold;
`

const FlexColumn = styled.div`
  display: inline-block;
  position: relative;
`

const FlexGrid = styled.div`
  text-align: left;
  font-size: 16px;
`

class ProductDetails extends React.Component {
  state = {
    product: {
      product_colors: [],
      isHovered: {},
    },
  }

  async componentDidMount() {
    const { productId } = this.props.match.params
    await axios(
      `https://zahrah-products.s3.us-east-2.amazonaws.com/products.json`
    ).then((res) => {
      const product = res.data.products.find(
        (product) => product.id == productId
      )

      this.setState({ product })

      // const product = res.data.products.filter((product) => {
      //   if (product.id == productId) {
      //     console.log('found it')
      //     return product
      //   }
      // })
      // this.setState({ product: product[0] })
    })
  }

  /* using the callBack function of setState to update state (the better way in updating state)*/

  handleOnMouseEnter = (index) => {
    this.setState((prevState) => ({
      isHovered: { ...prevState.isHovered, [index]: true },
    }))
  }

  // handleOnMouseLeave = (index) => {
  //   this.setState((prevState) => {
  //     return { isHovered: { ...prevState.isHovered, [index]: false } }
  //   })
  // }

  handleOnMouseLeave = (index) => {
    this.setState({ ...this.state, isHovered: { [index]: false } })
  }

  render() {
    if (this.state.product === {}) {
      return <Loader />
    }

    const { product, isHovered } = this.state
    return (
      <ProdDetailsCont>
        <div>
          <ImageContainer>
            <ProdImage src={product.api_featured_image} alt={product.name} />
          </ImageContainer>
          <ProductDetail>
            <Name className="brand">{product.brand}</Name>
            <Name>{product.name}</Name>
            <FlexGrid>
              <Row>
                {product && product.product_colors.length > 0
                  ? product.product_colors.map((color, index) => (
                      <FlexColumn>
                        <Colors
                          key={index}
                          color={color}
                          handleOnMouseEnter={() =>
                            this.handleOnMouseEnter(index)
                          }
                          handleOnMouseLeave={() =>
                            this.handleOnMouseLeave(index)
                          }
                          isHovering={isHovered && isHovered[index]}
                        />
                      </FlexColumn>
                    ))
                  : null}
              </Row>
              <p className="price"> ${product.price}</p>
            </FlexGrid>
          </ProductDetail>
        </div>
        <ParagraphContainer>
          <p>Details:</p>
          <p dangerouslySetInnerHTML={{ __html: product.description }} />
        </ParagraphContainer>
      </ProdDetailsCont>
    )
  }
}

export default ProductDetails
