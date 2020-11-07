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
  font-family: Brandon Text;
`
const StyledP = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 400; ;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  cursor: pointer;
  align-self: center;
`

const Prev = styled.div`
  padding-right: 100px;
  padding-bottom: 30px;
  /* @media (min-width: 450px) {
    padding-right: 300px;
  } */
`

const Next = styled.div`
  padding-left: 100px;
  padding-bottom: 30px;
  /* @media (min-width: 450px) {
    padding-left: 700px;
  } */
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
      brands,
      onBrandSelect,
      selectedBrand,
    } = this.props

    return (
      <ProductsPageWrapper>
        <Navbar images={images} onCategorySelect={onCategorySelect} />
        <ProductsWrapper>
          <StyledP>{filtered.length} items</StyledP>
          <ButtonContainer>
            <Prev>&laquo; Previous</Prev>
            <Next>Next &raquo;</Next>
          </ButtonContainer>
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
      </ProductsPageWrapper>
    )
  }
}

export default Products
