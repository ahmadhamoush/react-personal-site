import React from 'react'
import styled from 'styled-components'
import skills from '../skills-data'

const Container = styled.div`
background-color: ${props=> props.isDarkMode ? '#1E1E1E' : 'white'};
`
const Header =styled.h1`
font-size:30px;
padding:20px 50px ;
text-align: center ;
color: ${props=>props.isDarkMode ? 'white' : '#1E1E1E'};
`
const Circles = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;`

const Circle = styled.div`
background-image: url(${props=>props.bg}) ;
width:120px;
height:120px;
background-position:center ;
background-size:cover ;
border-radius:50%;
margin: 15px;
cursor: pointer;`

const Skills = ({isDarkMode}) => {
  return (
    <Container isDarkMode={isDarkMode}>
        <Header isDarkMode={isDarkMode} >Skills</Header>
        <Header isDarkMode={isDarkMode} >Programming</Header>
        <Circles>
           {skills[0].map(item=>{
            return(
                <Circle key={item.id} bg={item.img} />
            )
           })}
        </Circles>
    </Container>
  )
}

export default Skills
