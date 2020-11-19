import React from 'react';
import styled from 'styled-components';

const BackContainer = styled.div`
    display: inline-flex;
    align-items: center;
`;

const BackImg = styled.img`
    height: 22px;
`;

const BackTxt = styled.h5`
    margin-left: 15px;
`;

const ReturnPage = () => {
    return <BackContainer>
            <BackImg src="./Back.png" />
            <BackTxt> Return to previous page</BackTxt>
        </BackContainer>
}

export default ReturnPage;