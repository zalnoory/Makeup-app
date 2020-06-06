import React from 'react'
import { ProductColors } from './product-colors'

const Product = (props) => {
  const { productsData } = props

  return (
    <ul className="list-inline">
      {productsData.length === 0 ? (
        <p> Sorry, no item is found.</p>
      ) : (
        productsData.map((product) => (
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
                          {product.product_colors.slice(0, 5).map((color) => (
                            <ProductColors
                              key={color.hex_value}
                              className="page-item"
                              color={color.hex_value}
                            />
                          ))}
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

export default Product
