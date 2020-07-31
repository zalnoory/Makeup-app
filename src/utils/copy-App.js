import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from './components/products'
import ProductDetails from './components/product-details'
import Category from './components/category'
import './App.css'

import Navbar from './components/navbar'
import imageLoader from './services/images'
import Loader from './components/common/loader'
import Product from './components/common/product'
import ListGroup from './components/common/listGroup'
import { getBrands, getProductTag } from './services/productsService'
import dataPagination from './utils/data-pagination'

import '././style/products.css'

import axios from 'axios'

class App extends React.Component {
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
          <div className="main-wrapper">
            <header className="header"></header>
            <Route
              path="/product-details/:productId"
              component={ProductDetails}
            />

            <main className="main">
              <Switch>
                <div className="products-container">
                  <div className="listgrp-nav-container">
                    <ListGroup
                      brands={brands}
                      tags={tags}
                      selectedBrand={selectedBrand}
                      selectedTag={selectedTag}
                      onBrandSelect={this.handleBrandSelect}
                      onTagSelect={this.handleTagSelect}
                    />
                    <Navbar images={images} />
                  </div>
                </div>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Products
                      productsData={productsPagination}
                      filtered={filtered}
                    />
                  )}
                />

                <Route path="/category/:productCategory" component={Category} />
              </Switch>
            </main>
            <footer className="footer"></footer>
          </div>
        )}
      </React.Fragment>
    )
  }
}

export default App

// function App() {
//   return (
//     <div className="main-wrapper">
//       <header className="header"></header>
//       <main className="main">
//        {/* <Navbar /> */}
//         <Switch>
//           {/* <div className="App"> */}

//           {/* <Route path="/product_details/:id" component={ProductDetails} /> */}
//           <Route exact path="/" component={Products} />
//           <Route
//             path="/product-details/:productId"
//             component={ProductDetails}
//           />
//           <Route path="/category/:productCategory" component={Category} />
//           {/* <Products /> */}
//           {/* <ProductDetails /> */}
//           {/* </div> */}
//         </Switch>
//       </main>
//       <footer className="footer"></footer>
//     </div>
//   )
// }

// export default App

/**original */
// function App() {
//   return (
//     <div className="main-wrapper">
//       <header className="header"></header>
//       <main className="main">
//         <Switch>
//           {/* <div className="App"> */}
//           <Route
//             path="/product-details/:productId"
//             component={ProductDetails}
//           />
//           {/* <Route path="/product_details/:id" component={ProductDetails} /> */}
//           <Route exact path="/" component={Products} />
//           {/* <Products /> */}
//           {/* <ProductDetails /> */}
//           {/* </div> */}
//         </Switch>
//       </main>
//       <footer className="footer"></footer>
//     </div>
//   )
// }

// export default App
