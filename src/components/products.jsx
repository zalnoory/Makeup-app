import React from 'react'
import axios from 'axios'
import { getBrands, getProductTag } from '../services/productsService'
import imageLoader from '../services/images'
import ListGroup from './common/listGroup'
import Pagination from './common/page-pagination'
import ProductsPagination from './common/products-pagination'
import Loader from './common/loader'
import Navbar from './navbar'
import dataPagination from '../utils/data-pagination'
import './../style/products-component.css'

class Products extends React.Component {
  state = {
    isLoading: true,
    products: [],
    brands: [],
    tags: [],
    images: [],
    selectedBrand: 'All Brands',
    selectedTag: 'All Tags',
    pageSize: 40,
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
    this.setState({ ...state, selectedBrand: brand })
  }

  handleTagSelect = (tag) => {
    const state = this.state
    this.setState({ ...state, selectedTag: tag })
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
      products,
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
          <div className="row">
            <div className="col-3">
              <ListGroup
                brands={brands}
                tags={tags}
                selectedBrand={selectedBrand}
                selectedTag={selectedTag}
                onBrandSelect={this.handleBrandSelect}
                onTagSelect={this.handleTagSelect}
              />
            </div>
            <div className="col">
              <Navbar images={images} />
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '10px',
                  fontWeight: '500',
                  fontFamily: 'Brandon Text',
                  marginTop: '50px',
                }}
              >
                {' '}
                {filtered.length} items
              </p>
              <div className="container">
                <ProductsPagination productsPagination={productsPagination} />
                {/* <ul className="list-inline">
                  {productsPagination.length === 0 ? (
                    <p> Sorry, no item is found.</p>
                  ) : (
                    productsPagination.map((product) => (
                      <li
                        className="list-inline-item m-2"
                        style={{ cursor: 'pointer' }}
                        key={product.id}
                      >
                        <div className="container">
                          <img
                            className="m-2"
                            style={{ maxWidth: '125px', maxHeight: '125px' }}
                            src={product.api_featured_image}
                            alt={product.name}
                          />
                          <div>
                            <div className="m-2">
                              <span className="m-1">{product.brand}</span>
                              <span>{product.product_type}</span>
                              <div style={{textAlign:'center'}}>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  )}
                </ul> */}
                <Pagination
                  productsCount={filtered.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default Products

// return (
//   <React.Fragment>
//     {isLoading ? (
//       <Loader />
//     ) : (
//       <div className="row">
//         <div className="col-3">
//           <ListGroup
//             brands={brands}
//             tags={tags}
//             selectedBrand={selectedBrand}
//             selectedTag={selectedTag}
//             onBrandSelect={this.handleBrandSelect}
//             onTagSelect={this.handleTagSelect}
//           />
//         </div>
//         <div className="col">

//           <Navbar images={images} />
//           <p style={{ textAlign: 'center' }}> {filtered.length} items</p>
//           <div className="container">
//             <ul className="list-inline">
//               {productsPagination.length === 0 ? (
//                 <p> Sorry, no item is found.</p>
//               ) : (
//                 productsPagination.map((product) => (
//                   <li
//                     className="list-inline-item m-2"
//                     style={{ cursor: 'pointer' }}
//                     key={product.id}
//                   >
//                     <div className="container">
//                       <img
//                         className="m-2"
//                         style={{ maxWidth: '125px', maxHeight: '125px' }}
//                         src={product.api_featured_image}
//                         alt={product.name}
//                       />
//                       <div>
//                         <div className="m-2">
//                           <span className="m-1">{product.brand}</span>
//                           {/* <span className="m-1">{product.category}</span> */}
//                           <span>{product.product_type}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 ))
//               )}
//             </ul>
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
//   </React.Fragment>
// )
