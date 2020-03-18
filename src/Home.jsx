import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../src/Button.jsx'


const StyledDiv = styled.div`
  display: flex;
  margin-left: calc(50% - 200px);
  flex-direction: column;
  border-radius: 3px;
  justify-content: space-evenly;
  width: 400px;
  height: 200px;
  align-items: center;
  
`

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
`

const StyledBtn = styled.button`
  width: 155px;
  height: 50px;
  border: none;
  background: #738189;
  font-size: 20px;
  border-radius: 3px;
  color: whitesmoke;
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: lightgray;
    background: darkgreen; 
    border: none;
    transition: 400ms;
  }
`

const Home = () => {
  return (
    <div>
      <StyledDescription>
        <h1 style={{ color: "lightgrey", fontSize: "40px", maxWidth: "730px", textAlign: "center" }}>Teachers are the innovators education has been waiting for.</h1>
        <p style={{ color: "lightgrey", fontSize: "18px" }}>Preparing our students to be the problem solvers of tomorrow</p>
        <Link to="/signup"><StyledBtn>Join us</StyledBtn></Link>
      </StyledDescription>
      <StyledDiv>
        <h5 style={{ color: "#738189", fontSize: "20px" }}>Create account or sign in:</h5>
        <div>
          <Link to="/signup"><Button description="Sign up" /></Link>
          <Link to="/signin"><Button description="Sign in" /></Link>
        </div>

      </StyledDiv>

    </div >
  )
}


export default Home