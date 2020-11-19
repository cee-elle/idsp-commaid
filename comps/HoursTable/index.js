import React, {useState} from 'react';
import TrashButton from '../../comps/TrashButton';
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
    padding: 20px 80px
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

const HoursTable = ({name, date, hours, rows}) => {
    return  <VTable>
        <VTableThead>
        <tr>
            <VTableTH>Company</VTableTH>
            <VTableTH>Start Date</VTableTH>
            <VTableTH>Hours Worked</VTableTH>
        </tr>
        </VTableThead>
        <tbody>
            {rows.map((o,i)=>{
                // Check the object
                return <VTableTR even={i%2===0}>
                <VTableTD>{o.aboutUs}</VTableTD>
                <VTableTD>{o.experience}</VTableTD>
                <VTableTD>{o.commitmentPeriod}</VTableTD>
                </VTableTR>
            })}
        </tbody>
    </VTable>
}
HoursTable.defaultProps =
    {name:"June Doe",
    date: "Nov 1st",
    rows: [],
    hours: "14 Hours"};
export default HoursTable;