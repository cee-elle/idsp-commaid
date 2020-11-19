import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
width: 100%;
max-height: 150px;
`;

const TextAreaStyle = styled.textarea`
resize: none;
max-height: 150px;
width: 100%;
border: 0.678715px solid #E4E4E4;
background: #fbfbfb;
border-radius: 5.42972px;
`;

const TextArea = ({children}) => {
    return <Container>
        <h5>{children}</h5>
        <TextAreaStyle rows="6"></TextAreaStyle>
    </Container>
}

export default TextArea;