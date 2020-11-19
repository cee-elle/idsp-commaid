import React from 'react';
import styled from 'styled-components';

const WatchButtonBox = styled.div`
    width: 100%;
    height: 100%;
`;
const Tracker = styled.h1`
    max-width: 100%;
    max-height: 100%;
    text-align: center;
    
    font-family: 'Paytone One', sans-serif;
    font-size: 56px;
`;
const Stopwatch = ({time, rows}) => {
    return <WatchButtonBox>
    {rows.map((o,i)=>{
                // Check the object
                return <Tracker>{o.time}</Tracker>
            })}
    </WatchButtonBox>
}

Stopwatch.defaultProps =
    {
        time:"4"
    };
export default Stopwatch;