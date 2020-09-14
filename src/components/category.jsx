import React from 'react'
import Product from './common/product'
import ListGroup from './common/listGroup'
import dataPagination from '../utils/data-pagination'
import Pagination from './common/page-pagination'
import './../style/category.css'
import styled from 'styled-components'

const CategoryPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 4em;
  padding-left: 4em;
`

const ProductDisplayGrid = {
  // display: "flex",
  // flexWrap: "wrap",
  // // maxWidth: '1140px',
  // // flex: '1',
  // display: "grid",
  // gridTemplateColumns: "repeat(auto-fill, minmax(auto,280px))",
  // justifyContent: "start",
}

const ProductDisplayItem = {
  // maxWidth: '100%',
  // marginLeft: '150px',
  // marginRight: '0px',
  // maxWidth: '70%',
}

const Category = (props) => {
  const {
    brands,
    currentPage,
    onBrandSelect,
    onTagSelect,
    pageSize,
    allProducts,
    match,
    selectedBrand,
    selectedTag,
    tags,
    filterLists,
    onPageChange,
    searchTerm,
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
      <p className="styled-p4"> {filteredCategory.length} items </p>
      <Product
        productsData={productsPagination}
        productDisplayGrid={ProductDisplayGrid}
        productDisplayItem={ProductDisplayItem}
      />
      <div className="products-items-main">
        <Pagination
          productsCount={filteredCategory.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </CategoryPageWrapper>
  )
}

export default Category

{
  /* return (
   <div className="catProducts-container">
     <div className="search-container">
       <SearchBox
         searchTerm={searchTerm}
         handleSearchTerm={handleSearchTerm}
       />
     </div>

     <div className="listgrp-prod-container">
       <p />
       <ListGroup
         brands={brands}
         tags={tags}
         selectedBrand={selectedBrand}
         selectedTag={selectedTag}
         onBrandSelect={onBrandSelect}
         onTagSelect={onTagSelect}
       />
       <p className="styled-p4"> {filteredCategory.length} items </p>
       <div className="test">
         <Product productsData={productsPagination} />

         <Pagination
           productsCount={filteredCategory.length}
           pageSize={pageSize}
           currentPage={currentPage}
           onPageChange={onPageChange}
         />
       </div >
     </div>
   </div>
 ) */
}
