import React from 'react';
import styled from 'styled-components';
import CustomBg from '../components/customBackground';
import CustomInput from '../components/customInput';

import WorkDetailsInput from './WorkDetailsInput';
import Future from './Future';
import PathTableInput from '../components/PathTableInput';
import Labour from './labour';





function FormPage() {
  return (
    <Container>
      <Wrapper>
        <CustomBg text="General Details" />
        <Form>
          <FormSection>
            <Formright>
              <label>customer name</label>
              <CustomInput />

              <label>customer Address</label>
              <CustomInput />

              <label>Zip code</label>
              <CustomInput />

              <label>Plant Name</label>
              <CustomInput />
            </Formright>
          </FormSection>

          <FormSection>
            
            <Formleft>
              <label>Date</label>
              <CustomInput />

              <label>Job Name</label>
              <CustomInput />

              <label>customer Contact</label>
              <CustomInput />

              <label>customer tel no.</label>
              <CustomInput />
            </Formleft>
          </FormSection>
        </Form>
      
        <WorkDetailsInput />
        <Future/>
        <PathTableInput/>
        
        <Labour/>
     

       
        
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #feffff;
  height: 100vh;
  text-align: left;
`;

const Wrapper = styled.div`
 
  height: 100vh;
  width: 963px;
  margin-left: 237px;
  margin-top: 112px;

  @media (max-width: 1200px) {
    width: 80%; /* Adjust the width for smaller screens */
    margin-left: auto;
    margin-right: auto;
  }
`;

const Form = styled.div`
  margin-left: 43px;
  margin-top: 25px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column; /* Change to a column layout on smaller screens */
  }
`;

const FormSection = styled.div`
  display: flex;
  margin-right: 90px; /* Add margin between Formright and Formleft */

  @media (max-width: 768px) {
    margin-right: 0; /* Remove margin on smaller screens */
    margin-bottom: 20px; /* Add some space between sections */
  }
`;

const Formright = styled.div``;

const Formleft = styled.div``;

export default FormPage;
