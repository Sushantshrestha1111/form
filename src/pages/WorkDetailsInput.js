import React, { useState } from 'react';
import styled from 'styled-components';
import CustomBg from '../components/customBackground';

const ParagraphInput = () => {
  const [paragraph, setParagraph] = useState('');

  const handleInputChange = (event) => {
    setParagraph(event.target.value);
  };

  return (
    <Container>
        <CustomBg text="Details of work carried out"/>
     
      <TextArea
        value={paragraph}
        onChange={handleInputChange}
        placeholder="Type here"
      />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 798px;
  height: 150px; /* Adjust the height as needed */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  resize: vertical; /* Allow vertical resizing */

  &:focus {
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
  }
`;

export default ParagraphInput;
