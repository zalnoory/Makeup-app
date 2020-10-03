import React, { useState } from 'react'
import styled from 'styled-components'
import ListGroup from './listGroup'
import ShowSidemenu from './showSidemenu'

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
  // const [open, setOpen] = useState(false)
  const { setRef, isComponentVisible, toggleIsComponentVisible } = ShowSidemenu(
    true
  )
  return (
    <div ref={(ref) => setRef(ref)} onClick={toggleIsComponentVisible}>
      <Burger open={isComponentVisible} setOpen={toggleIsComponentVisible} />
      {isComponentVisible && (
        <Menu
          open={isComponentVisible}
          brands={brands}
          tags={tags}
          selectedBrand={selectedBrand}
          selectedTag={selectedTag}
          onBrandSelect={onBrandSelect}
          onTagSelect={onTagSelect}
        />
      )}
    </div>
  )
}

const Burger = ({ open, setOpen }) => {
  if (!open)
    return (
      <BurgerButton open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerButton>
    )

  return <div />
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
