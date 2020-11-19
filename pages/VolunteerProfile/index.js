import React, { useState, useEffect } from "react";
import NavBarVolunteer from "../../comps/NavBarVolunteer";
import PageHeaders from "../../comps/PageHeaders";
import VolunteerProfileInfo from "../../comps/VolunteerProfileInfo";
import VolunteerPageExperience from "../../comps/VolunteerPageExperience";
import Footer from "../../comps/Footer";

import axios from 'axios';

import data from '../../sample.json';

import { motion } from "framer-motion";
import { useRouter } from 'next/router';

export default function Home() {

    const [users, setUsers] = useState([])
    const HandleGetUser = async ()=>{
        var uInfo = data.users.filter(o=>{
            return o.organization === false
        });

        setUsers([...uInfo]);
    }

    useEffect(()=>{
        HandleGetUser();
    }, []);

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
        <div className="vProfileCont">
        <div className="header"><NavBarVolunteer /></div>
        <motion.div
            className="motionDiv"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 1.2 }}
        >
        <div className="vProfileContent">
            <div className="vProfileHd">
                <PageHeaders color="#231F20" borderColor="#c4c4c4">Your Account</PageHeaders>
            </div>
            {
                users.map((o,i)=>{
                    return <VolunteerProfileInfo 
                    key={i}
                    firstName={o.firstName}
                    lastName={o.lastName}
                    email={o.email}
                    district={o.district}
                />
            })
        }
            <VolunteerPageExperience />
        </div>
        </motion.div>
        <div className="footer"><Footer /></div>
        </div>
    )
}