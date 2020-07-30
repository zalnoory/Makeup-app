import React from 'react'
import axios from 'axios'
import { getBrands, getProductTag } from '../services/productsService'
import ListGroup from './common/listGroup'

class Products extends React.Component {
  state = {
    products: [],
    brands: [],
    tags: [],
    selectedBrand: 'All Brands',
    selectedTag: null,
  }

  /*connect to server */
  async componentDidMount() {
    const { data } = await axios.get(
      // 'http://makeup-api.herokuapp.com/api/v1/products.json'
      'https://gist.githubusercontent.com/zalnoory/153677c3cddf89017c0abce27e72c29d/raw/b16de56253f60efb6fd6465ead89abb878bf3eae/exampleproducts.json'
    )

    /*adding *all Beauty Brands' to brands[]*/
    const brands = ['All Brands', ...getBrands()]

    this.setState({
      ...this.state,
      products: data.products,
      brands,
      tags: getProductTag(),
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

  // filterLists = () => {
  //   const { products, tags, selectedBrand, selectedTag } = this.state

  //   if (selectedTag) {
  //     return products.filter((product) => {
  //       for (let tag of product.tag_list) {
  //         if (tag === selectedTag) return product
  //       }
  //     })
  //   } else if (selectedBrand && selectedBrand !== 'all Brands') {
  //     return products.filter((product) => product.brand === selectedBrand)
  //   }
  //   return products
  // }

  filterLists = () => {
    const { selectedBrand, selectedTag, products } = this.state

    const filtered = products.filter((product) => {
      if (selectedBrand !== 'All Brands') {
        return product.brand === selectedBrand
      } else return product
    })
    // .filter((product) => {
    //   if (
    //     selectedTag !== null &&
    //     product.tag_list.includes(product.tag === selectedTag)
    //   ) {
    //     return product
    //   }
    // })

    return filtered
  }

  // filterLists = () => {
  //   const { products, tags, selectedBrand, selectedTag } = this.state
  //   if (selectedTag) {
  //     return products.filter((product) => {
  //       for (let tag of product.tag_list) {
  //         if (tag === selectedTag) return product
  //       }
  //     })
  //   }
  //   if (selectedBrand && selectedBrand !== 'all Brands') {
  //     products.filter((product) => product.brand === selectedBrand)
  //   }
  //   return products
  // }

  // filtered = () => {
  //   selectedBrand && selectedBrand !== 'all Brands'
  //     ? products.filter((product) => product.brand === selectedBrand)
  //     : products
  // }

  render() {
    const { length: count } = this.state.products
    const { products, brands, tags, selectedBrand, selectedTag } = this.state

    const filtered = this.filterLists()

    // const filtered =
    //   selectedBrand && selectedBrand !== 'all Brands'
    //     ? products.filter((product) => product.brand === selectedBrand)
    //     : products

    // const filtered = selectedTag
    //   ? products.filter((product) => {
    //       for (let tag of product.tag_list) {
    //         if (tag === selectedTag) return product
    //       }
    //     })
    //   : products

    return (
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
          <p> {filtered.length} items</p>
          <div className="container">
            <ul className="list-inline">
              {filtered.map((product) => (
                <li
                  className="list-inline-item m-2"
                  style={{ cursor: 'pointer' }}
                  key={product.id}
                >
                  <div className="container">
                    <img
                      className="m-2"
                      style={{ maxWidth: '150px', maxHeight: '150px' }}
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
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
