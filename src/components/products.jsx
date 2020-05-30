import React from 'react'
import axios from 'axios'
import { getBrands, getProductTag } from '../services/productsService'
import ListGroup from './common/listGroup'
import Pagination from './common/pagination'
import Loader from './loader'
import dataPagination from '../utils/data-pagination'

class Products extends React.Component {
  state = {
    isLoading: true,
    products: [],
    brands: [],
    tags: [],
    selectedBrand: 'All Brands',
    selectedTag: 'All Tags',
    pageSize: 40,
    currentPage: 1,
  }

  /*connect to server */
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
      selectedBrand,
      selectedTag,
      pageSize,
      currentPage,
    } = this.state

    const filtered = this.filterLists()

    const productsPagination = dataPagination(filtered, pageSize, currentPage)

    return this.state.isLoading ? (
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
          <p style={{ textAlign: 'center' }}> {filtered.length} items</p>
          <div className="container">
            <ul className="list-inline">
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
                          <span className="m-1">{product.category}</span>
                          <span>{product.product_type}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
            <Pagination
              productsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Products
