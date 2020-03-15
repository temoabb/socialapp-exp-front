import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  margin: 3px;
  border: none;
  color: skyblue;
  cursor: pointer;
  :hover {
    background: skyblue;
    transition: 500ms;
    color: white;
  }
`

const Button = ({ description, onclick }) => (
  <StyledButton onClick={onclick}>{description}</StyledButton>
)


export default Button