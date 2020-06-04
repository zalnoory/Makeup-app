import React from 'react'
import styled from 'styled-components'

export const ProductColors = styled.span`
  height: 15px;
  width: 15px;
  background-color: ${(props) => props.color};
  border-radius: 75%;
  display: inline-block;
`
