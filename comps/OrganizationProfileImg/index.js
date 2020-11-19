import React from 'react';
import styled from 'styled-components';
import ImgChangeButton from '../Button';

const OrgImgCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
`;

const OrgDP = styled.div`
    width: 150px;
    height: 150px;
    border: 5px solid #c4c4c4;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const OrgProfileBtn = styled.div`
    width: auto;
    margin-top: 25px;
`;


const OrganizationProfileImg = ({onClick, img})=>{
    return <OrgImgCont>
        <OrgDP><img src="CompanyLogo.svg" width="100px"/></OrgDP>
        <OrgProfileBtn onClick={onClick}><ImgChangeButton text="Change Image" color="black"  /></OrgProfileBtn>   
    </OrgImgCont>
}

OrganizationProfileImg.defaultProps = {
    img:null
}

export default OrganizationProfileImg;