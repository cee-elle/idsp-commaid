import React from "react";
import styled from "styled-components";

const Container = styled.form`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;

const Input = styled.input`
margin-bottom: 3px;

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

const CheckBox2 = ({children}) => {
  return (
    <Container>
      <div>{children}</div>
      <Line>
        <Row>
          <p>Long-Term</p>
          <Input type="radio" name="checkLong"></Input>
        </Row>
        <Row>
          <p>Short-Term</p>
          <Input type="radio" name="checkShort"></Input>
        </Row>
        <Row>
          <p>Very Short-Term</p>
          <Input type="radio" name="checkVShort"></Input>
        </Row>
      </Line>
    </Container>
  );
};

export default CheckBox2;
