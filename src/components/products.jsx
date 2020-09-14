import React from 'react'
import Pagination from './common/page-pagination'
import Product from './common/product'
import Navbar from './navbar'
import './../style/products.css'
import styled from 'styled-components'

const ProductsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0em 2em 2em 2em;
`

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4em;
  justify-content: center;
`
const StyledP = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  font-family: Brandon Text;
`

class Products extends React.Component {
  render() {
    const {
      productsData,
      filtered,
      onPageChange,
      images,
      pageSize,
      currentPage,
      onCategorySelect,
    } = this.props

    return (
      <ProductsPageWrapper>
        {/* <section className="products-container"> */}
        {/* <div className="listgrp-nav-container"> */}
        <Navbar images={images} onCategorySelect={onCategorySelect} />
        {/* </div> */}
        <ProductsWrapper>
          <StyledP>{filtered.length} items</StyledP>
          <Product
            productsData={productsData}
            productsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
          <Pagination
            productsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </ProductsWrapper>
        {/* </section> */}
      </ProductsPageWrapper>
    )
  }
}

export default Products
