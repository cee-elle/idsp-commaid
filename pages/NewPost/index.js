import React, { useState, useEffect } from "react";
import PageHeaders from "../../comps/PageHeaders";
import NavBarOrganization from "../../comps/NavBarOrganization";
import ReturnPage from "../../comps/ReturnPage";
import Inputbox from "../../comps/Inputbox";
import CheckBox2 from "../../comps/CheckBox2";
import Menu2 from "../../comps/Menu2";
import Menu3 from "../../comps/Menu3";
import TextArea from "../../comps/TextArea";
import NewPostsButton from "../../comps/Button";
import ImgChangeButton from '../../comps/Button';
import Footer from "../../comps/Footer";

import { motion } from "framer-motion";
import { useRouter } from 'next/router';
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

    const router = useRouter()
    
    return (
        <div className="postCont">
            <div className="header"><NavBarOrganization /></div>
            <br />
            <br />
            <br />
            <Link href="/">
                <div className="pre"><ReturnPage /></div>
            </Link>
            <motion.div
                className="motionDiv"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ease: "easeOut", duration: 1.2 }}
            >
            <div className="postFormContent">
                <div className="innerPostForm">
                    <img className="logo" src="Logo.svg" />
                    <PageHeaders borderColor="#c4c4c4" color="black">Post an Available Position</PageHeaders>
                    <div className="newForm">
                        <div className="newFormRow">
                            <div className="newInput">
                                <Inputbox text="Volunteer Position" />
                            </div>
                            <div className="newInput">
                                <CheckBox2><h5>Commitment</h5></CheckBox2>
                            </div>
                        </div>
                        <div className="newFormRow">
                            <div className="newInput"><Menu2></Menu2></div>
                        </div>
                        <div className="newFormRow">
                            <div className="newInput"><Menu3></Menu3></div>
                        </div>
                        <br />
                        <h4>Job Description</h4>
                        <div className="newFormRow">
                            <div className="newInput">
                                <TextArea><h5>Summary</h5></TextArea>
                            </div>
                        </div>
                        <div className="newFormRow">
                            <div className="newInput">
                                <TextArea><h5>Responsibilities</h5></TextArea>
                            </div>
                        </div>
                        <div className="newFormRow">
                            <div className="newInput">
                                <TextArea><h5>Experience</h5></TextArea>
                            </div>
                        </div>
                        <div className="btnRow">
                            <NewPostsButton text="Post" style={{backgroundColor: "#7480FF"}} onClick={()=>router.push('/ActivePostsTable')} />
                            <ImgChangeButton text="Cancel" style={{backgroundColor: "#EDEDED"}} color="black" onClick={()=>router.push('/OrganizationProfile')} />
                        </div>
                    </div>
                    
                </div>
            </div>
            <Link href="/">
                <div className="pre-bottom"><ReturnPage /></div>
            </Link>
            </motion.div>
            <div className="footer"><Footer /></div>
        </div>
    );
}