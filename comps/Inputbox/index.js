import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.h5`
  display: inline-flex;
  margin-bottom: 6px;
  color: #333333;
`;

const LabelBottom = styled.p`
  margin-top: 5px;
  margin-left: 4px;
  color: grey;
`;

const InputArea = styled.input`
  border: 0.678715px solid #e4e4e4;
  padding-left: 10px;
  background: #fbfbfb;
  border-radius: 5.42972px;
  max-width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "36px")};
`;

const Inputbox = ({
  height,
  width,
  text,
  labelBottom,
  placeholder,
  type,
  name,
  value,
  onChange
}) => {
 

  return (
    <Container>
      <InputLabel>{text}</InputLabel>
      <InputArea
        onChange={onChange}
        placeholder={placeholder}
        height={height}
        width={width}
        type={type}
        name={name}
        value={value}
      ></InputArea>

      <LabelBottom>{labelBottom}</LabelBottom>
    </Container>
  );
};

Inputbox.defaultProps = {
  onChange:()=>{},
};


export default Inputbox;
