import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "../Search";
import { useRouter } from "next/router";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  padding-bottom: 10px;
  justify-content: center;
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex;
  
`;

const InnerCont = styled.div`
  width: 95%;
  display: flex;
  margin-top: 30px;
`;


const NavCont = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: relative;
  padding-top: 20px;
`;
const NavCont2 = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoWtext = styled.img`
  display: flex;
  max-width: 15%;
  :hover {
    cursor: pointer;
  }
`;

const NavLinksCont = styled.div`
  display: flex;
`;

const SearchCont = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

const LoginCont = styled.div`
  display: flex;
  top: -20px;
  right: 0px;
  z-index: 2;
  justify-content: flex-end;
  position: absolute;
`;

const LoginLink = styled.a`
  display: flex;
  color: grey;
  :hover {
    color: #578dc4;
    cursor: pointer;
  }
`;

const LinkText = styled.div`
  display: flex;
  width: max-content;
`;

const NavLinks = styled.a`
  padding: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "white")};
  cursor: pointer;
  width: 70px;
  position: relative;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    background-color: #f2f2f2;
    filter: brightness(100%);
  }
`;

const Icons = styled.img`
  margin: 10px;
  max-height: 25px;
  width: auto;
`;

const IconHeart = styled.img`
  margin: 10px;
  max-height: 25px;
  width: auto;
`;

const NavBarVolunteer = ({nav1Text, nav2Text, nav3Text, nav1Src, nav2Src, nav3Src,loginStatus}) => {
 /* const [bgcolor, setBgColor] = useState(false);
  function onPageHighlight(){
    if(bgcolor===false){
      setBgColor(true);
    }
      else{
        setBgColor(false);
      }
    }
*/
  
  const router = useRouter();
  return (
    <Container>
      <InnerCont>
    <NavCont>
      <LoginCont>
        <LoginLink
        onClick={() => {
          //if logged in, text will show option to logout and onclick it will logout and redirect to volunteer listing page or landing page. If logged out, text will show Login option and onclick will lead to login page.
            router.push("/Login")
          }}
        >{loginStatus}</LoginLink>
      </LoginCont>
      <NavCont2>
        <LogoWtext
          onClick={() => router.push("/VolunteerListingPage")}
          src="./LogoWtext.svg"
        ></LogoWtext>
        <SearchCont>
          <Search></Search>
        </SearchCont>
        <NavLinksCont>
          <NavLinks
           bgcolor={router.pathname === "/VolunteerSavedTable" ? "#f2f2f2" : null}
            onClick={() => {
            //  onPageHighlight();
             router.push("/VolunteerSavedTable")
            }}
          >
            <IconHeart src={nav1Src} />
            <LinkText></LinkText>
            {nav1Text}
          </NavLinks>
          <NavLinks
           bgcolor={router.pathname === "/HourTracker" ? "#f2f2f2" : null}
          onClick={() => {
           // onPageHighlight();
           router.push("/HourTracker")
           
          }}
          >
            <Icons src={nav2Src} />
            <LinkText>{nav2Text}</LinkText>
          </NavLinks>
          <NavLinks
           bgcolor={router.pathname === "/VolunteerProfile" ? "#f2f2f2" : null}
           onClick={() => {
          //  onPageHighlight();
            router.push("/VolunteerProfile")
          }}
          >
            <Icons src={nav3Src} />
            {nav3Text}
          </NavLinks>
        </NavLinksCont>
      </NavCont2>
    </NavCont>
    </InnerCont>
    </Container>
  );
};

NavBarVolunteer.defaultProps = {
  nav1Text: "Saved",
  nav2Text: "Track Time",
  nav3Text: "Account",
  nav1Src: "heartFilled.svg",
  nav2Src: "./time.svg",
  nav3Src: "./profile.svg",
  loginStatus: "Login/Logout",
  
};

export default NavBarVolunteer;
