import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const BannerCont = styled.img`
width: 103%;
height: 100%;
display: flex;
margin-left: -1%;
align-items: center;
justify-content: center;
`;



const Banner = ({}) =>{
    return <BannerCont src="./banner.svg">
    </BannerCont>
    
}

export default Banner;