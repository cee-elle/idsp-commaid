import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const VExpCont = styled.div`
    height: auto;
    max-width: 100vw;
    min-width: 50vw;
    background-color: white;
    box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    padding: 75px;
    margin: 50px 0 200px 0;
`;

const VExperience = styled.h4`
    margin-bottom:50px;
`;
    
const VCompany = styled.div`
    display:flex;
    margin-bottom:50px;
`;

const VCompanyInfo = styled.div`
    margin-left:45px;
    p {
        color:rgba(0,0,0,0.6);
    }
`;

const VPastExp = styled.div`
    display:flex;
    color:rgba(0,0,0,0.6);
    h5{
        margin-right: 10px;
    }
`;

const Expand = styled.img`
    display: flex;
    transform:${props=>props.rotated? 'rotate(-180deg)' : 'rotate(0deg)'} ;
    transition: transform 0.5s;
    justify-content: space-between;
`;

const VolunteerPageExperience = ({onClick, companyName, time, view, expand})=>{

    const [expanded, setExpanded] = useState(false);
    useEffect(()=>{
        setExpanded(expand);
    }, [expand])

    const [rotated, setRotated] = useState(false);

    return <VExpCont>
        <VExperience>Volunteer Experience</VExperience>
        <VCompany>
            <img src="CompanyLogo.svg" />
            <VCompanyInfo>
                <h2>{companyName}</h2>
                <p><i>{time}</i></p>
            </VCompanyInfo>
        </VCompany>
        <VPastExp onClick={()=>{
                setExpanded(!expanded);
                setRotated(!rotated);
            }}>
            <h5>{view}</h5>
            <Expand src="black-down-arrow.svg" rotated={rotated}></Expand>
        </VPastExp>
    </VExpCont>
}

VolunteerPageExperience.defaultProps = {
    companyName:"Elderly Care",
    time:"2020-present",
    view:"Past Experiences"
}

export default VolunteerPageExperience;