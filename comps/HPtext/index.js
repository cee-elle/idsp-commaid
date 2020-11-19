import React from 'react';
import styled from 'styled-components';

const HPContainer = styled.div`
    max-width: 67.5%;
    background-color:white ;
    border: 3px solid rgb(255,198,39);
    padding: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const HPHeading = styled.h3`
    color: #231F20;
    margin: 0px;
`;

const HPPara = styled.p`
    color: #000000;
    font-size: 130%;
    margin-bottom: 0px;
`;

const HPtext = () => {
    return <HPContainer>
        <HPHeading>Find volunteer opportunities around Vancouver</HPHeading>
        <HPPara>
        Volunteer for a cause you’re passionate about, that fits within your busy schedule and is near you. Volunteering doesn’t need to be a struggle. There are many causes out there that need help, so to find the best fit for you, narrow down your search with our filters.
        </HPPara>
    </HPContainer>
};

export default HPtext;