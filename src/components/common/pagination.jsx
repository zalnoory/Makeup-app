import React, { Component } from 'react'
import '../../style/pagination.css'

const Pagination = (props) => {
  const { productsCount, pageSize, currentPage, onPageChange } = props

  const pagesCount = Math.ceil(productsCount / pageSize)

  if (pagesCount === 1) return null

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* <li className="page-item">
          <a className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li> */}
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
        {/* <li className="page-item">
          <a className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li> */}
      </ul>
    </nav>
  )
}

export default Pagination
