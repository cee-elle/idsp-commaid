import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.h3`
color:${props=>props.color ? props.color : "White"};
    width: 100%;
    text-align: center;
    margin-bottom: 25px;
    font-size: 240%;
    font-weight: 600;
`;

const Line = styled.div`
    width: 100%;
    max-height: 0px;
    border-bottom: 1px solid ${props=>props.borderColor ? props.borderColor : "#C4C4C4"};
`; 

const PageHeaders = ({children, color, borderColor}) => {
    return <PageContainer>
        <Header color={color}>{children}</Header>
        <Line borderColor={borderColor}/>
    </PageContainer>
}



export default PageHeaders;