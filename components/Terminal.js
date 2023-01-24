import React from 'react'
import styled from 'styled-components'
import { tablet,mobile } from '../devices'
import { css } from 'styled-components'
import Typewriter from 'typewriter-effect';

const Container = styled.div`
position:relative ;
margin:20px;
width:500px;
min-height: 350px ;
height:auto;
border-radius: 20px;
background-color: white ;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px 0px, rgba(0, 0, 0, 0.22) 0px 15px 12px 0px;
${tablet(css`
width:350px;
   `)};

 ${mobile(css`
width:250px;
   `)};

`
const ToolBar = styled.div`
position: absolute;
top:0;
border-top-left-radius: 20px ;
border-top-right-radius: 20px ;
width: 100%;
background: linear-gradient(to bottom, #d1d1d1 0%, #eee 100%);
filter:contrast(80%);
&::after{
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}`

const Circles = styled.div`
position:relative ;
display:flex ;
align-items:center ;
padding:5px;
`
const Circle = styled.div`
width:10px;
height:10px;
margin: 0 5px;
border-radius:50% ;
background-color: ${props=>props.color};

`
const Text = styled.span`
font-size:12px;
position:relative;
margin:auto ;
font-weight:bold ;
`
const Bar = styled.div`
position:absolute;
top:50px;
right:0;
width:8px;
height:25px;
background-color:#75BEC8;
border-radius:10px ;
`
const TerminalContent = styled.div`
position:relative ;
padding-top:30px;
padding-bottom: 10px ;
color:#75BEC8;
font-weight:bold ;
font-size:15px;
text-align:left ;
margin:5px;
font-size: 12px ;
`
const Terminal = () => {
  

var txt = [
  "FORCE: XX0022. ENCYPT://000.222.2345",
  "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
  "RETRY: REINDEER FLOTILLA",
  "Z:> /HAMOUSH/DOCUMENTS/DATA/ EXECUTE -DEV 0",
  "============================================",
  "Priority 1 // local / scanning...",
  "scanning ports...",
  "BACKDOOR FOUND (23.45.23.12.00000000)",
  "BACKDOOR FOUND (13.66.23.12.00110000)",
  "BACKDOOR FOUND (13.66.23.12.00110044)",
  "...",
  "...",
  "BRUTE.EXE -r -z",
  "...locating vulnerabilities...",
  "...vulnerabilities found...",
  "MCP/> DEPLOY CLU",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "SCAN: __ 0001.0000.0554.0550",
  "SCAN: __ 0012.0000.0553.0030",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
]





// setTimeout(() => { msg.style.background = "limegreen";
// msg.innerHTML = "ACCESS GRANTED";
// msg.style.boxShadow = "0 0 30px limegreen";
// console.style.display = "none";}, 5000);

  return (
    <Container>
        <ToolBar>
            <Circles>
                <Circle color={'red'}/>
                <Circle color={'yellow'}/>
                <Circle color={'green'}/>
                <Text className='msg'>Terminal - login - 80x24</Text>
            </Circles>
        </ToolBar>
        <Bar />
       
   
      <TerminalContent>
      <Typewriter
  onInit={(typewriter) => {
    txt.map(item=>{
        typewriter.typeString(item + `<br/>`)
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .changeDelay('1000')
      .start();
    })
  }}
/>
      </TerminalContent>
                    
        </Container>
  )
}

export default Terminal
