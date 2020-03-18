import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div`
 width: 390.5px;
 height: 450.56px;
 margin: 0px 0px 48px;
 display: flex;
 flex-direction: column;
 cursor: pointer;
 background: white;
 border-radius: 12px;
 box-shadow: 0px 2px 0px 0px grey;
 :hover {
   box-shadow: 10px 10px 0px 0px #E3E3E3;
   transition: 400ms;
 }
`
const StyledImgDiv = styled.div`
  width: 100%;
  height: 60%;
`
const StyledBanner = styled.img`
  width: 100%;
  height: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`
const StyledBody = styled.div`
  width: 390.5px;
  padding: 20px 20px;
  font-display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 1.8px solid #F2F2F2;
`

const StyledStatsBar = styled.div`
  width: 390.5px;
  height:58px;
  padding: 5px 0px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid green; */
`

const spansArr = [
  {
    width: "15px",
    height: "15px",
    background: "green",
    borderRadius: "50%",
    margin: "3px"
  },
  {
    width: "15px",
    height: "15px",
    background: "black",
    borderRadius: "50%",
    margin: "3px"
  },
  {
    width: "15px",
    height: "15px",
    background: "red",
    borderRadius: "50%",
    margin: "3px"
  },
]

const styledFlexColumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-start"
}

const styledFlexRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
}

const StyledStatsIcon = styled.img`
  width: 22px;
  height: 22px;
  margin: 0px 5px;
`


const awardImg = "https://pluspng.com/img-png/award-ribbon-png-black-and-white-award-badge-badge-badge-with-ribbon-emblem-seal-icon-512.png"
const viewImg = "https://cdn3.iconfinder.com/data/icons/roundies-icons/32/view-512.png"
const likeImg = "https://i.ya-webdesign.com/images/facebook-logo-black-png-3.png"



const Item = ({ banner, date, author, country, websitescore, websitehits, websitelikes }) => {
  return (
    <StyledDiv>
      <StyledImgDiv>
        <StyledBanner src={banner} />
      </StyledImgDiv>
      <StyledBody>
        <div style={styledFlexRow}>
          <h1 style={{ fontSize: "20px" }}>{author}</h1>
          <div style={styledFlexRow}>
            {spansArr.map(
              item => (
                <div style={item}></div>
              )
            )}
          </div>
        </div>
        <div style={styledFlexColumn}>
          <span style={{ fontSize: "14px", color: "grey" }}>{date}</span>
          <span style={{ fontSize: "14px", color: "grey" }}>{country}</span>
        </div>
      </StyledBody>
      <StyledStatsBar>
        <div style={styledFlexRow}>
          <StyledStatsIcon src={awardImg} />
          <span>{websitescore}</span>
        </div>
        <div style={styledFlexRow}>
          <StyledStatsIcon src={viewImg} />
          <span>{websitehits}</span>
        </div>
        <div style={styledFlexRow}>
          <StyledStatsIcon src={likeImg} />
          <span>{websitelikes}</span>
        </div>
      </StyledStatsBar>
    </StyledDiv>
  )
}



export default Item