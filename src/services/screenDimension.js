import React, { useState, useEffect, createContext, useContext } from 'react'
const ViewContext = createContext()

const ScreenDimensionProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [screenHeight, setScreenHeight] = useState(window.innerHeight)

  useEffect(() => {
    const screenDimensionHandler = () => {
      setScreenWidth(window.innerWidth)
      setScreenHeight(window.innerWidth)
    }
    //   setScreenWidth(window.innerWidth)
    window.addEventListener('resize', screenDimensionHandler)
    return () => window.removeEventListener('resize', screenDimensionHandler)
  }, [])
  // Return the width and Height so it can  be used in our components
  return (
    <ViewContext.Provider value={{ screenWidth, screenHeight }}>
      {children}
    </ViewContext.Provider>
  )
}

export default ScreenDimensionProvider

export const useViewPort = () => {
  const { screenWidth, screenHeight } = useContext(ViewContext)
  return { screenWidth, screenHeight }
}
