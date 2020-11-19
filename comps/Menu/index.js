import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ContainerAll = styled.form`
display: flex;
flex-direction: column;
`;


const Container = styled.div`
display: inline-flex;
flex-direction: column;
min-width: 130%;
`;

const DropDownMenu = styled.div`
border-radius: 5.43px;
display: inline-flex;
justify-content: center;
width: 100%;
align-items: center;
cursor: pointer;
transition:background-color 0.5s;
filter: brightness(100%);
&:hover{
    filter: brightness(93%);
}
`;
const H5 = styled.h5`
color: white;
`;

const DropDownBox = styled.div`
width: 100%;
color: white;
padding: 10px;
display: flex;
background: #FFC627;
box-shadow: 1px 5px 8px lightgrey;
color: white;
border: none;
max-height: 30px;
align-items: center;
border-radius: 5.43px;
padding-left: 15px;
display: flex;
justify-content: space-between;
div{
    margin-left: 5px;
    padding-left:20px;
}
`;

const Expand = styled.div`
padding-top: 10px;
margin-top: 10px;
background: #FFFFFF;
border: 1px solid #EAEAEA;
box-sizing: border-box;
box-shadow: 5px 0px 18px rgba(0, 0, 0, 0.08);
display:${props=>props.expanded ? "inline-flex" : "hidden"};
max-height:${props=>props.expanded ? "auto" : "0px"};
opacity:${props=>props.expanded ? 1 : 0};
transition:opacity 0.5s;
flex-direction: column;
border-radius: 5.43px;
overflow: scroll;
max-height: 300px;


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
        width: auto;
    }
}
`;

const ExpandImg = styled.img`
display: flex;
transform:${props=>props.rotated? 'rotate(-180deg)' : 'rotate(0deg)'} ;
transition: transform 0.5s;
justify-content: space-between;
`;

const Submit = styled.input`
display: flex;
margin-top: 1%;
width: 128%;
height: 50px;
padding-left: 24px;
align-items: left;
background:url("./submit.svg");
background-repeat: no-repeat;
background-position: right; 
margin-left: 2%;
border: none;
background-color: #00A651;
border-radius: 5px;
color: white;
font-weight: 600;
box-shadow: 1px 5px 8px lightgrey;
filter: brightness(100%);
`;

const MenuFilter = ({expand, expand2, expand3}) => {
    const [expanded, setExpanded] = useState(false);
    useEffect(()=>{
        setExpanded(expand);
    },[expand])

    const [expanded2, setExpanded2] = useState(false);
    useEffect(()=>{
        setExpanded2(expand2);
    },[expand2])

    const [expanded3, setExpanded3] = useState(false);
    useEffect(()=>{
        setExpanded3(expand3);
    },[expand3])

    const [rotated, setRotated] = useState(false);
    const [rotated2, setRotated2] = useState(false);
    const [rotated3, setRotated3] = useState(false);
    
    return <ContainerAll>
    <Container>
        <DropDownMenu onClick={()=>{
            setExpanded2(!expanded2);
            setRotated2(!rotated2);
        }}>
            <DropDownBox>
                <H5>Volunteer Type</H5>
                <div><ExpandImg src="down-arrow.svg" rotated = {rotated2}></ExpandImg></div>
            </DropDownBox>
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

    <Container>
        <DropDownMenu onClick={()=>{
            setExpanded3(!expanded3);
            setRotated3(!rotated3);
        }}>
            <DropDownBox>
                <H5>Location</H5>
                <div><ExpandImg src="down-arrow.svg" rotated = {rotated3}></ExpandImg></div>
            </DropDownBox>
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

    <Container>
        <DropDownMenu onClick={()=>{
            setExpanded(!expanded);
            setRotated(!rotated);
        }}>
            <DropDownBox>
                <H5>Commitment</H5>
                <div><ExpandImg src="down-arrow.svg" rotated = {rotated}></ExpandImg></div>
            </DropDownBox>
        </DropDownMenu>
        <Expand expanded = {expanded}>
        <label>Long-term<input type="checkbox" name="opt1Commit"/></label>
        <label>Short-term<input type="checkbox" name="opt2Commit"/></label>
        <label>Event<input type="checkbox" name="opt3Commit"/></label>
        </Expand>
    </Container>

    <Submit type="submit" name="submitFilter" value="SUBMIT"></Submit>
    </ContainerAll>
}

MenuFilter.defaultProps = {
expand:false
}

export default MenuFilter;