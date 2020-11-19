import React, { useState, useEffect } from "react";
import styled, {css} from 'styled-components';
import Lottie from 'react-lottie';
import animationData from './check-mark.json';


const Container = styled.div`
padding: 40px;
display: ${props => props.display ? props.display : "none"};
flex-direction: column;
width: 40%;
align-items: center;
justify-content: center;
background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.24);
  border-radius: 25px;
background-color: rgb(255,198,39, 0.7);
color: #333333;


`;

const Para = styled.p`
text-align:center;
font-size: 140%;
font-weight: 500;
`;

const LottieCheck = () =>{
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
        
      };
     
      return <Container>
          <Para><b>Congradulations!</b><br></br> You have applied for a volunteer position at ... . Check your email for a response in the next couple days </Para>
        <Lottie options={defaultOptions}
                height={200}
                width={200}
                speed={0.7}
                />
                </Container>
    }
  
export default LottieCheck;