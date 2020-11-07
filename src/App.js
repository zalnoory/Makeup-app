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
import Sidemenu from './components/common/side-menu'
import styled from 'styled-components'
import ScreenDimensionProvider from './services/screenDimension'
import ResponsiveLayout from './components/common/responsiveLayout'
import { createRef } from 'react'
import { DisplayTime } from './components/common/time-display'
import vecteezyVector from './images/vecteezyVector.jpg'

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
  justify-content: space-between;
  border-bottom: 1px solid rgb(179, 175, 175);
`

const Vector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainWrapper = styled.main`
  display: flex;
  width: 100%;
`
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  align-items: center;
  font-family: Brandon Text;
  font-weight: 500;
  padding: 40px;
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
    pageSize: 80,
    products: [],
    selectedBrand: 'All Brands',
    selectedCategory: '',
    selectedTag: 'All Tags',
    tags: [],
    searchTerm: '',
  }

  searchBoxRef = createRef()

  /*connect to backend*/
  async componentDidMount() {
    const { data } = await axios.get(
      'https://zahrah-products.s3.us-east-2.amazonaws.com/products.json'
    )

    /*adding *all Beauty Brands' to brands[]*/
    const brands = ['All Brands', ...getBrands()]

    this.setState({
      ...this.state,
      brands,
      images: imageLoader(),
      isLoading: false,
      products: data.products,
      tags: getProductTag(),
    })
  }

  handleBrandSelect = (brand) => {
    const state = this.state
    this.setState(
      {
        ...state,
        currentPage: 1,
        searchTerm: '',
        selectedBrand: brand,
        selectedTag: 'All Tags',
      },
      () => this.searchBoxRef.current.searchTermReset()
    )
  }

  handleTagSelect = (tag) => {
    const state = this.state
    this.setState(
      {
        ...state,
        currentPage: 1,
        searchTerm: '',
        selectedBrand: 'All Brands',
        selectedTag: tag,
      },
      () => this.searchBoxRef.current.searchTermReset()
    )
  }

  handlePageChange = (page) => {
    const state = this.state
    this.setState({ ...state, currentPage: page })
  }

  handleSelectedCategory = (category) => {
    if (category !== this.state.category) {
      this.setState(
        {
          ...this.state,
          currentPage: 1,
          searchTerm: '',
          selectedBrand: 'All Brands',
          selectedCategory: category,
          selectedTag: 'All Tags',
        },
        () => this.searchBoxRef.current.searchTermReset()
      )
    }
  }

  handleSearchTerm = (term) => {
    this.setState(
      {
        ...this.state,
        currentPage: 1,
        searchTerm: term,
        selectedBrand: 'All Brands',
        selectedTag: 'All Tags',
      },
      () => console.log('print searchTerm', this.state.searchTerm)
    )
  }

  disableLink = (e) => {
    e.preventDefault()
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
          const excludeKeys = [
            'api_featured_image',
            'created_at',
            'currency',
            'description',
            'id',
            'image_link',
            'price',
            'price_sign',
            'product_api_url',
            'product_colors',
            'product_link',
            'rating',
            'updated_at',
            'website_link',
          ]

          return Object.keys(product).some(
            (key) =>
              excludeKeys.includes(key)
                ? false
                : typeof product[key] === 'string' &&
                  product[key]
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase().trim())

            // typeof product[key] === 'string' &&
            // product['tag_list'].length !== 0 &&
            // product['tag_list'].includes(
            //   searchTerm
            //     .toLowerCase()
            //     .split(' ')
            //     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            //     .join(' ')
            //     .trim()
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
      searchTerm,
      selectedBrand,
      selectedTag,
      tags,
    } = this.state

    console.log('render searchTerm', this.state.searchTerm)

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
          <ScreenDimensionProvider>
            <SearchContainerWrapper>
              <div></div>
              <Vector onClick={(e) => this.disableLink(e)}>
                <a href="https://www.vecteezy.com/free-vector/abc">
                  <img
                    src={vecteezyVector}
                    style={{
                      width: '175px',
                      height: '175px',
                    }}
                  ></img>
                </a>
                <p style={{ marginTop: '-50px', color: '#f9f9f9' }}>
                  <small>vecteezy</small>
                </p>
              </Vector>
              <div></div>

              <div style={{ paddingTop: '70px' }}>
                <SearchBox
                  handleSearchTerm={this.handleSearchTerm}
                  ref={this.searchBoxRef}
                />
              </div>

              {/* <SearchBox
              searchTerm={this.state.searchTerm}
              handleSearchTerm={this.handleSearchTerm}
            /> */}
            </SearchContainerWrapper>
            <MainWrapper>
              {/* <ListGroupWrapper> */}
              <ResponsiveLayout
                brands={brands}
                onBrandSelect={this.handleBrandSelect}
                onTagSelect={this.handleTagSelect}
                selectedBrand={selectedBrand}
                selectedTag={selectedTag}
                tags={tags}
              />

              <PageWrapper>
                <Switch>
                  <Route
                    path="/category/:productCategory"
                    render={(props) => (
                      <Category
                        {...props}
                        allProducts={products}
                        brands={brands}
                        currentPage={currentPage}
                        filterLists={this.filterLists}
                        handleSearchTerm={this.handleSearchTerm}
                        onBrandSelect={this.handleBrandSelect}
                        onPageChange={this.handlePageChange}
                        onTagSelect={this.handleTagSelect}
                        pageSize={pageSize}
                        searchTerm={searchTerm}
                        selectedBrand={selectedBrand}
                        selectedTag={selectedTag}
                        tags={tags}
                      />
                    )}
                  />
                  <Route
                    path="/product-details/:productId"
                    component={ProductDetails}
                  />
                  <Route
                    path="/"
                    render={() => (
                      <Products
                        brands={brands}
                        currentPage={currentPage}
                        filtered={filtered}
                        handleSearchTerm={this.handleSearchTerm}
                        images={images}
                        onBrandSelect={this.handleBrandSelect}
                        onCategorySelect={this.handleSelectedCategory}
                        onPageChange={this.handlePageChange}
                        onTagSelect={this.handleTagSelect}
                        pageSize={pageSize}
                        productsData={productsPagination}
                        searchTerm={searchTerm}
                        selectedBrand={selectedBrand}
                        selectedTag={selectedTag}
                        tags={tags}
                      />
                    )}
                  />
                </Switch>
              </PageWrapper>
            </MainWrapper>
            <FooterWrapper>
              <DisplayTime />
            </FooterWrapper>
          </ScreenDimensionProvider>
        </AppWrapper>
      )
    }

    return <Loader />
  }
}

export default App
