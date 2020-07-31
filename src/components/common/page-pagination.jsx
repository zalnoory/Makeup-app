import React from 'react'
import '../../style/page-pagination.css'

const Pagination = (props) => {
  const { productsCount, pageSize, currentPage, onPageChange } = props

  const pagesCount = Math.ceil(productsCount / pageSize)

  if (pagesCount === 1) return null

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <ul className="pagination pagination-sm">
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? 'page-item active' : 'page-item'}
        >
          <a className="page-link" onClick={() => onPageChange(page)}>
            {' '}
            {page}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Pagination

// return (
//   <nav aria-label="Page navigation example">
//     <ul
//       style={{ display: 'inline-block' }}
//       className="pagination pagination-sm"
//     >

//       {pages.map((page) => (
//         <li
//           style={{ display: 'inline-block' }}
//           key={page}
//           className={page === currentPage ? 'page-item active' : 'page-item'}
//         >
//           <a className="page-link" onClick={() => onPageChange(page)}>
//             {' '}
//             {page}
//           </a>
//         </li>
//       ))}

//     </ul>
//   </nav>
// )
