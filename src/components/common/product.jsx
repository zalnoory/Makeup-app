import React from 'react'
import Productdisplay from './productdisplay'
import styled from 'styled-components'

const ProductResult = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  font-family: Brandon Text;
  padding-top: 2em;
  white-space: nowrap;
`

const DisplayGrid = styled.div`
  font-weight: 400;
  font-family: Brandon Text;
  text-align: center;
  justify-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, 50%);
  width: 100%;
  @media screen and (min-width: 1020px) {
    grid-template-columns: repeat(auto-fill, 25%);
  }
`

class Product extends React.Component {
  render() {
    const { productsData } = this.props
    if (productsData.length === 0) {
      return <ProductResult> Sorry, no item is found.</ProductResult>
    }
    return (
      <DisplayGrid>
        {productsData.map((product) => (
          <Productdisplay
            key={product.id}
            product={product}
            productsData={productsData}
          />
        ))}
      </DisplayGrid>
    )
  }
}
export default Product
