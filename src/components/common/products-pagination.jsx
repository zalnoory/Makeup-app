import React from 'react'
import { ProductColors } from './product-colors'
// import '../../style/products-pagination.css'

const ProductsPagination = (props) => {
  const { productsPagination } = props
  return (
    <ul className="list-inline">
      {productsPagination.length === 0 ? (
        <p> Sorry, no item is found.</p>
      ) : (
        productsPagination.map((product) => (
          <li
            className="list-inline-item m-2"
            style={{ cursor: 'pointer' }}
            key={product.id}
          >
            <div className="container">
              <img
                className="m-2"
                style={{ maxWidth: '125px', maxHeight: '125px' }}
                src={product.api_featured_image}
                alt={product.name}
              />
              <div>
                <div className="m-2">
                  <span className="m-1">{product.brand}</span>
                  <span>{product.product_type}</span>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          {product.product_colors.map((color) =>
                            product.product_colors.length < 10 ? (
                              <ProductColors
                                key={color.hex_value}
                                className="page-item"
                                color={color.hex_value}
                              />
                            ) : null
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))
      )}
    </ul>
  )
}

export default ProductsPagination
