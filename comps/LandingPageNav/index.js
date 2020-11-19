import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
    background-color: #FFF;
    box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    padding: 40px 0 25px 0;
`;

const Logo = styled.img `
    display: flex;
    height: 75px;
`;

const NavBar = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 15% 0 15%;
    cursor: pointer;
`;

const LandingPageNav = () => {
    return <NavContainer>
        <Logo src="./LogoWtext.svg"></Logo>
        <NavBar>
            <a>How it Works</a>
            <a>For Volunteers</a>
            <a>For Organizers</a>
            <a>About CommAid</a>
        </NavBar>
    </NavContainer>
    
}

export default LandingPageNav;