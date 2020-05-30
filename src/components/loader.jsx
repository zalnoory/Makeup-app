import React, { Component } from 'react'

const Loader = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-info ">
          <span class="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info ">
          <span class="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info ">
          <span class="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info ">
          <span class="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-info ">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Loader
