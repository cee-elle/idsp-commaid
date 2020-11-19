import React from 'react';
import styled from 'styled-components';
import Button from "../Button";
import Button2 from '../Button2';
import LottieCheck from '../LottieCheck';

const ModalsBox = styled.div`
    background-color: #ffffff;
    width: 55%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

const ModalsCont = styled.div`
    margin: 75px;
    text-align: center;
`;

const ModalsHead = styled.h1`
    margin-bottom: 35px;
`;

const ModalsSub = styled.p`
    margin-bottom: 50px;
`;

const ModalsBtn = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`;

const BtnTxt = styled.h3`
    text-align: center;
    margin-right: -3px;
`;

const BtnTxt2 = styled.h3`
    text-align:center;
    margin-right: -9px;
`;

const Modals = ({header, subtext, onClick, btntext, btntext2}) => {
    return <ModalsBox>
        <ModalsCont>
            <ModalsHead>{header}</ModalsHead>
            <ModalsSub>{subtext}</ModalsSub>
            <ModalsBtn>
                {/* <Button text="Back" color="black" style={{borderRadius: "30px"}}/>
                <Button text="Delete" color="white" style={{backgroundColor: "#D13434", borderRadius: "30px"}} /> */}
                <Button2 color="black" bgcolor="#EDEDED" radius="25px" width="25%" onClick={onClick}>
                    <BtnTxt>{btntext}</BtnTxt>
                </Button2>
                <Button2 color="white" bgcolor="#D13434" radius="25px" width="25%" onClick={onClick}>
                    <BtnTxt2>{btntext2}</BtnTxt2>
                </Button2>
                <LottieCheck />
            </ModalsBtn>
            
        </ModalsCont>

    </ModalsBox>
}

Modals.defaultProps = {
    header: "Are you sure you want to delete?",
    subtext: "This action can not be undone.",
    btntext: "Back",
    btntext2: "Delete"
}

export default Modals;