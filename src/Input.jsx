import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  /* border: 1px solid black; */
  flex-direction: row;
  position: relative;
  align-items: center;
`
const StyledInput = styled.input`
  width: 250px;
  border: none;
  height: 35px;
  padding-left: 40px;
  background: #F4F8F7;
  border-radius: 8px;
  outline: none;
  
`
const StyledImg = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: calc(50% -10px);
  left: 10px;
`

const Input = ({ text, imgsrc }) => {
  return (
    <StyledDiv>
      <StyledImg src={imgsrc} />
      <StyledInput placeholder={text} />
    </StyledDiv>

  )
}


export default Input