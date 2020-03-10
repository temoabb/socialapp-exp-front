import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Input from './Input.jsx'
import Button from './Button.jsx'


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid skyblue;
  border-radius: 5px;
  width: 500px;
  height: 400px;
  margin-top: 50px;

`
const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%; 
  margin-right: 8px;
  cursor: pointer;
`
const color = {
  color: "skyblue"
}

const spanStyle = {
  fontSize: "12px",
  color: "skyblue"
}

const Registration = () => {
  return (
    <StyledDiv>
      <h1 style={color}>Create account</h1>
      <div>
        <StyledImg src="https://i.ya-webdesign.com/images/why-does-my-png-have-a-black-background-5.png" />
        <StyledImg src="https://library.kissclipart.com/20180925/qbq/kissclipart-gmail-logo-png-white-clipart-computer-icons-clip-a-f4de067635253b66.png" />
        <StyledImg src="https://library.kissclipart.com/20180918/pvw/kissclipart-linkedin-icoon-png-clipart-linkedin-computer-icons-5982e4eda47e2385.png" />
      </div>
      <h5 style={color}>use your email for registration</h5>
      <Input text="Name" imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png" />
      <Input text="Email" imgsrc="https://i.ya-webdesign.com/images/embed-a-png-in-gmail-2.png" />
      <Input text="Password" imgsrc="https://cdn.onlinewebfonts.com/svg/img_189270.png" />
      <div>
        <Button description="Sign up" />
        <span style={spanStyle}>or</span>
        <Link to="/signin"><Button description="Sign in" /></Link>
      </div>
    </StyledDiv>
  )
}


export default Registration