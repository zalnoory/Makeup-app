import React from 'react'
import axios from 'axios'
import Loader from './common/loader'
import { ProductColors } from './common/product-colors'
import styled from 'styled-components'

const ProdDetailsCont = styled.div`
  font-family: Brandon Text;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 40px;
  padding-left: 40px;
  padding-right: 20px;
`

const ImageContainer = styled.div`
  display: flex;
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  vertical-align: top;
  padding-top: 10px;
`

const ProdImage = styled.img`
  width: 100%;
  max-width: 350px;
  max-height: 350px;
`

const ProductDetail = styled.div`
  padding-top: 100px;
  font-size: 18px;
`

const Name = styled.p`
  font-size: 20px;
`

const ParagraphContainer = styled.div`
  padding-top: 30px;
  font-size: 18px;
`

class ProductDetails extends React.Component {
  state = {
    product: {
      product_colors: [],
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

  render() {
    if (this.state.product === {}) {
      return <Loader />
    }

    const { product } = this.state
    return (
      <ProdDetailsCont>
        <div>
          <ImageContainer>
            <ProdImage src={product.api_featured_image} alt={product.name} />
          </ImageContainer>
          <ProductDetail>
            <Name style={{ fontSize: '16px', fontWeight: '500' }}>
              {(product.brand || '')
                .toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
            </Name>
            <Name>{product.name}</Name>

            <div>
              {product.product_colors.slice(0, 20).map((color) => (
                <ProductColors
                  key={color.hex_value}
                  color={color.hex_value}
                  style={{ paddingTop: '5px', height: '20px', width: '20px' }}
                />
              ))}
            </div>
            <p> ${product.price}</p>
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
