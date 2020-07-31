import React from 'react'
import axios from 'axios'
import Loader from './common/loader'
import { ProductColors } from './common/product-colors'
import './../style/product-details.css'

class ProductDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      product: null,
    }
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
    if (this.state.product === null) {
      return <Loader />
      // return <div>waiting...</div>
    }

    const { product } = this.state
    return (
      <div className="container" id="productDetails-cont">
        {/* <div className="main-container"> */}
        {/* <div className="row"> */}
        <div className="page-container">
          <div className="container-image">
            <img
              className="prod-image"
              src={product.api_featured_image}
              alt={product.name}
            />
          </div>
          <div className="container" id="container-b">
            {/* <div className="details-cont"> */}
            <div className="product-detail">
              {(product.brand || '')
                .toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
            </div>
            <div className="name">{product.name}</div>

            <div>
              {product.product_colors.slice(0, 20).map((color) => (
                <ProductColors
                  id="page1-item"
                  key={color.hex_value}
                  color={color.hex_value}
                />
              ))}
            </div>
            <p className="price"> ${product.price}</p>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="row"> */}
        <div className="container-c">
          <p className="description-a">Details:</p>

          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></p>
        </div>
        {/* </div> */}
      </div>
    )
  }
}

export default ProductDetails
