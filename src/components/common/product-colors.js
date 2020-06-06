import React from 'react'
import styled from 'styled-components'

export const ProductColors = styled.span`
  height: 15px;
  width: 15px;
  margin: 1px;
  background-color: ${(props) => props.color};
  border-radius: 75%;
  border: 0.5px solid black;
  display: inline-block;
`
