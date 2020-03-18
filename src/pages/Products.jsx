import React from 'react'
import styled from 'styled-components'
import Item from '../components/Item/Item.jsx'


const StyledDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background: #F2F2F2;
  padding: 20px 0px 0px;
`

const details = [
  {
    banner: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d54f1792813081.5e551bce8d65f.jpg",
    author: "Unter freiem ",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e905ca74101865.5c2201bb0045a.gif",
    author: "Unter freiem Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://bestwebsite.gallery/uploads/imager/default/54495/unterfreiemhimmel_preview_95864e3358d68db19a6716d42003beb1.jpg",
    author: " Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://bestwebsite.gallery/uploads/imager/default/62305/coffee-circle-impact-report_preview_95864e3358d68db19a6716d42003beb1.png",
    author: " freiem Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b0861a92813081.5e551bce8716f.jpg",
    author: "Unter freiem",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },

  {
    banner: "https://bestwebsite.gallery/uploads/imager/default/16967/bakucitycircuit-preview_95864e3358d68db19a6716d42003beb1.jpg",
    author: "Unter freiem Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://bestwebsite.gallery/uploads/imager/default/13526/nerioslamaj-preview_95864e3358d68db19a6716d42003beb1.jpg",
    author: "Unter freiem Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://bestwebsite.gallery/uploads/imager/default/79210/manropefont-preview_95864e3358d68db19a6716d42003beb1.png",
    author: "Unter freiem Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/06cc0674730265.5c3856bbd20d6.jpg",
    author: "Unter freiem Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://bestwebsite.gallery/uploads/imager/default/63078/thannleder_preview_95864e3358d68db19a6716d42003beb1.png",
    author: "Unter freiem Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://bestwebsite.gallery/uploads/imager/default/84090/createwithplay_preview_95864e3358d68db19a6716d42003beb1.png",
    author: "Unter freiem Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://bestwebsite.gallery/uploads/imager/default/83638/bannerbear_preview_95864e3358d68db19a6716d42003beb1.png",
    author: "Unter freiem Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/93ae0a74101865.5c22f8fc98f8f.gif",
    author: "Unter freiem Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://bestwebsite.gallery/uploads/imager/default/62705/awwwards-conference-2019_preview_95864e3358d68db19a6716d42003beb1.png",
    author: "Unter freiem",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f0f13b70932481.5bb459e340414.jpg",
    author: "Unter freiem",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  },
  {
    banner: "https://bestwebsite.gallery/uploads/imager/default/14284/deck-preview_95864e3358d68db19a6716d42003beb1.jpg",
    author: "Unter freiem Himmel",
    date: "SOTD: 14. August 2018",
    country: "Austria",
    websitescore: "63.94",
    websitehits: "3497",
    websitelikes: "46"
  }

]

const Products = () => {
  return (
    <>
      <h1 style={{ padding: "22px", background: "#F2F2F2", color: "#738189", display: "flex", width: " 100%", justifyContent: "center" }}>See the best pictures from our gallery:</h1>
      <StyledDiv>

        {details.map(ellement => (
          <Item banner={ellement.banner} date={ellement.date} country={ellement.country} websitescore={ellement.websitescore} websitehits={ellement.websitehits} websitelikes={ellement.websitelikes} author={ellement.author} />
        ))}
      </StyledDiv>
    </>
  )
}

export default Products