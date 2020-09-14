import React from 'react'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import Products from './components/products'
import ProductDetails from './components/product-details'
import Category from './components/category'
import imageLoader from './services/images'
import Loader from './components/common/loader'
import { getBrands, getProductTag } from './services/productsService'
import dataPagination from './utils/data-pagination'
import '././style/products.css'
import SearchBox from './components/common/searchBox'
import './App.css'
import ListGroup from './components/common/listGroup'
import styled from 'styled-components'
// import Navbar from './components/navbar'
// import Product from './components/common/product'
// import ListGroup from './components/common/listGroup'

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`

const SearchContainerWrapper = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 16px;
  justify-content: flex-end;
  border-bottom: 1px solid black;
`

const MainWrapper = styled.main`
  display: flex;
  width: 100%;
`

const ListGroupWrapper = styled.div`
  flex: 0 1 200px;
  border-right: 1px solid gray;
`

const PageWrapper = styled.div`
  flex: 1 0 360px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

class App extends React.Component {
  state = {
    brands: [],
    currentPage: 1,
    images: [],
    isLoading: true,
    pageSize: 42,
    products: [],
    selectedBrand: 'All Brands',
    selectedCategory: '',
    selectedTag: 'All Tags',
    tags: [],
    searchTerm: '',
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
    this.setState({
      ...state,
      selectedBrand: brand,
      searchTerm: '',
      currentPage: 1,
    })
  }

  handleTagSelect = (tag) => {
    const state = this.state
    this.setState({ ...state, selectedTag: tag, currentPage: 1 })
  }

  handlePageChange = (page) => {
    const state = this.state
    this.setState({ ...state, currentPage: page })
  }

  // handleSelectedCategory = (category) => {
  //   const state = this.state

  //   this.setState({ ...state, selectedCategory: category })
  // }

  handleSelectedCategory = (category) => {
    if (category !== this.state.category) {
      this.setState({
        ...this.state,
        selectedCategory: category,
        searchTerm: '',
      })
    }
  }

  handleSearchTerm = (e) => {
    this.setState({
      ...this.state,
      searchTerm: e.target.value,
      currentPage: 1,
      selectedBrand: 'All Brands',
      selectedTag: 'All Tags',
    })
  }

  filterLists = (products = [], selectedBrand, selectedTag, searchTerm) => {
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
      .filter((product) => {
        if (searchTerm !== '') {
          return (
            (product.brand &&
              product.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (product.product_type &&
              product.product_type.includes(searchTerm.toLowerCase()))
          )
        } else {
          return product
        }
      })

    return filtered
  }

  render() {
    const {
      brands,
      currentPage,
      images,
      isLoading,
      pageSize,
      products,
      selectedBrand,
      selectedTag,
      tags,
      searchTerm,
    } = this.state

    const filtered = this.filterLists(
      products,
      selectedBrand,
      selectedTag,
      searchTerm
    )

    const productsPagination = dataPagination(filtered, pageSize, currentPage)

    if (!isLoading) {
      return (
        <AppWrapper>
          <SearchContainerWrapper>
            <SearchBox
              searchTerm={this.state.searchTerm}
              handleSearchTerm={this.handleSearchTerm}
            />
          </SearchContainerWrapper>
          <MainWrapper>
            <ListGroupWrapper>
              <ListGroup
                brands={brands}
                tags={tags}
                selectedBrand={selectedBrand}
                selectedTag={selectedTag}
                onBrandSelect={this.handleBrandSelect}
                onTagSelect={this.handleTagSelect}
              />
            </ListGroupWrapper>
            <PageWrapper>
              <Switch>
                <Route
                  path="/category/:productCategory"
                  render={(props) => (
                    <Category
                      {...props}
                      brands={brands}
                      currentPage={currentPage}
                      onBrandSelect={this.handleBrandSelect}
                      onPageChange={this.handlePageChange}
                      onTagSelect={this.handleTagSelect}
                      pageSize={pageSize}
                      allProducts={products}
                      selectedBrand={selectedBrand}
                      selectedTag={selectedTag}
                      tags={tags}
                      filterLists={this.filterLists}
                      searchTerm={searchTerm}
                      handleSearchTerm={this.handleSearchTerm}
                    />
                  )}
                />
                <Route
                  path="/product-details/:productId"
                  component={ProductDetails}
                />
                <Route
                  render={() => (
                    <Products
                      exact
                      path="/"
                      productsData={productsPagination}
                      filtered={filtered}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      brands={brands}
                      tags={tags}
                      selectedBrand={selectedBrand}
                      selectedTag={selectedTag}
                      onBrandSelect={this.handleBrandSelect}
                      onTagSelect={this.handleTagSelect}
                      onPageChange={this.handlePageChange}
                      images={images}
                      onCategorySelect={this.handleSelectedCategory}
                      handleSearchTerm={this.handleSearchTerm}
                      searchTerm={searchTerm}
                    />
                  )}
                />
              </Switch>
            </PageWrapper>
          </MainWrapper>
          <footer className="footer">i am the footer</footer>
        </AppWrapper>
      )
    }

    return <Loader />
  }
}

export default App

// import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import Products from './components/products'
// import ProductDetails from './components/product-details'
// import Category from './components/category'
// import './App.css'

// function App() {
//   return (
//     <div className="main-wrapper">
//       <header className="header"></header>
//       <main className="main">
//         <Switch>
//           {/* <div className="App"> */}
//           <Route path="/category/:productCategory" component={Category} />

//           <Route
//             path="/product-details/:productId"
//             component={ProductDetails}
//           />
//           <Route
//             exact
//             path="/"
//             render={() => (
//               <Products productsData={productsPagination} filtered={filtered} />
//             )}
//           />
//           {/* <Route path="/product_details/:id" component={ProductDetails} /> */}
//           {/* <Route exact path="/" component={Products} /> */}
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
