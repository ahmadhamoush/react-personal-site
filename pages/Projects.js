import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'

const Container = styled.div`
padding:40px;
background-color: ${props=>props.isDarkMode ? '#1E1E1E' : "white"};
`
const Cards = styled.div`
display: flex ;
flex-wrap:wrap ;
justify-content: center ;
align-items: center ;
`
const Header =styled.h1`
font-size:30px;
padding:20px 50px ;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
`

const Projects = ({isDarkMode}) => {

  return (
    <Container isDarkMode ={isDarkMode}>
        <Header isDarkMode ={isDarkMode}>Projects</Header>
        <Cards>
        <Card image={img1}/>
        <Card image={img2}/>
        <Card image={img3}/>
        </Cards>
    </Container>
  )
}

export default Projects
