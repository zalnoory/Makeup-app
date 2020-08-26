import React from 'react'
import Product from './common/product'
import ListGroup from './common/listGroup'
import dataPagination from '../utils/data-pagination'
import Pagination from './common/page-pagination'
import './../style/category.css'
import SearchBox from './common/searchBox'

const Category = (props) => {
  const {
    brands,
    currentPage,
    onBrandSelect,
    onTagSelect,
    pageSize,
    allProducts,
    match,
    selectedBrand,
    selectedTag,
    tags,
    filterLists,
    onPageChange,
    searchTerm,
    handleSearchTerm,
  } = props
  console.log('searchTerm', searchTerm)
  const [categoryItems, setCategoryItems] = React.useState([])

  React.useEffect(() => {
    console.log(allProducts)
    const { productCategory } = (match.params && match.params) || ''
    if (allProducts.length > 0 && categoryItems.length === 0) {
      const catItems = allProducts.filter((product) => {
        if (product.product_type == productCategory) {
          return product
        }
      })
      // setCategoryItems((categoryItems) => [...categoryItems, catItems])
      setCategoryItems(catItems)
    }
  }, [allProducts])

  const products = categoryItems
  console.log('renamed', products)
  const filteredCategory = filterLists(
    products,
    selectedBrand,
    selectedTag,
    searchTerm
  )
  console.log('WOW filteredCategory', filteredCategory)

  const productsPagination = dataPagination(
    filteredCategory,
    pageSize,
    currentPage
  )

  console.log('productsPagination', productsPagination)

  return (
    <div className="catProducts-container">
      <SearchBox searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />
      <p className="styled-p4"> {filteredCategory.length} items </p>
      {/* <div className="listgrp2-container"> */}
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

        <Pagination
          productsCount={filteredCategory.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
      {/* </div> */}
    </div>
  )
}

export default Category

// class Category extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       categoryItems: [],
//     }
//   }
//   componentDidMount = () => {
//     const { productCategory } = this.props.match.params
//     const { products } = this.props

//     const catItems = products.filter((product) => {
//       if (product.product_type == productCategory) {
//         return product
//       }
//     })
//     console.log('Please print  catItems', catItems)
//     this.setState(
//       { categoryItems: catItems }
//       // console.log('categoryItems', this.state.categoryItems)
//     )
//     // console.log('categoryItems', this.state.categoryItems)
//   }

//   render() {
//     const {
//       currentPage,
//       pageSize,
//       selectedCategory,
//       onPageChange,
//       brands,
//       tags,
//       selectedBrand,
//       selectedTag,
//       onBrandSelect,
//       onTagSelect,
//     } = this.props
//     const { categoryItems } = this.state

//     const productsPagination = dataPagination(
//       categoryItems,
//       pageSize,
//       currentPage
//     )
//     // console.log('productsPagination', productsPagination)

//     return (
//       <div className="catProducts-container">
//         <p className="styled-p4"> {categoryItems.length} items</p>
//         <div className="listgrp2-container">
//           <div className="listGroup2-container">
//             <ListGroup
//               brands={brands}
//               tags={tags}
//               selectedBrand={selectedBrand}
//               selectedTag={selectedTag}
//               onBrandSelect={onBrandSelect}
//               onTagSelect={onTagSelect}
//             />
//           </div>

//           <div className="products-pagin2">
//             <Product productsData={productsPagination} />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Category
