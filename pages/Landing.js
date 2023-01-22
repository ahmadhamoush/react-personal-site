import React from 'react'
import styled, { css } from 'styled-components'
import Nav from '../components/Nav'
import image from '../images/me.png'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import { tablet, mobile } from '../devices'

const Container = styled.div`
background-color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
display:flex;
flex-direction:column ;
justify-content:center;
align-items:stretch;
text-align: center ;
transition:0.5s ease-in-out;

`
const LandingContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding: 20px;


${tablet(css`
flex-direction: column-reverse;
   `)};

`

const Left = styled.div`
margin-left: 10%;
height:400px;
display:flex;
flex-direction: column ;
justify-content:space-between;
align-items:center;

${tablet(css`
margin:0;
   `)};
`
const TopLeft = styled.div`
margin:20px;
>button{
    margin:20px;
}
`

const Right = styled.div`

`
const Header = styled.h1`
font-size:50px;
color: ${props=> props.isDarkMode ? 'white' : '#1E1E1E'};
font-weight:bold;`

const Image = styled.img`
object-fit: cover ;
width:400px;
${tablet(css`
border-radius: 50px ;
width:300px;
   `)};

 ${mobile(css`
width:200px;
   `)};

`

const Button = styled.button`
cursor: pointer;
background-color:#75BEC8;
color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
padding:15px 25px;
border:none;
border-radius: 30px ;
font-size: 20px;
transition:0.5s ease-in-out;
border: ${props=>!props.isDarkMode && '1px solid #75BEC8'};

&:hover, &:active{
    color: #75BEC8;
    background-color: white; ;
}
`
const Icons = styled.div`
display:flex;
justify-content:center;
align-items:center;
color: ${props=> props.isDarkMode ? 'white' : '#1E1E1E'};

> * {
    font-size: 30px ;
    margin: 20px 15px; ;
    cursor: pointer;
    transition:0.5s ease-in-out;
  }
  
  > *:hover, > *:active{
    transform: translateY(-7px) ;
    color:#75BEC8;
}
`

const Landing = ({isDarkMode}) => {

  return (

    <Container isDarkMode = {isDarkMode}>
        <Nav isDarkMode = {isDarkMode} /> 
       <LandingContainer>
       <Left>
       <TopLeft>
       <Header isDarkMode = {isDarkMode}>
            Web Developer
        </Header>
        <Button isDarkMode = {isDarkMode}>Download Resume</Button>
       </TopLeft>
        <Icons  isDarkMode = {isDarkMode}>
        <BsInstagram />
        <BsGithub />
        <BsLinkedin />
        </Icons>
        </Left>
        <Right>
        <Image src={image}/>
        </Right>
       </LandingContainer>
    </Container>
  )
}

export default Landing