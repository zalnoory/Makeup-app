import React from 'react'
import Product from './common/product'
import dataPagination from '../utils/data-pagination'
import NextPrevComp from './common/next-prev-comp'
import Pagination from './common/page-pagination'
import styled from 'styled-components'

const CategoryPageWrapper = styled.div`
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
  @media screen and (min-width: 1020px) {
    padding: 4em;
  }
`

const StyledP = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  font-family: Brandon Text;
  padding-top: 30px;
`

const Category = (props) => {
  const {
    products,
    currentPage,
    filterLists,
    match,
    onPageChange,
    pageSize,
    searchTerm,
    selectedBrand,
    selectedTag,
    handleNextBack,
  } = props
  const [categoryItems, setCategoryItems] = React.useState([])

  React.useEffect(() => {
    const { productCategory } = (match.params && match.params) || ''
    if (products.length > 0 && categoryItems.length === 0) {
      const catItems = products.filter((product) => {
        if (product.product_type == productCategory) {
          return product
        }
      })
      setCategoryItems(catItems)
    }
  }, [products])

  const filteredCategory = filterLists(
    categoryItems,
    selectedBrand,
    selectedTag,
    searchTerm
  )

  const productsPagination = dataPagination(
    filteredCategory,
    pageSize,
    currentPage
  )

  return (
    <CategoryPageWrapper>
      <ProductsWrapper>
        <StyledP> {filteredCategory.length} items </StyledP>
        <NextPrevComp
          filtered={filteredCategory}
          currentPage={currentPage}
          pageSize={pageSize}
          handleNextBack={handleNextBack}
        />

        <Product productsData={productsPagination} />
        <Pagination
          productsCount={filteredCategory.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </ProductsWrapper>
    </CategoryPageWrapper>
  )
}

export default Category
