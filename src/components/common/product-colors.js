import React from 'react'
import styled from 'styled-components'

export const ProductColors = styled.span`
  height: 16px;
  width: 16px;
  margin: 2px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: inline-block;
  text-align: center;
  /* @media (min-width: 450px) {
    height: 16px;
    width: 16px;
  } */
`
