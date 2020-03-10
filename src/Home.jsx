import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../src/Button.jsx'


const StyledDiv = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  border: 1px solid skyblue;
  border-radius: 3px;
  justify-content: space-evenly;
  width: 400px;
  height: 400px;
  align-items: center;
`
const StyledSections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const color = {
  color: "skyblue"
}

const StyledImg = styled.img`
  width: 70px;
  height: 70px;
`


const Home = () => {
  return (
    <StyledDiv>
      <h1 style={color}>Welcome to Diprella! </h1>
      <StyledImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png" alt="gfgf" />
      <StyledSections>
        <h5 style={color}>Create Account:</h5>
        <Link to="/signup"><Button description="Sign up" /></Link>
      </StyledSections>
      <StyledSections>
        <h5 style={color}>Already have an account?</h5>
        <Link to="/signin"><Button description="Sign in" /></Link>
      </StyledSections>
    </StyledDiv>
  )
}


export default Home