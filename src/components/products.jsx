import React from 'react'
import Pagination from './common/page-pagination'
import NextPrevComp from './common/next-prev-comp'
import Product from './common/product'
import Navbar from './navbar'
import styled from 'styled-components'

const ProductsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* padding: 0em 2em 2em 2em; */
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
