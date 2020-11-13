import React from 'react'
import Product from './common/product'
import dataPagination from '../utils/data-pagination'
import NextPrevComp from './common/next-prev-comp'
import Pagination from './common/page-pagination'
import './../style/category.css'
import styled from 'styled-components'

const CategoryPageWrapper = styled.div`
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
`

const StyledP = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  font-family: Brandon Text;
`

const Category = (props) => {
  const {
    allProducts,
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
    if (allProducts.length > 0 && categoryItems.length === 0) {
      const catItems = allProducts.filter((product) => {
        if (product.product_type == productCategory) {
          return product
        }
      })
      setCategoryItems(catItems)
    }
  }, [allProducts])

  /*assign categoryItem to a new variable (products)*/
  const products = categoryItems
  const filteredCategory = filterLists(
    products,
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
