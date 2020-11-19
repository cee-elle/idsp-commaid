import React, { useState } from "react";
import styled, { css } from "styled-components";

const Buttonbox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "50px")};
  font-weight: ${(props) => (props.weight ? props.weight : "600")};
  border-radius: ${(props) => (props.radius ? props.radius : "5px")};
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.21);
  text-align: center;
  background: ${(props) => (props.bgcolor ? props.bgcolor : "#425993")};
  border: none;
  color: ${(props) => (props.color ? props.color : "white")};
  cursor: pointer;
  position: relative;
  padding-right: 40px;
  filter: brightness(100%);
  :hover {
    filter: brightness(92%);
  }
`;

const ImgBox = styled.img`
  display: flex;
  margin-right: 10px;
  width: 26px;
  position: absolute;
  left: 15px;
`;

const EmptyDiv = styled.div`
  width: 40px;
`;

const Button2 = ({
  children,
  src,
  color,
  weight,
  bgcolor,
  width,
  type,
  radius,
  height,
  onClick,
}) => {
  return (
    <Buttonbox
      bgcolor={bgcolor}
      color={color}
      width={width}
      weight={weight}
      type={type}
      radius={radius}
      height={height}
      onClick={onClick}
    >
      <EmptyDiv></EmptyDiv>
      <ImgBox src={src} />
      {children}
    </Buttonbox>
  );
};
Button2.defaultProps = {
  color: "#EDEDED",
  src: "",
  onClick: () => {},
};
export default Button2;
