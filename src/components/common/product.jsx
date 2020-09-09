import React from 'react'
import Productdisplay from './productdisplay'
import '../../style/products.css'
import '../../style/product.css'
import Pagination from './page-pagination'

class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { productDisplayGrid, productDisplayItem } = this.props
    const {
      productsData,
      productsCount,
      pageSize,
      currentPage,
      onPageChange,
    } = this.props
    if (productsData.length === 0) {
      return <p className="p-result"> Sorry, no item is found.</p>
    }
    return (
      <div className="productDisplay-grid" style={productDisplayGrid}>
        {productsData.map((product) => (
          <Productdisplay
            key={product.id}
            product={product}
            productDisplayItem={productDisplayItem}
          />
        ))}
      </div>
    )
  }
}
export default Product
