import React from 'react'
import Logo from './Logo.PNG'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid black; */
  width: 100%;
`

const StyledUl = styled.ul`
  list-style-type: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
`
const StyledLi = styled.li`
  padding: 8px;
  color: skyblue;
  cursor: pointer;
  :hover {
    color: black;
  }
`
const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const StyledImg = styled.img`
  width: 100px;
  height: 60px;
`

const StyledInput = styled.input`
  color: skyblue;
  outline: none;
  border-radius: 3px;
  border: 1px solid skyblue;
  padding-left: 5px;
  height: 25px;
  ::placeholder {
    color: grey;
    font-size: bold;
  }
  
`
const Navbar = () => {
  return (
    <StyledDiv>
      <StyledSection>
        <StyledImg src={Logo} alt="logo" />
        <nav>
          <StyledUl>
            <StyledLi>Discover</StyledLi>
            <StyledLi>Live</StyledLi>
            <StyledLi>Jobs</StyledLi>
            <StyledLi>Adobe</StyledLi>
            <StyledLi>About</StyledLi>
          </StyledUl>
        </nav>
      </StyledSection>
      <StyledInput placeholder="Search" type="text" />

    </StyledDiv>

  )
}


export default Navbar