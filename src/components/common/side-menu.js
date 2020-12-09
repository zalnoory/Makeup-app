import React, { useState } from 'react'
import styled from 'styled-components'
import ListGroup from './listGroup'

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  transition: 0.5s;
`

const BurgerButton = styled.button`
  position: absolute;
  top: 2%;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.3rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#0D0C1D')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #fff;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  min-height: 100vh;
  text-align: left;
  padding: 2rem;
  padding-top: 4rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  opacity: 1;
  overflow: scroll;
  @media (max-width: 576px) {
    width: 50%;
  }
`

const Sidemenu = (props) => {
  const {
    brands,
    tags,
    selectedBrand,
    selectedTag,
    onBrandSelect,
    onTagSelect,
  } = props

  const [isComponentVisible, setIsComponentVisible] = useState(false)

  return (
    <div>
      <Burger open={isComponentVisible} setOpen={setIsComponentVisible} />

      {isComponentVisible && (
        <>
          <Overlay onClick={() => setIsComponentVisible(!isComponentVisible)} />
          <Menu
            open={isComponentVisible}
            brands={brands}
            tags={tags}
            selectedBrand={selectedBrand}
            selectedTag={selectedTag}
            onBrandSelect={onBrandSelect}
            onTagSelect={onTagSelect}
          />
        </>
      )}
    </div>
  )
}

const Burger = ({ open, setOpen }) => {
  return (
    <BurgerButton onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BurgerButton>
  )
}

const Menu = (props) => {
  const {
    brands,
    tags,
    selectedBrand,
    selectedTag,
    onBrandSelect,
    onTagSelect,
    open,
  } = props
  return (
    <StyledMenu open={open}>
      <ListGroup
        brands={brands}
        tags={tags}
        selectedBrand={selectedBrand}
        selectedTag={selectedTag}
        onBrandSelect={onBrandSelect}
        onTagSelect={onTagSelect}
      />
    </StyledMenu>
  )
}

export default Sidemenu
