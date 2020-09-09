import React from 'react'
import Product from './common/product'
import ListGroup from './common/listGroup'
import dataPagination from '../utils/data-pagination'
import Pagination from './common/page-pagination'
import './../style/category.css'
import SearchBox from './common/searchBox'

const ProductDisplayGrid = {
  display: 'flex',
  flexWrap: 'wrap',
  // maxWidth: '1140px',
  // flex: '1',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(auto,300px))',
  justifyContent: 'start',
  marginRight: '-150px',
  marginLeft: '280px',
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
    handleSearchTerm,
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
    <section className="catProducts-container ">
      <div className="search-container">
        <SearchBox
          searchTerm={searchTerm}
          handleSearchTerm={handleSearchTerm}
        />
      </div>

      <div className="listgrp-prod-container">
        <ListGroup
          brands={brands}
          tags={tags}
          selectedBrand={selectedBrand}
          selectedTag={selectedTag}
          onBrandSelect={onBrandSelect}
          onTagSelect={onTagSelect}
        />
        <p className="styled-p4"> {filteredCategory.length} items </p>
        <Product
          productsData={productsPagination}
          productDisplayGrid={ProductDisplayGrid}
          productDisplayItem={ProductDisplayItem}
        />
      </div>

      <div className="products-items-main">
        <Pagination
          productsCount={filteredCategory.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </section>
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
