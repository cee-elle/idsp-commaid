import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LottieHeart from '../../comps/LottieHeart';

const SvContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const HeartCont = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 10px;
`;

const HeartIcon = styled.img`
  height: 23px;
`

const Label = styled.h4`
  display: flex;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "100%")};
`;

const SaveLater = ({fontSize}) => {
    const [imgsrc, setImgSrc] = useState('./heart.svg');
    const [display, setDisplay] = useState('none');
    function changeImgSrc(){
      if(imgsrc==='./heart.svg' && display==="none"){
        setImgSrc('./heartFilled.svg');
        setDisplay('flex');
      }
      else{
        setImgSrc('./heart.svg');
        setDisplay('none');
      }
    }
  return (
      
    <SvContainer>
      <HeartCont>
      {
        display==="flex" ? <LottieHeart display={display}></LottieHeart> : 
        <HeartIcon src={imgsrc} onClick={()=>{
              changeImgSrc();
              setTimeout(()=>{
                setDisplay("none");
              }, 3000)
            }} />}
      </HeartCont>
      <Label fontSize={fontSize}>Save for Later</Label>
    </SvContainer>
    
  );
};

SaveLater.defaultProps = {
imgsource:"./heart.svg"
};

export default SaveLater;
