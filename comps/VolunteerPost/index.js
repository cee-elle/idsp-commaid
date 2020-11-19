import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SaveLater from '../../comps/SaveLater';
import { useRouter } from "next/router";

const PostCont = styled.div`
  background: #ffffff;
  box-shadow: 1px 1px 7px lightgrey;
  border-radius: 25px;
  height: fit-content;
  padding: 30px;
  width: fit-content;
  display: flex;
  position: relative;
  margin: 20px;
`;

const ContLeft = styled.div`
  display: flex;
  padding-right: 20px;
  position: relative;
  height: 60%;
  flex: 1;
`;

const ContRight = styled.div`
  display: flex;
  height: fit-content;
  position: relative;
  flex-direction: column;
  flex: 4;
  justify-content: space-between;
`;

const PositionTitle = styled.h2`
  margin-bottom: auto;
  margin-top: auto;
  width: max-content;
  flex-direction: column;
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

const PositionDesc = styled.p`
  margin-bottom: auto;
  margin-top: -10px;
`;

const PositionCommitment = styled.h4``;

const CompanyLogo = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid lightgrey 1px;
`;

const HR = styled.hr`
  width: 100%;
  border-top: 1px solid lightgrey;
`;

const SaveNLocation = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;


const Location = styled.h4`
  display: flex;
  margin-left: 30px;
  width: 100%;
`;




const VolunteerPost = ({ position, desc, commit, location, organization }) => {
  const router = useRouter();
  return (
    <PostCont>
      <ContLeft>
        <CompanyLogo>
          <img src="./CompanyLogo.svg" />
        </CompanyLogo>
      </ContLeft>
      <ContRight>
        <PositionTitle  onClick={() => router.push("/VolunteerInformationPage")}>{position}</PositionTitle>
        <h4>{organization}</h4>
        <PositionDesc>{desc}</PositionDesc>

        <PositionCommitment>{commit}</PositionCommitment>
        <HR></HR>
        <SaveNLocation>
          <SaveLater></SaveLater>
          <Location>{location}</Location>
        </SaveNLocation>
      </ContRight>
    </PostCont>
  );
};

VolunteerPost.defaultProps = {
  position: "Elder Care",
  organization:null,
  desc: null,
  commit: null,
  location: null,
  imgsource: "./heart.svg",
};

export default VolunteerPost;
