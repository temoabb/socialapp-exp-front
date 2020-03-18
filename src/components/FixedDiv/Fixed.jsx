import React from 'react'
import styled from 'styled-components'

const StyledMessenger = styled.div`
  width: 280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  background: lightgrey;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #83677B;
  cursor: pointer;
  border-top-right-radius: 8px;
  z-index: 100;
  :hover {
    color: lightgrey;
    background: darkgreen;
    transition: 300ms;
  }
`

const messengerLink = "https://cdn.iconscout.com/icon/free/png-256/facebook-messenger-2-569346.png"

const Fixed = () => {
  return (
    <StyledMessenger>
      <h1 style={{ fontSize: "18px" }}>Any qustion? Contact us</h1>
      <img style={{ width: "25px", height: "25px" }} src={messengerLink} alt="messenger" />
    </StyledMessenger>
  )
}


export default Fixed