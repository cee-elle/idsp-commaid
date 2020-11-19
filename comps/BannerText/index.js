import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
`;

const Text = styled.h1`
    display: inline-flex;
    color: #000000;
    div {
        margin-left: 0.25em;
        color: #27AE60;
    }
`;

const BannerText = () => {
    return <Container>
            <Text>Help Support Your <div>Community</div></Text>
        </Container>
}

export default BannerText;