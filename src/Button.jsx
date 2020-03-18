import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
 width: 120px;
  height: 40px;
  border: none;
  margin: 4px;
  background: #738189;
  font-size: 16px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  :hover {
    color: #83677B;
    background: lightgrey;
    transition: 400ms;
  }
`

const Button = ({ description, onclick }) => (
  <StyledButton onClick={onclick}>{description}</StyledButton>
)


export default Button