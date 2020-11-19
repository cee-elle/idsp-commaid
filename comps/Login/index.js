import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Inputbox from "../../comps/Inputbox";
import Button2 from "../../comps/Button2";
import Logo from '../../comps/Logo';
import {login} from '../../firebase/functions';
import { useRouter } from 'next/router'

const InputCont = styled.div`
  box-shadow: 1px 1px 7px lightgrey;
  border-radius: 25px;
  height: fit-content;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;

`;

const LoginCont = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 100%;
  
`;

const H2 = styled.h2`
  text-align: center;
  margin-bottom: 0px;
  color: #7ed171;
`;

const H4 = styled.h4`
  margin-top: 0px;
  font-weight: 500;
  color: #453f3f;
  text-align: center;
`;

const SmallInputCont = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 70px;
  width: 50%;
`;

const SubmitCont = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 70px;
  width: 70%;
  justify-content: center;
  align-items: center;
`;

const SignUpLink = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  overflow-x: visible;
`;

const Link = styled.a`
  color: #5887ff;
  margin: 0px;
  margin-left: 4px;
  filter: brightness(100%);
  cursor: pointer;
  :hover {
    filter: brightness(130%);
  }
`;

const Para = styled.p`
  margin: 0px;
`;

const HR = styled.div`
  border-bottom: solid 1px lightgrey;
  width: 21%;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

const Or = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

const Login = ({}) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await login(userEmail, userPassword)
      console.log("Login Success")
      router.push('/LandingPage')
    }
    catch {
      console.log("Error Login")
    }

  }
  return (
    

    <InputCont onSubmit={handleSubmit}>
   
      <H2>Welcome to CommAid!</H2>
      <H4>Sign In with your Login Information</H4>
      <Logo></Logo>
      <br></br>
      <LoginCont>
        <SmallInputCont>
          <Button2 src="./facebook2.svg">Login With Facebook</Button2>
        </SmallInputCont>
        <SmallInputCont>
          <Button2 bgcolor="#3478F6" src="./Google.svg">
            Login With Google
          </Button2>
        </SmallInputCont>
        <Or>
          <HR></HR>
          <Para>Or</Para>
          <HR></HR>
        </Or>
        <SmallInputCont>
          <Inputbox
            name="loginEmail"
            placeholder="Enter Email"
            type="text"
            text="Enter Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </SmallInputCont>
        <SmallInputCont>
          <Inputbox
            text="Enter Password"
            name="loginPass"
            placeholder="Enter Password"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </SmallInputCont>
        <SmallInputCont>
          <Button2
            type="submit"
            value="Login"
            name="loginSubmit"
            bgcolor="#7480FF"
          >
            Login
          </Button2>
        </SmallInputCont>
      </LoginCont>
      <br></br>
      <SubmitCont>
        <SignUpLink>
          <Para>Don't have an account?</Para>
          <Link href="/VolunteerSignup">Sign up!</Link>
        </SignUpLink>
      </SubmitCont>
    </InputCont>
          
  );
};

Login.defaultProps = {};

export default Login;
