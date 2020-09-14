import React from 'react'
import axios from 'axios'
import Product from './common/product'
import Loader from './common/loader'
import ListGroup from './common/listGroup'
import dataPagination from '../utils/data-pagination'
import './../style/category.css'
class Category extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      categoryItems: [],
    }
  }

  async componentDidMount() {
    const { productCategory } = this.props.match.params
    console.log(productCategory)
    await axios(
      `https://zahrah-products.s3.us-east-2.amazonaws.com/products.json`
    ).then((res) => {
      const categoryItems = res.data.products.filter((product) => {
        if (product.product_type == productCategory) {
          return product
        }
      })

      this.setState({ categoryItems, isLoading: false })
      // console.log('HI', this.state.categoryItems)
    })
  }

  render() {
    const {
      pageSize,
      currentPage,
      filterLists,
      brands,
      tags,
      selectedBrand,
      selectedTag,
      onBrandSelect,
      onTagSelect,
    } = this.props
    // console.log('filterLists', filterLists)
    const { categoryItems, isLoading } = this.state
    console.log('HI Hello', this.state.categoryItems.length)
    const filteredCategory = filterLists(categoryItems)
    console.log('filteredCategory', filteredCategory)

    const productsPagination = dataPagination(
      filteredCategory,
      pageSize,
      currentPage
    )
    console.log('productsPagination', productsPagination)

    return (
      <React.Fragment>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="catProducts-container">
            <p className="styled-p4"> {filteredCategory.length} items</p>
            <div className="listgrp2-container">
              <div className="listGroup2-container">
                <ListGroup
                  brands={brands}
                  tags={tags}
                  selectedBrand={selectedBrand}
                  selectedTag={selectedTag}
                  onBrandSelect={onBrandSelect}
                  onTagSelect={onTagSelect}
                />
              </div>

              <div className="products-pagin2">
                <Product productsData={productsPagination} />
              </div>

              {/* <div>
            {categoryItems.map((item) => (
              <span>{item}</span>
            ))}
          </div> */}
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default Category
