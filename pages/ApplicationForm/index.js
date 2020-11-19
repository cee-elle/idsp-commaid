import React, { useState, useEffect } from "react";
import PageHeaders from "../../comps/PageHeaders";
import NavBarVolunteer from "../../comps/NavBarVolunteer";
import Footer from "../../comps/Footer";
import ReturnPage from "../../comps/ReturnPage";
import Inputbox from "../../comps/Inputbox";
import Menu2 from "../../comps/Menu2";
import CheckBox from "../../comps/CheckBox";
import TextArea from "../../comps/TextArea";
import LottieCheck from "../../comps/LottieCheck";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };
  const [display, setDisplay] = useState("none");
  function Confirmation() {
    if (display === "none") {
      setDisplay("flex");
    } else {
      setDisplay("none");
    }
  }

  return (
    <div className="MainFormCont">
      <NavBarVolunteer></NavBarVolunteer>
      <br></br>
      <br></br>
      <br></br>
      <Link href="/VolunteerInformationPage">
        <div className="return">
          <ReturnPage></ReturnPage>
        </div>
      </Link>
      <motion.div
        className="motionDiv"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeOut", duration: 1.2 }}
      >
        <div className="formContent">
          <div className="innerFormCont">
            <img className="logoForm" src="Logo.svg" />
            <PageHeaders borderColor="lightgrey" color="black">
              CommAid Volunteer Application
            </PageHeaders>
            <br></br>
            <form className="form1">
              <div className="formRow">
                <div className="input1">
                  <Inputbox text="Name" labelBottom="First Name"></Inputbox>
                </div>
                <div className="input2">
                  <Inputbox labelBottom="Last Name"></Inputbox>
                </div>
              </div>
              <div className="formRow">
                <div className="input1">
                  <Inputbox
                    text="Legal Guardian's Name*"
                    placeholder="  Optional unless under 19"
                    labelBottom="First Name"
                  ></Inputbox>
                </div>
                <div className="input2">
                  <Inputbox labelBottom="Last Name"></Inputbox>
                </div>
              </div>
              <div className="formRow">
                <div className="input1">
                  <Inputbox text="Your Email"></Inputbox>
                </div>
                <div className="input1">
                  <Inputbox text="Your Guardian's Email"></Inputbox>
                </div>
              </div>
              <div className="formRow">
                <div className="input1">
                  <Menu2 />
                </div>
                <div className="input1">
                  <Inputbox text="Age"></Inputbox>
                </div>
              </div>
              <div className="formRow">
                <div className="input1">
                  <Inputbox text="Phone Number"></Inputbox>
                </div>
                <div className="input1">
                  <CheckBox> <h5>Do you have previous experience in this field?</h5>
                  </CheckBox>
                </div>
              </div>
              <div className="formRow">
                <div className="input1">
                  <TextArea>Previous Related Experience* (optional)</TextArea>
                </div>
                <div className="input1">
                  <TextArea>Why You Want to Volunteer With Us</TextArea>
                </div>
              </div>
              <br></br>
              <input
                onClick={() => {
                  Confirmation();
                }}
                className="submitApplication"
                type="submit"
                name="submitApplication"
                value="Volunteer for Job"
              />
              <div className="confirmation">
                <LottieCheck></LottieCheck>
              </div>
            </form>
          </div>
        </div>
        <br></br>
        <br></br>
      </motion.div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}
