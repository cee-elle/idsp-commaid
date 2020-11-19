import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ContainerAll = styled.form`
display: flex;
flex-direction: column;
width: 100%;

`;


const Container = styled.div`
display: inline-flex;
flex-direction: column;
width: 100%;

`;

const DropDownMenu = styled.div`
display: inline-flex;
justify-content: center;
align-items: center;
cursor: pointer;
width: ${props=>props.width ? props.width: 100}%;

`;

const DropDownBox = styled.div`
width:100%;
padding: 5px;
display: flex;
background: #FBFBFB;
color: #757575;
justify-content: center;
border: 0.678715px solid #E4E4E4;
border-radius: 5.42972px;
max-height: 30px;
align-items: center;
position: relative;
padding-left: 15px;
justify-content: space-between;

div{
    margin-left: 5px;
    padding-left:20px;
}
`;

const Expand = styled.div`
padding-top: 5px;
margin-top: 10px;
background: #FBFBFB;
border: 0.678715px solid #E4E4E4;
border-radius: 5.42972px;
box-sizing: border-box;
box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
display:${props=>props.expanded ? "inline-flex" : "hidden"};
max-height:${props=>props.expanded ? "auto" : "0px"};
opacity:${props=>props.expanded ? 1 : 0};
transition:opacity 0.5s;
flex-direction: column;
overflow: scroll;
max-height: 300px;
width: 100%;

input{
    position: aboslute;   
    display:${props=>props.expanded ? "inline-flex" : "hidden"};
max-height:${props=>props.expanded ? "auto" : "0px"};
opacity:${props=>props.expanded ? 1 : 0};

     
}
label{
    opacity:${props=>props.expanded ? 1 : 0};
    padding: ${props=>props.expanded ? '10px 10px' : "0px"};
    margin: ${props=>props.expanded ? '5px 0px' : "0px"};
    max-height:${props=>props.expanded ? "auto" : "0px"};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    &:hover {
        background-color: #ddd;
        
    }
}
`;

const ExpandImg = styled.img`
display: flex;
position: absolute;
right: 10px;
transform:${props=>props.rotated? 'rotate(-180deg)' : 'rotate(0deg)'} ;
transition: transform 0.5s;
justify-content: flex-end;

`;

const InputTitle = styled.h5`
color: #231F20;
`;

const Menu3 = ({expand2}) => {

    const [expanded2, setExpanded2] = useState(false);
    useEffect(()=>{
        setExpanded2(expand2);
    },[expand2])

   
    const [rotated3, setRotated3] = useState(false);
    
    return <ContainerAll>
    <Container>
    <InputTitle>Type of Volunteer Work</InputTitle>
        <DropDownMenu onClick={()=>{
            setExpanded2(!expanded2);
            setRotated3(!rotated3);
        }}>
            <DropDownBox >
                <p></p>
                <ExpandImg src="black-down-arrow.svg" rotated = {rotated3}></ExpandImg>
            </DropDownBox >
        </DropDownMenu>
        <Expand expanded = {expanded2}>
        <label>Arts, Culture & Media<input type="checkbox" name="opt1VolType"/></label>
            <label>Building & Housing<input type="checkbox" name="opt2VolType"/></label>
            <label>Children<input type="checkbox" name="opt3"/></label>
            <label>Disabilities<input type="checkbox" name="opt4VolType"/></label>
            <label>Education<input type="checkbox" name="opt5VolType"/></label>
            <label>Elder Care<input type="checkbox" name="opt6VolType"/></label>
            <label>Health, Social Services<input type="checkbox" name="opt7VolType"/></label>
            <label>LGBTQ Support<input type="checkbox" name="opt8VolType"/></label>
            <label>Religion & Spiritual<input type="checkbox" name="opt9VolType"/></label>
            <label>Sports and Recreation<input type="checkbox" name="opt10VolType"/></label>
            <label>Women Empowerment<input type="checkbox" name="opt11VolType"/></label>
            <label>Youth Development<input type="checkbox" name="opt12VolType"/></label>
        </Expand>
    </Container>
    
    </ContainerAll>
}

Menu3.defaultProps = {
expand:false,

}

export default Menu3;