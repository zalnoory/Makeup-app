import Navbar from './common/navbar'
import NextPrevComp from './common/next-prev-comp'
import Pagination from './common/page-pagination'
import Product from './common/product'
import React from 'react'
import styled from 'styled-components'

const ProductsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1020px) {
    padding: 4em;
  }
`
const StyledP = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  font-family: Brandon Text;
  padding-top: 30px;
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
      handleNextBack,
    } = this.props

    return (
      <ProductsPageWrapper>
        <Navbar images={images} onCategorySelect={onCategorySelect} />
        <ProductsWrapper>
          <StyledP>{filtered.length} items</StyledP>
          <NextPrevComp
            filtered={filtered}
            currentPage={currentPage}
            pageSize={pageSize}
            handleNextBack={handleNextBack}
          />

          <Product productsData={productsData} />
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
