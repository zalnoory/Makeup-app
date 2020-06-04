import React from 'react'

const Loader = () => {
  const icon = (
    <div
      className=" justify-content-right spinner-grow m-3 text-info"
      style={{ width: '2rem', height: '2rem' }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )

  const icons = Array.from({ length: 4 }).map((i) => icon)

  return <div className="d-flex justify-content-center"> {icons}</div>
}

export default Loader
