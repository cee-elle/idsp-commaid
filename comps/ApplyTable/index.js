import React, {useState} from 'react';
import TrashButton from '../../comps/TrashButton';
import Button from '../../comps/Button'
import styled, {css} from 'styled-components';

const VTable = styled.table`
    border: 1px solid #FFFFFF;
    width: 100%;
    height: 100%;
    text-align: center;
    border-collapse: collapse;
`;

const VTableThead = styled.thead`
    background: #5887FF;
`;

const VTableTH = styled.th`
    font-weight: bold;
    color: #FFFFFF;
    text-align: center;
    border-left: 2px solid #5887FF;
    padding: 20px 40px
`;

const VTableTR = styled.tr`
background: ${props=> props.even ? "#E8F0F4": "white"};   
`;
const VTableTD = styled.td`
    padding: 20px 40px  
     
`;

const Input1 = styled.input`
`;

const Input2 = styled.input`
`;



const ApplyTable = ({org, pos, comm, date, Location, link, rows}) => {
    return  <VTable>
        <VTableThead>
        <tr>
            <VTableTH><TrashButton/></VTableTH>
            <VTableTH>Organization</VTableTH>
            <VTableTH>Position</VTableTH>
            <VTableTH>Commitment</VTableTH>
            <VTableTH>Start Date</VTableTH>
            <VTableTH>Location</VTableTH>
            <VTableTH></VTableTH>
        </tr>
        </VTableThead>
        <tbody>
        {rows.map((o,i)=>{
                // Check the object
                return <VTableTR even={i%2===0}>
                <VTableTD> <Input1 type="checkbox"/> </VTableTD>
                <VTableTD>{o.aboutUs}</VTableTD>
                <VTableTD>{o.experience}</VTableTD>
                <VTableTD>{o.commitmentPeriod}</VTableTD>
                <VTableTD>{o.duties}</VTableTD>
                <VTableTD>{o.experience}</VTableTD>
                <VTableTD><Button text="Apply" style={{backgroundColor: "#EDEDED"}} color="black"/></VTableTD>
                </VTableTR>   
            })}
        </tbody>
    </VTable>
}
ApplyTable.defaultProps =
    {   org:"Apple",
        pos:"CEO",
        comm:"Long term",
        date:"June 1st",
        Location:"Burnaby",
        link:"Link"
    };
export default ApplyTable;