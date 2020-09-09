import React from 'react'
import axios from 'axios'
import { getBrands, getProductTag } from '../services/productsService'
import imageLoader from '../services/images'
import ListGroup from './common/listGroup'
import Pagination from './common/page-pagination'
import Product from './common/product'
import Loader from './common/loader'
import Navbar from './navbar'
import dataPagination from '../utils/data-pagination'
import './../style/products.css'
import SearchBox from './common/searchBox'

class Products extends React.Component {
  render() {
    const {
      productsData,
      filtered,
      brands,
      tags,
      selectedBrand,
      selectedTag,
      onBrandSelect,
      onTagSelect,
      onPageChange,
      images,
      pageSize,
      currentPage,
      onCategorySelect,
      handleSearchTerm,
      searchTerm,
    } = this.props

    return (
      <section className="products-container">
        <div className="search-container">
          <SearchBox
            searchTerm={searchTerm}
            handleSearchTerm={handleSearchTerm}
          />
        </div>
        <div className="listgrp-nav-container">
          <ListGroup
            brands={brands}
            tags={tags}
            selectedBrand={selectedBrand}
            selectedTag={selectedTag}
            onBrandSelect={onBrandSelect}
            onTagSelect={onTagSelect}
          />
          <Navbar images={images} onCategorySelect={onCategorySelect} />
        </div>
        <div className="products-items-main">
          <p className="styled-p">{filtered.length} items</p>

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
        </div>
      </section>
    )
  }
}

export default Products
