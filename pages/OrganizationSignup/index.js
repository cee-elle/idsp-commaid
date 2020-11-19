import React, { useState, useEffect } from "react";
import LandingPageNav from "../../comps/LandingPageNav";
import ReturnPage from "../../comps/ReturnPage";
import Inputbox from "../../comps/Inputbox";
import PageHeaders from "../../comps/PageHeaders";
import Footer from "../../comps/Footer";
import Button2 from "../../comps/Button2";
import CheckBox from "../../comps/CheckBox";
import TextArea from "../../comps/TextArea";
import Link from "next/link";
import axios from "axios";

import { useRouter } from 'next/router'
import {addOrganization} from '../../firebase/functions';


//this is the function in firebase
// import {SignUp} from '../file'

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter()

  async function HandleOrgSignup (e) {
    e.preventDefault();
    console.log(e.target)
    const obj = { name, email, phone, address, password, description}
    // try {
    //   await addOrganization(obj); 
    //   router.push('/LandingPage')
    // } catch (error) {
    //   console.log(error.message);
    // }

  };

  return (
    <div className="main1">
      <LandingPageNav></LandingPageNav>
      <br></br>
      <br></br>
      <br></br>
      <Link href="/LandingPage">
        <div className="return1">
          <ReturnPage></ReturnPage>
        </div>
      </Link>
      <div className="title1">
        <PageHeaders borderColor="lightgrey" color="black">
          Organization Signup
        </PageHeaders>
      </div>
      <br></br>
      <br></br>
      <form onSubmit={HandleOrgSignup} className="column">
        <br></br>
        <div className="row">
          <div className="lable">
            {" "}
            <h5>Organization Name:</h5>
          </div>
          <div className="input">
            <Inputbox
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></Inputbox>
          </div>
        </div>

        <div className="row">
          <div className="lable">
            {" "}
            <h5>Organization Logo:</h5>
          </div>
          <div className="input">
            <input
              type="file"
              bgcolor="#EDEDED"
              width="178px"
              name="file"
              color="black"
              height="44px"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="lable">
            {" "}
            <h5>Organization Email:</h5>
          </div>
          <div className="input">
            <Inputbox
            value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
            ></Inputbox>
          </div>
        </div>
        <div className="row">
          <div className="lable">
            {" "}
            <h5>Password: </h5>
          </div>
          <div className="input">
            <Inputbox
            value={password}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></Inputbox>
          </div>
        </div>

        <div className="row">
          <div className="lable">
            {" "}
            <h5>Phone Number:</h5>
          </div>
          <div className="input">
            <Inputbox 
            value={phone}
            type="number"
               onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></Inputbox>
          </div>
        </div>
        <div className="row">
          <div className="lable">
            {" "}
            <h5>Mailing Address:</h5>
          </div>
          <div className="input">
            <Inputbox type="text"
            value={address}
             onChange={(e) => {
              setAddress(e.target.value);
            }}
            ></Inputbox>
          </div>
        </div>

        <div className="row">
          <div className="lable">
            {" "}
            <h5>Generate QR code to help volunteers Track hours?</h5>
          </div>
          <div className="checkbox">
            <CheckBox type="checkbox"></CheckBox>
          </div>
        </div>
        <div className="row">
          <TextArea type="text" value ={description} onChange={(e) => {
              setDescription(e.target.value);
            }}>
              Short description about your organization: 
              </TextArea>
        </div>›

        <div className="button1">
          <Button2
            bgcolor="#7480FF"
            width="150px"
            type="submit">
            <p>Signup</p>
          </Button2>
        </div>
      </form>
          
      <div className="footer1">
        <Footer></Footer>
      </div>
    </div>
  );
}
