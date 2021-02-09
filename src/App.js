import './App.css'
import Category from './components/category'
import Header from './components/common/header'
import Loader from './components/common/loader'
import ProductDetails from './components/product-details'
import Products from './components/products'
import React from 'react'
import ResponsiveLayout from './components/common/responsiveLayout'
import ScreenDimensionProvider from './services/screenDimension'
import axios from 'axios'
import dataPagination from './utils/data-pagination'
import imageLoader from './services/images'
import styled from 'styled-components'
import { DisplayTime } from './components/common/time-display'
import { getBrands, getProductTag } from './services/productsService'
import { withRouter, Route, Switch } from 'react-router-dom'

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
`

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgb(179, 175, 175);
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
  constructor(props) {
    super(props)
    this.filterByValue = this.filterByValue.bind(this)
    this.state = {
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
      () => this.props.history.push('/')
    )
  }

  handleTagSelect = (tag) => {
    const state = this.state
    this.setState(
      {
        ...state,
        currentPage: 1,
        selectedBrand: 'All Brands',
        searchTerm: '',
        selectedTag: tag,
      },
      () => this.props.history.push('/')
    )
  }

  handlePageChange = (page) => {
    const state = this.state
    this.setState(
      { ...state, currentPage: page },
      /*scroll to top (next-prev-comp)*/ () =>
        document
          .getElementById('ButtonContainer')
          .scrollIntoView({ behavior: 'smooth' })
    )
  }

  handleSelectedCategory = (category) => {
    if (category !== this.state.category) {
      this.setState({
        ...this.state,
        currentPage: 1,
        searchTerm: '',
        selectedCategory: category,
        selectedTag: 'All Tags',
        selectedBrand: 'All Brands',
      })
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
      () => this.props.history.push('/')
    )
  }

  disableLink = (e) => {
    e.preventDefault()
  }

  handleNextBack = (direction) => {
    const state = this.state
    if (direction === 'back') {
      this.setState({ ...state, currentPage: this.state.currentPage - 1 })
    } else {
      if (direction === 'next') {
        this.setState({ ...state, currentPage: this.state.currentPage + 1 })
      }
    }
  }

  goHome = () => {
    const state = this.state
    this.setState(
      {
        ...state,
        selectedBrand: 'All Brands',
        selectedTag: 'All Tags',
        selectedCategory: '',
      },
      () => this.props.history.push('/')
    )
  }

  filterLists = (
    selectedproducts = [],
    selectedBrand,
    selectedTag,
    searchTerm
  ) => {
    const filtered = selectedproducts
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

    if (searchTerm.length > 0) {
      return this.filterByValue(filtered, searchTerm)
    }

    return filtered
  }

  filterByValue(filteredProductsArray, searchTerm) {
    const searchRegex = new RegExp(searchTerm, 'i')

    return filteredProductsArray.filter((product) => {
      const {
        api_featured_image,
        created_at,
        currency,
        description,
        id,
        image_link,
        price,
        price_sign,
        product_api_url,
        product_link,
        rating,
        updated_at,
        website_link,
        ...includedKeys
      } = product

      return Object.values(includedKeys).some((value) => {
        if (Array.isArray(value)) {
          // return value.some((tag) => tag.match(searchRegex))
          return value.some((tag) =>
            typeof tag === 'string'
              ? tag.match(searchRegex)
              : tag.colour_name && tag.colour_name.match(searchRegex)
          )
        }

        if (typeof value === 'string') {
          return value.match(searchRegex)
        }

        return false
      })
    })
  }

  // filterByValue = (filteredProductsArray, searchTerm) => {
  //   const getSearchTermArray = searchTerm.split(' ')

  //   const displayResult = filteredProductsArray.filter((product) => {
  //     const {
  //       api_featured_image,
  //       created_at,
  //       currency,
  //       description,
  //       id,
  //       image_link,
  //       price,
  //       price_sign,
  //       product_api_url,
  //       product_link,
  //       rating,
  //       updated_at,
  //       website_link,
  //       ...includedKeys
  //     } = product

  //     return getSearchTermArray.some((term) => {
  //       return Object.values(includedKeys).some((value) => {
  //         if (Array.isArray(value)) {
  //           return value.some((tag) =>
  //             typeof tag === 'string'
  //               ? tag.includes(term.toLowerCase())
  //               : tag.colour_name &&
  //                 tag.colour_name.includes(term.toLowerCase())
  //           )
  //         }

  //         if (typeof value === 'string') {
  //           return value.includes(term.toLowerCase())
  //         }

  //         return false
  //       })
  //     })
  //   })

  //   return displayResult
  // }

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
            <HeaderWrapper>
              <Header
                handleSearchTerm={this.handleSearchTerm}
                handleGoHome={this.goHome}
              />
            </HeaderWrapper>
            <MainWrapper>
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
                        products={products}
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
                        handleNextBack={this.handleNextBack}
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
                        handleNextBack={this.handleNextBack}
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

export default withRouter(App)
