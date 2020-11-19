import React from 'react';
import styled from 'styled-components';
import ImgChangeButton from '../Button';

const ODescCont = styled.div`
    height: auto;
    min-width: 30vw;
    background-color: white;
    box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    padding: 50px 75px 75px;
    position:relative;
`;

const ONameCont = styled.h2`
    margin-bottom:35px;
`;

const OInfoCont = styled.div`
    p {
        margin-top: -10px;
        margin-bottom:35px;
    }
`;

const OrgBtn = styled.div`
    position:relative;
    bottom:0;
`;

const OrganizationDescription = ({onClick, name, description})=>{
    return <ODescCont>
        <ONameCont>{name}</ONameCont>
        <OInfoCont>
            <h4>Organization Description</h4>
            <p>{description}</p>
        </OInfoCont>
        <OrgBtn onClick={onClick}><ImgChangeButton text="Edit" color="black"/></OrgBtn>
    </ODescCont>
}

OrganizationDescription.defaultProps = {
    name:null,
    description:null
}

export default OrganizationDescription;