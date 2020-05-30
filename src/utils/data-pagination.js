import React, { Component } from 'react'
const dataPagination = (items, pageSize, pageNumber) => {
  const startingIndex = (pageNumber - 1) * pageSize
  const lastIndex = pageNumber * pageSize
  return items.slice(startingIndex, lastIndex)
}

export default dataPagination
