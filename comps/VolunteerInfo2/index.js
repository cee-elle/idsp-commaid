import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Button";
import SaveLater from "../SaveLater";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 1px 1px 7px lightgrey;
  border-radius: 25px;
  height: fit-content;
  padding: 40px;
  width: 100%;
  display: flex;
  position: relative;
  background-color: rgb(255,255,255, 0.95);
`;

const MapCont = styled.div`
  width: 100%;
  border-radius: 34px;
`;

const LeftCont = styled.div`
  flex: 1;
`;

const RightCont = styled.div`
  flex: 3;
  padding: 0px;
  margin-top: -15px;
  padding-left: 10px;
`;
const MapImg = styled.img`
  border-radius: 15%;
  max-width: 90%;
  max-height: 90%;
  margin-top: 0px;
  border: solid 1px darkgrey;
`;

const ContactInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Email = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 10px;
  color: #7480ff;
`;

const Icon = styled.img`
  max-width: 3%;
`;

const H3 = styled.h3`
  margin-bottom: 5px;
  margin-top: 10px;
`;

const VolunteerInfo2 = ({ address, phone, email }) => {
  return (
    <Container>
      <LeftCont>
        <MapCont>
          <MapImg src="./map.svg" />
        </MapCont>
      </LeftCont>
      <RightCont>
        <H3>Contact Us</H3>
        <ContactInfo>
          <Icon src="./location.svg" />
          <p>{address}</p>
        </ContactInfo>
        <ContactInfo>
          <Icon src="./phone.svg" />
          <p>{phone}</p>
        </ContactInfo>
        <Email>
          <Icon src="email.svg" />
          <a>{email}</a>
        </Email>
      </RightCont>
    </Container>
  );
};

VolunteerInfo2.defaultProps = {
  address: null,
  phone: null,
  email: null,
};

export default VolunteerInfo2;
