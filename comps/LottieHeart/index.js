import React from "react";
import Lottie from "react-lottie";
import animationData from "./LottieHeart.json";
import styled from "styled-components";

const Container = styled.div`
  display: ${(props) => (props.display ? props.display : "none")};
  margin-top: 1px;
  margin-left: -12px;
  margin-right: -13px;
`;

const LottieHeart = ({ display }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container display={display}>
      <Lottie options={defaultOptions} height={58} width={50} />
    </Container>
  );
};

export default LottieHeart;
