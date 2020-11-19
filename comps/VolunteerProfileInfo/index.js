import React from 'react';
import styled from 'styled-components';

const VProfileCont = styled.div`
    height: auto;
    max-width: 100vw;
    min-width: 50vw;
    background-color: white;
    box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    padding: 75px;
`;

const NameCont = styled.p`
    margin-top: -15px;
    margin-bottom: 35px;
`;

const EmailCont = styled.p`
    margin-top: -15px;
    margin-bottom: 35px;
`;

const LocationCont = styled.p`
    margin-top: -15px;
    margin-bottom: 35px;
`;

const VolunteerProfileInfo = ({firstName, lastName, email, district})=>{
    //all these will requre async responses
    return <VProfileCont>
        <h4>Name</h4>
        <NameCont>{firstName} {lastName}</NameCont>
        <h4>E-mail</h4>
        <EmailCont>{email}</EmailCont>
        <h4>Vancouver District</h4>
        <LocationCont>{district}</LocationCont>
    </VProfileCont>
}

VolunteerProfileInfo.defaultProps = {
    //need to modify
    firstName:null,
    lastName:null,
    email:null,
    district:null
}

export default VolunteerProfileInfo;