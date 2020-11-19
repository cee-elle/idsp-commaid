import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button2 from '../Button2';
import SaveLater from '../SaveLater';
import {useRouter} from 'next/router';

const Container = styled.div`
  background: #ffffff;
  box-shadow: 1px 1px 7px lightgrey;
  border-radius: 25px;
  height: fit-content;
  padding: 40px;
  width: 100%;
  display: flex;
  position: relative;
  background-color: rgb(255,255,255, 0.95);
`;

const CompanyLogo = styled.img`
  border: solid 1px grey;
  width: 90%;
`;

const LeftCont = styled.div`
flex: 1;
padding-right: 40px;
`;

const RightCont = styled.div`
flex: 4;

`;


const HR = styled.div`
width: 100%;
height: 1px;
background-color: lightgrey;
margin-bottom: 10px;
margin-top: 10px;
`;

const Specifics = styled.h4`
line-height: auto;
margin-right:10px;
`;

const SpecificsAns = styled.p`
margin: 0px;
font-size: 110%;
`;


const Specifics2 = styled.p`
font-size: 110%;
font-weight: 600;
margin: 0px;
`;


const H4 = styled.h4`
margin-bottom: 0px;
`;

const SpecificsContainer = styled.div`
display: flex;
align-items: center;
max-height: 40px;
`;


const VolunteerInfo1 = ({position, commitment, orgName, experience, duties, about}) => {
  const router = useRouter()
  return (
    <Container>
      <LeftCont>
        <CompanyLogo src="./CompanyLogo.svg" />
        <SaveLater fontSize="96%"></SaveLater>
      </LeftCont>
      
      <RightCont>
          <h2>Elderly Care</h2>
          <SpecificsContainer>
            <Specifics>Position: </Specifics>
            <SpecificsAns>{position}</SpecificsAns>
            </SpecificsContainer>
            <SpecificsContainer>
          <Specifics>Organization:</Specifics>
          <SpecificsAns>{orgName}</SpecificsAns>
          </SpecificsContainer>
          <SpecificsContainer>
          <Specifics>Commitment:</Specifics>
          <SpecificsAns>{commitment}</SpecificsAns>
          </SpecificsContainer>
          <SpecificsContainer>
            <Specifics>Experience Required: </Specifics>
            <SpecificsAns>{experience}</SpecificsAns>
          </SpecificsContainer>
          <HR></HR>
     
            <H4>Your Duties</H4>
            <SpecificsAns>{duties}</SpecificsAns>
   
            <H4>About Us</H4>
            <SpecificsAns>{about}</SpecificsAns>
            <br></br>
            <HR></HR>
            <Specifics2>Interested? Fill out our application form and send it to our email in the Contact Us section below</Specifics2>
            <br></br>
          
            <Button2 width="max-content" bgcolor="#7480FF" onClick={() =>router.push('/ApplicationForm')}>Application Form</Button2>
      </RightCont>
    </Container>
  );
};

VolunteerInfo1.defaultProps = {
  position: null,
  commitment: null,
  orgName: null,
  experience: null,
  duties: null,
  about: null,
};

export default VolunteerInfo1;
