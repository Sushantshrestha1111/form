import React from 'react'
import styled from 'styled-components'

function customBackground({text}) {
  return (
    <Container>
        <Wrapper>
            {text}

        </Wrapper>
    </Container>
    
  )
}

export default customBackground
const Container=styled.div`
background:#A3D8FF;
width:366px;
height:76px;
color:black;
margin-top:25px;
margin-bottom:25px;

border-radius: 0 20px 0 20px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

`
const Wrapper=styled.div`
font-size: 24px;
padding-left:15px;
padding-top:8px;

`