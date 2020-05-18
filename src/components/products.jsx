import React from 'react'
import axios from 'axios'
import { getBrands } from '../services/productsService'
import ListGroup from './common/listGroup'

class Products extends React.Component {
  state = {
    products: [],
    brands: [],
    selectedBrand: null,
  }
  /*connect to server */
  async componentDidMount() {
    const { data: products } = await axios.get(
      'http://makeup-api.herokuapp.com/api/v1/products.json'
    )

    /*adding *'all Beauty Brands' to brands[]*/
    const brands = ['all Brands', ...getBrands()]

    this.setState({ products, brands })
  }

  handleBrandSelect = (brand) => {
    this.setState({ selectedBrand: brand })
  }

  render() {
    const { length: count } = this.state.products
    const { products, brands, selectedBrand } = this.state

    const filtered =
      selectedBrand && selectedBrand !== 'all Brands'
        ? products.filter((product) => product.brand === selectedBrand)
        : products

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={brands}
            selectedItem={selectedBrand}
            onItemSelect={this.handleBrandSelect}
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
                      style={{ maxWidth: '150px', maxHeight: '150px' }}
                      src={product.api_featured_image}
                      alt={product.name}
                    />
                    <div>
                      <div>{product.brand}</div>
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
