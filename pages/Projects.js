import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: ${props=>props.isDarkMode ? '#1E1E1E' : "white"};
`
const Header =styled.h1`
font-size:30px;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
`

const Projects = ({isDarkMode}) => {

  return (
    <Container>
        <Header isDarkMode ={isDarkMode}>Projects</Header>
    </Container>
  )
}

export default Projects
