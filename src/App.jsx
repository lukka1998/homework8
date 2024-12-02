import React, { useState } from 'react';
import styled from 'styled-components';
import image from "./assets/Star.svg"

function App() {
  const [rating, setRating] = useState(null);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {

    setRating(null);

  };

  return (
    <div style={{display:"flex",justifyContent:"center" ,alignItems:"center", height:"100vh"}}>
    <FormContainer>
      <div style={{display:"flex",justifyContent:"center" ,alignItems:"flex-start",flexDirection:"column" ,gap:"20px" ,width:"340px"}}>
      <StyledCircle><img src={image} alt="" /></StyledCircle>
      <Title>How did we do?</Title>
      <Description>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Description>
      <Rating>
        {Array.from({ length: 5 }, (_, i) => (
          <RatingButton
            key={i}
            active={rating === i + 1}
            onClick={() => handleRating(i + 1)}
          >
            {i + 1}
          </RatingButton>
        ))}
      </Rating>
      <SubmitB onClick={handleSubmit}>Submit</SubmitB>
      </div>
    </FormContainer>
    </div>
  );
}

export default App;

const FormContainer = styled.div`
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  border-radius: 30px;
  background: var(--black-gradient, radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%));
  width: 412px;
height: 416px;
  flex-shrink: 0;
  display: flex;
  justify-content:center;
  align-items: center;
  gap: 20px;
  padding: 20px

`;

const Title = styled.h2`
  color: var(--Pure-White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Overpass, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Description = styled.p`
   color: var(--Light-Grey, #969FAD);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: Overpass, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-self: center;
`;

const RatingButton = styled.button`
  background-color: ${(props) => (props.active ? '#e22626' : '#333')};
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 18px;
  align-self: center;
  cursor: pointer;
  color: ${(props) => (props.active ? '#fff' : '#ccc')};

  &:hover {
    
    background-color: #f1dede;
  }
`;

const SubmitB = styled.button`
  width: 341px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 22.5px;
  background: var(--Orange, #FC7614);
  cursor: pointer;
  border: none;
  color: var(--Pure-White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;

  font-family: Overpass;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  align-self: center;

  &:hover {
    background-color: #ff8800;
  }
`;
const StyledCircle = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 50%;
 
  background-color: #332e2e;
  justify-content: center;
  align-items: center;
  display: flex;
`;