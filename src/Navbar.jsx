import React from 'react'
import Logo from './Logo.PNG'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDiv = styled.div`
  padding: 10px 25px;
  display: flex;
  font-size: 20px;
  flex-direction: row;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  background: #83677B;
`

const StyledUl = styled.ul`
  list-style-type: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
`
const StyledLi = styled.li`
  padding: 8px 10px;
  margin-right: 4px;
  text-align: center;
  color: lightgrey;
  cursor: pointer;
  :hover {
    color: #83677B;
    background: lightgrey;
    transition: 300ms;
    border-radius: 4px;
  }
`
const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid white; */
  margin-left: 20px;
`
const StyledImg = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
  margin-right:  8px;
`

const StyledInput = styled.input`
  color: skyblue;
  outline: none;
  border-radius: 5px;
  /* background: lightgrey; */
  padding: 0px 45px 0px 15px;
  height: 40px;
  color: black;
  font-size: 17px;
  outline: none;
  width: 220px;
  ::placeholder {
    color: darkgrey;
    font-size: 16px;
  } 
`
const searchIcon = "https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-search-icon-by-vexels.png"


const Navbar = () => {
  return (
    <StyledDiv>
      <StyledSection>
        <Link to="/"><StyledImg src={Logo} alt="logo" /></Link>
        <nav>
          <StyledUl>
            <Link to="/discover"><StyledLi>Discover</StyledLi></Link>
            <StyledLi>Live</StyledLi>
            <StyledLi>Jobs</StyledLi>
            <StyledLi>Adobe</StyledLi>
            <StyledLi>About</StyledLi>
          </StyledUl>
        </nav>
      </StyledSection>
      <div style={{
        position: "relative", width: "210px", display: "flex", marginRight: "15px", flexDirection: "row", alignItems: "center"
      }}>
        <StyledInput placeholder="Search" type="text" />
        <img style={{ width: "20px", cursor: "pointer", height: "20px", position: "absolute", top: "calc(50% - 10px)", right: "calc(15% - 20px)" }} src={searchIcon} />
      </div>
    </StyledDiv >

  )
}


export default Navbar