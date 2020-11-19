import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ContainerAll = styled.div`
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

const Menu2 = ({expand3, width}) => {

    const [expanded3, setExpanded3] = useState(false);
    useEffect(()=>{
        setExpanded3(expand3);
    },[expand3])

   
    const [rotated3, setRotated3] = useState(false);
    
    return <ContainerAll>
    <Container>
    <InputTitle>Location</InputTitle>
        <DropDownMenu onClick={()=>{
            setExpanded3(!expanded3);
            setRotated3(!rotated3);
        }}>
            <DropDownBox >
                <p>Vancouver District</p>
                <ExpandImg src="black-down-arrow.svg" rotated = {rotated3}></ExpandImg>
            </DropDownBox >
        </DropDownMenu>
        <Expand expanded = {expanded3}>
            <label>Arbutus Ridge<input type="checkbox" name="opt1Location"/></label>
            <label>Downtown<input type="checkbox" name="opt2Location"/></label>
            <label>Dunbar-Southlands<input type="checkbox" name="opt3Location"/></label>
            <label>Fairview<input type="checkbox" name="opt4Location"/></label>
            <label>Grandview-Woodland<input type="checkbox" name="opt5Location"/></label>
            <label>Hastings-Sunrise<input type="checkbox" name="opt6Location"/></label>
            <label>Kensington-Cedar Cottage<input type="checkbox" name="opt7Location"/></label>
            <label>Kerrisdale<input type="checkbox" name="opt8Location"/></label>
            <label>Killarney<input type="checkbox" name="opt9Location"/></label>
            <label>Kitsilano<input type="checkbox" name="opt10Location"/></label>
            <label>Mount Pleasant<input type="checkbox" name="opt11Location"/></label>
            <label>Renfrew-Collingwood<input type="checkbox" name="opt12Location"/></label>
            <label>South Cambie<input type="checkbox" name="opt13Location"/></label>
            <label>Strathcona<input type="checkbox" name="opt14Location"/></label>
            <label>Sunset<input type="checkbox" name="opt15Location"/></label>
            <label>Victoria-Fraser<input type="checkbox" name="opt16Location"/></label>
            <label>West End<input type="checkbox" name="opt17Location"/></label>
            <label>West Point Grey<input type="checkbox" name="opt18Location"/></label>
        </Expand>
    </Container>
    
    </ContainerAll>
}

Menu2.defaultProps = {
expand:false,

}

export default Menu2;