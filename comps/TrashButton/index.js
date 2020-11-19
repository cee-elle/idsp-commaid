import React from 'react';
import styled from 'styled-components';

const TrashButtonBox = styled.button`
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
    padding: 10px;
    border: none;
    box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.41);
`;
const TrashButtonImg = styled.img`
    width: 20px;

`;
const TrashButton = ({}) => {
    return <TrashButtonBox>
    <TrashButtonImg  width = {"25px"} src={"https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png"}>
    </TrashButtonImg>
    </TrashButtonBox>
}
export default TrashButton;