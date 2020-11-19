import React from "react";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Input = styled.input`
margin-bottom: 10px;

`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Line = styled.div`
margin-top: 0px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const CheckBox = ({children}) => {
  return (
    <Container>
      <div>{children}</div>
      <Line>
        <Row>
          <p>Yes</p>
          <Input type="radio" name="checkyes"></Input>
        </Row>
        <Row>
          <p>No</p>
          <Input type="radio" name="checkno"></Input>
        </Row>
      </Line>
    </Container>
  );
};

export default CheckBox;
