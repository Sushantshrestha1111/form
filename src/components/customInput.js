import React from 'react'
import styled from 'styled-components'
function customInput() {
  return (
    <Wrapper>
        
      <CustomInput type="text" id="customInput" placeholder="Type here..." />

    </Wrapper>
    
    

  )
}

export default customInput
const CustomInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 16px;
  outline: none;
  width:342px;
  height:39px;
 

  &:focus {
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
  }
`;
const Wrapper=styled.div`


`