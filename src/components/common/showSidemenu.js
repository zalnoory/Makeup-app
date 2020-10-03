import React, { useRef, useState, useEffect } from 'react'

const ShowSidemenu = (initialIsVisible) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)

  const ref = useRef(null)

  const setRef = (incommingRef) => {
    if (ref.current === null) {
      ref.current = incommingRef
    }
  }

  const handleClickOutside = (event) => {
    event.preventDefault()
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      isComponentVisible
    ) {
      toggleIsComponentVisible()
    }
  }

  const toggleIsComponentVisible = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return {
    setRef,
    isComponentVisible,
    toggleIsComponentVisible,
  }
}

export default ShowSidemenu
