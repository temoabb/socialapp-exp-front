import React, { useState } from 'react'
import styled from 'styled-components'
import Input from './Input.jsx'
import Button from './Button.jsx'
import axios from 'axios'


const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-left: calc(50% - 300px);
  border: 2px solid grey;
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

const mailIcon = "https://i.ya-webdesign.com/images/embed-a-png-in-gmail-2.png"
const welcomeBackSrc = "https://pluspng.com/img-png/png-welcome-back--400.png"


const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const signin = async () => {
    try {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/sign-in',
        data: {
          email: email,
          password: password
        }
      })
      localStorage.setItem("accessToken", res.data.data)
      console.log('res', res)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (

    <StyledDiv>
      <h1 style={color}>Sign in</h1>
      <div>
        <StyledImg src="https://i.ya-webdesign.com/images/why-does-my-png-have-a-black-background-5.png" />
        <StyledImg src="https://library.kissclipart.com/20180925/qbq/kissclipart-gmail-logo-png-white-clipart-computer-icons-clip-a-f4de067635253b66.png" />
        <StyledImg src="https://library.kissclipart.com/20180918/pvw/kissclipart-linkedin-icoon-png-clipart-linkedin-computer-icons-5982e4eda47e2385.png" />
      </div>
      <h5 style={color}>use your email for registration</h5>
      {/* <Input text="Name" imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png" /> */}
      <Input onchange={handleEmail} text="Email" imgsrc={mailIcon} />
      <Input onchange={handlePassword} text="Password" imgsrc="https://cdn.onlinewebfonts.com/svg/img_189270.png" />
      <Button onclick={signin} description="Sign in" />
    </StyledDiv>

  )
}


export default Signin