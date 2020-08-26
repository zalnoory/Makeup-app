import React from 'react'
import Productdisplay from './productdisplay'
import '../../style/products.css'
import '../../style/product.css'
import Pagination from './page-pagination'

class Product extends React.Component {
  render() {
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
      <div className="productDisplay-grid">
        {productsData.map((product) => (
          <Productdisplay key={product.id} product={product} />
        ))}
      </div>
    )
  }
}
export default Product
