import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Logo from "../Logo";


const Container = styled. div `
filter: drop-shadow(2px 3px 15px rgba(0, 0, 0, 0.1));
justify-content:center;
align-items:center;
display:flex;
background: white;
border-radius: 25px;
padding: 30px 120px;
text-align: center;
`;


const InnerCont = styled. div `
justify-content:space-around;
align-items:center;
display:flex;
flex-direction:column;
text-justify: center;
min-height:100%;
margin:auto;



`;
const Header = styled. h2 `

`;

const Text = styled. p`

`;

const LogoCont = styled.div`

`;

const AboutCommAid = ({h2, p}) =>{
    return <Container>
        <InnerCont>
<Header>{h2}</Header>
<Logo></Logo>

<Text>{p}</Text>
</InnerCont>
    </Container>
}




export default AboutCommAid;
