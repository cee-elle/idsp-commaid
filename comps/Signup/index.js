import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button2 from "../Button2";



const Container = styled.div`
  // flex-direction: column;
  background: ${(props) => (props.bgColor ? props.bgColor : "#FFD556")};
  box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  width:100%;
  height:100%;
  text-align: center;
  margin-top: 50px;
  justify-content: center;
 
`;

const Header = styled.h2`

`;

const Textcont = styled.p`
width:80%;
`;

const Buttonbox = styled.div`
  justify-content: center;
  align-items: center;
  height: 80px;
  display: inline-flex;
  margin-top: 25px; 
//  flex-direction:column;
  
`;



const Graphic = styled.img `
border-radius: 50%;
width: ${props => props.imgwidth ? props.imgwidth:10}%;
height: ${props => props.imgheight ? props.imgheight:10}%;
object-fit:contain;
margin-bottom:20px;
`;

const Innercont = styled.div `
display:inline-flex;
flex-direction: column;
align-items:center;

`;

const SignUpLink = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  overflow-x: visible;
`;

const Link = styled.a`
  color: #5887ff;
  margin: 0px;
  margin-left: 4px;
  filter: brightness(100%);
  cursor: pointer;
  :hover {
    filter: brightness(130%);
  }
`;

const Para = styled.p`
  margin: 0px;
`;

const Signup = ({bgColor, text, par,src, imgheight, imgwidth, onClick}) => {
  return (
    <Container bgColor={bgColor}>
      <Innercont>
      <Header>{text}</Header>
      <Graphic imgheight={imgheight} imgwidth={imgwidth} src={src}></Graphic>
            <Textcont>{par}</Textcont>
            <Buttonbox onClick={onClick}>
              <Button2
              color="black"
              bgcolor="White"
              type="submit"
              radius="25px"
              ><h5>Sign Up</h5></Button2> 
            </Buttonbox>
            <div>
            <SignUpLink>
          <Para>Already a member?</Para>
         <Link  href="/Login">Login</Link>
        </SignUpLink> 
            </div>
         
      </Innercont>
      
  
    </Container>
  );
};

Signup.defaultProps = {

};

export default Signup;

