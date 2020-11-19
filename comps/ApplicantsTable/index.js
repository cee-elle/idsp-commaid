import React, {useState} from 'react';
import TrashButton from '../../comps/TrashButton';
import Button from '../../comps/Button'
import styled, {css} from 'styled-components';

const VTable = styled.table`
    border: 1px solid #FFFFFF;
    max-width: 100%;
    max-height: 100%;
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

const HoursInput = styled.input`
    width: 30%;
`;

const ApplicantsTable = ({org, pos, comm, date, rows, onChange, onClick}) => {
    return  <VTable>
        <VTableThead>
        <tr>
            <VTableTH><TrashButton/></VTableTH>
            <VTableTH>Name</VTableTH>
            <VTableTH>Position</VTableTH>
            <VTableTH>Start Date</VTableTH>
            <VTableTH>Hours completed</VTableTH>
            <VTableTH>     </VTableTH>
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
                    <VTableTD><HoursInput type="number" onChange={onChange.bind(this, o.id)}/></VTableTD>
                    <VTableTD> <Button text="Submit Hours" style={{backgroundColor: "#EDEDED"}} color="black" onClick={onClick.bind(this, o.id)} /> </VTableTD>
                    </VTableTR>
            })}
        </tbody>
    </VTable>
}
ApplicantsTable.defaultProps =
    {
        org:"The Red Cross",
        pos:"Chef",
        comm:"Short term",
        date:"Sept 2nd",
        onChange:()=>{}
    };
export default ApplicantsTable;