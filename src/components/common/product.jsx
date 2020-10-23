import React from 'react'
import Productdisplay from './productdisplay'
import '../../style/products.css'
import '../../style/product.css'
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
  grid-gap: 20px;
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 300px));
  grid-gap: 30px;
  width: 100%;
`

class Product extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { productsData } = this.props
    if (productsData.length === 0) {
      return <ProductResult> Sorry, no item is found.</ProductResult>
    }
    return (
      <DisplayGrid>
        {productsData.map((product) => (
          <Productdisplay key={product.id} product={product} />
        ))}
      </DisplayGrid>
    )
  }
}
export default Product
