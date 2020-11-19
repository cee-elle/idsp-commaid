import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const Container = styled. div `
padding:0;
display:flex;

`;

const Logoimage = styled.img `
`;


const Logo = ({}) =>{
    return <Container>
<Logoimage src="/logo.png"></Logoimage>
    </Container>
};

export default Logo;
