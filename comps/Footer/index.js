import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 240px;
  background-color: #192734;
  display: flex;
  flex-direction: column;
  color: lightgrey;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const TopCont = styled.div`
  border-bottom: white 1px solid;
  width: 80%;
  display: flex;
  flex-direction: row;
`;

const Link = styled.a`
  color: white;
  display: flex;
  line-height: 30px;
  opacity: 90%;
`;

const CopyrightsNVectorShoutout = styled.div`
  color: grey;
  text-align: center;
`;

const LinkCont1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  flex: 3;
  margin-bottom: 4%;
`;

const LinkCont3 = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 4%;
  flex: 2;
`;

const LinkCont2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 4%;
  flex: 2;
`;

const BottomCont = styled.div``;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35%;
  align-items: left;
  justify-content: left;
  margin-bottom: 3%;
`;

const LogoImg = styled.img`
  display: flex;
  width: 100%;
  justify-content: left;
  align-items: left;
`;

const Headers = styled.h3`
  margin-bottom: 0px;
  color: #ffc627;
  opacity: 94%;
  font-weight: 500;
`;

const Icons = styled.img`
  padding-right: 15px;
  height: 15px;
`;

const Icon2 = styled.img`
padding-right: 15px;
height: 25px;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const AboutUsPara = styled.div`
  width: 49%;
`;

const Socials = styled.img`
  max-width: 30px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  margin-left: 0px;
`;

const SocialsCont = styled.div``;

const Footer = () => {
  return (
    <Container>
      <TopCont>
        <LinkCont1>
          <Logo>
            <LogoImg src="./LogoWText.svg" />
            <i>Start Supporting Your Community</i>
          </Logo>
          <Headers>About Us</Headers>
          <AboutUsPara>
            <p>
              Our goal is to bring volunteers and organizations together with
              the common goal of helping out your community
            </p>
          </AboutUsPara>
        </LinkCont1>
        <LinkCont2>
          <Headers>Navigation</Headers>
          <br></br>
          <div>
            <Link>Volunteer Listings</Link>
            <Link>Account</Link>
          </div>
          <br></br>
          <SocialsCont>
            <Headers>Share on Social Media</Headers>
            <br></br>
            <Socials src="./facebook.svg" />
            <Socials src="./pinterest.svg" />
            <Socials src="./linkedin.svg" />
            <Socials src="./twitter.svg" />
          </SocialsCont>
        </LinkCont2>
        <LinkCont3>
          <Headers>Contact Us</Headers>
          <br></br>
          <ContactInfo>
            
              <Icon2 src="/phone-white.svg" />
              <Link>604-544-4444</Link>
            
          </ContactInfo>
          <ContactInfo>
            <Icons src="/email-white.svg" />
            <Link>commAid@outlook.com</Link>
          </ContactInfo>
        </LinkCont3>
      </TopCont>
      <BottomCont>
        <CopyrightsNVectorShoutout href="https://www.freepik.com/vectors/heart">
          Heart vector created by pch.vector - www.freepik.com
          <br></br>
          <p>Copyrights Team Take5 2020 &#169;</p>
        </CopyrightsNVectorShoutout>
      </BottomCont>
    </Container>
  );
};

export default Footer;
