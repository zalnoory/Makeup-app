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

class Products extends React.Component {
  state = {
    isLoading: true,
    products: [],
    brands: [],
    tags: [],
    images: [],
    selectedBrand: 'All Brands',
    selectedTag: 'All Tags',
    pageSize: 42,
    currentPage: 1,
  }

  /*connect to backend*/
  async componentDidMount() {
    const { data } = await axios.get(
      'https://zahrah-products.s3.us-east-2.amazonaws.com/products.json'
    )

    /*adding *all Beauty Brands' to brands[]*/
    const brands = ['All Brands', ...getBrands()]

    this.setState({
      ...this.state,
      products: data.products,
      brands,
      tags: getProductTag(),
      images: imageLoader(),
      isLoading: false,
    })
  }

  handleBrandSelect = (brand) => {
    const state = this.state
    this.setState({ ...state, selectedBrand: brand, currentPage: 1 })
  }

  handleTagSelect = (tag) => {
    const state = this.state
    this.setState({ ...state, selectedTag: tag, currentPage: 1 })
  }

  handlePageChange = (page) => {
    const state = this.state
    this.setState({ ...state, currentPage: page })
  }

  filterLists = () => {
    const { selectedBrand, selectedTag, products } = this.state

    const filtered = products
      .filter((product) => {
        if (selectedBrand !== 'All Brands') {
          return product.brand === selectedBrand
        } else {
          return product
        }
      })
      .filter((product) => {
        if (selectedTag !== 'All Tags') {
          return product.tag_list.includes(selectedTag)
        } else {
          return product
        }
      })

    return filtered
  }

  render() {
    const {
      // products,
      brands,
      tags,
      images,
      selectedBrand,
      selectedTag,
      pageSize,
      currentPage,
      isLoading,
    } = this.state

    const filtered = this.filterLists()

    const productsPagination = dataPagination(filtered, pageSize, currentPage)

    return (
      <React.Fragment>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className="products-container">
              <div className="listgrp-nav-container">
                {/* <div container="col"> */}

                <ListGroup
                  brands={brands}
                  tags={tags}
                  selectedBrand={selectedBrand}
                  selectedTag={selectedTag}
                  onBrandSelect={this.handleBrandSelect}
                  onTagSelect={this.handleTagSelect}
                />

                {/* <div className="col"> */}
                <Navbar images={images} />
                {/* <div className="row"> */}
                {/* <div className="col"> */}
              </div>
              <p className="styled-p"> {filtered.length} items</p>
              <Product productsData={productsPagination} />
              {/* </div> */}
              {/* </div> */}
            </div>
            <Pagination
              productsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default Products

// return (
//   <div>
//     {isLoading ? (
//       <Loader />
//     ) : (
//       <div className="products-container">
//         <div className="row">
//           {/* <div className="col-3 mr-0 pr-0"> */}
//           {/* <div className="container" style={{ paddingTop: '20px' }}> */}
//           <div container="col">
//             {/* <div className="list_grp_container"> */}
//             <ListGroup
//               brands={brands}
//               tags={tags}
//               selectedBrand={selectedBrand}
//               selectedTag={selectedTag}
//               onBrandSelect={this.handleBrandSelect}
//               onTagSelect={this.handleTagSelect}
//             />
//             {/* </div> */}
//           </div>
//           <div className="col">
//             <Navbar images={images} />
//             <div className="row">
//               <div className="col">
//                 <p className="styled-p"> {filtered.length} items</p>

//                 <Product productsData={productsPagination} />
//               </div>
//             </div>
//             <Pagination
//               productsCount={filtered.length}
//               pageSize={pageSize}
//               currentPage={currentPage}
//               onPageChange={this.handlePageChange}
//             />
//           </div>
//         </div>
//       </div>
//     )}
//   </div>
// )

/********************************************************************************* */

// return (
//   <div id="wrapper">
//     {isLoading ? (
//       <Loader />
//     ) : (
//       <div className="row">
//         <div className="col-2">
//           {/* <div className="col-3 mr-0 pr-0"> */}
//           <div
//             className="container"
//             id="listGroup"
//             style={{ paddingTop: '20px' }}
//           >
//             <ListGroup
//               brands={brands}
//               tags={tags}
//               selectedBrand={selectedBrand}
//               selectedTag={selectedTag}
//               onBrandSelect={this.handleBrandSelect}
//               onTagSelect={this.handleTagSelect}
//             />
//           </div>
//         </div>
//         <div className="col">
//           {/* <div className="col pl-0 ml-0"> */}
//           <Navbar images={images} />

//           <p className="styled-p"> {filtered.length} items</p>

//           <Product productsData={productsPagination} />
//           <div className="container" id="page-pagination">
//             <Pagination
//               productsCount={filtered.length}
//               pageSize={pageSize}
//               currentPage={currentPage}
//               onPageChange={this.handlePageChange}
//             />
//           </div>
//         </div>
//       </div>
//     )}
//   </div>
// )
