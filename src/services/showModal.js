import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react'

const showModalComp = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(true)

  const ref = useRef(null)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return
  {
    ref, isComponentVisible, setIsComponentVisible
  }
}

export default showModalComp
