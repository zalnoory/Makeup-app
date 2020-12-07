import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TopNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  width: 100%;
  justify-content: center;
`

const ImageContainer = styled.div`
  justify-content: center;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
`

const NavImage = styled.img`
  height: 200px;
  width: 99%;
  object-fit: cover;
  border-bottom: 4px solid bisque;
  border-right: 4px solid bisque;
  @media (max-width: 576px) {
    height: 150px;
  }
`

const StyledP = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  font-family: Brandon Text;
`

const Navbar = (props) => {
  const { images, onCategorySelect } = props

  return (
    <TopNavContainer className="top-nav-container">
      {images.map((image) => (
        <ImageContainer
          key={image.id}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            onCategorySelect(image.title)
          }}
        >
          <Link to={`/category/${image.title}`}>
            <NavImage
              src={require(`../images/${image.src}`)}
              alt={image.description}
            />
          </Link>
          <StyledP>
            {image.title
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ')}
          </StyledP>
        </ImageContainer>
      ))}
    </TopNavContainer>
  )
}

export default Navbar
