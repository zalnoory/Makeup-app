import React from 'react'
import Productdisplay from './productdisplay'
import '../../style/products.css'
import '../../style/product.css'

class Product extends React.Component {
  render() {
    const { productsData } = this.props
    if (productsData.length === 0) {
      return <p className="p-result"> Sorry, no item is found.</p>
    }
    return (
      <div className="productlist-container">
        {/* <ul className="list-inline"> */}
        {productsData.map((product) => (
          <Productdisplay key={product.id} product={product} />
        ))}
        {/* </ul> */}
      </div>
    )
  }
}
export default Product

// class Product extends React.Component {
//   render() {
//     const { productsData } = this.props
//     if (productsData.length === 0) {
//       return <p className="styled-para"> Sorry, no item is found.</p>
//     }
//     return (
//       <div className="productlist-container">
//         <ul className="list-inline">
//           {productsData.map((product) => (
//             <Productdisplay key={product.id} product={product} />
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// const Product = (props) => {
//   const { productsData } = props

//   if (productsData.length === 0) {
//     return <p className="styled-p"> Sorry, no item is found.</p>
//   }

//   return (
//     <ul className="list-inline">
//       {productsData.map((product) => (
//         <Productdisplay key={product.id} product={product} />
//       ))}
//     </ul>
//   )
// }
