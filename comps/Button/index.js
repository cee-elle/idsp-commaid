import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const Buttonbox = styled.button`
    display: flex;
    padding: 15px 20px;
    max-width: 100%;
    max-height: 100%;
    min-width: 125px;
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.21);
    justify-content: center;
    text-align: center;
    border: none;
    border-radius: 5px;
    color:${props=>props.color ? props.color : "White"};
    ${props=>props.highlight === true && css`
        background-color: #D13434;
    ` }
    &:hover{
        background-color:#C0C0C0;
    }
`;

const ImgBox = styled.img`
    display: flex;
    margin-right: 10px;
    

`;


const Button = ({text, style, img, color, highlight, onClick}) => {
    const [disabled, setdisabled] = useState(false)
    return  <Buttonbox onmouseover={()=>{
        setdisabled(!disabled);
    }}disabled={disabled} style={style} color={color} highlight={highlight} onClick={onClick}>
           {img? <ImgBox src={img} width = {"20px"}/> :null}
        {text}
    </Buttonbox>
}
Button.defaultProps={color: "#EDEDED"};
export default Button;