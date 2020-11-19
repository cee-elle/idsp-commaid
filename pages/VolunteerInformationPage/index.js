import React, { useState, useEffect } from "react";
import PageHeaders from "../../comps/PageHeaders";
import VolunteerInfo1 from "../../comps/VolunteerInfo1";
import NavBarVolunteer from "../../comps/NavBarVolunteer";
import Footer from "../../comps/Footer";
import VolunteerInfo2 from "../../comps/VolunteerInfo2";
import { motion } from "framer-motion";
import axios from "axios";
import data from "../../sample.json";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };

  const [postings, setPostings] = useState([]);
  const HandleGetVolInfo = async () => {
    var volunteerInfo = data.postings;
    console.log(postings);
    setPostings([...volunteerInfo]);
  };

  useEffect(() => {
    HandleGetVolInfo();
  }, []);


  const [users, setUsers] = useState([]);
  const HandleGetVolInfo2 = async () => {
    var volunteerInfo2 = data.users;
    console.log(users);
    setUsers([...volunteerInfo2]);
  };

  useEffect(() => {
    HandleGetVolInfo2();
  }, []);

  return (
    <div className="mainCont">
      <NavBarVolunteer></NavBarVolunteer>
      <div className="pageHeader">
        <PageHeaders color="white" borderColor="white">
          Volunteer Information
        </PageHeaders>
      </div>
      <motion.div
        className="motionDiv"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeOut", duration: 1.2 }}
      >
        <div className="content">
          {postings.map((o, i) => {
            return (
                <VolunteerInfo1 
                key={i}
                position={o.position}
                //orgName={o.name}
                commitment={o.commitmentPeriod}
                experience={o.experience}
                duties={o.duties}
                about={o.aboutUs}
                />
                );
              })}
               {users.map((o, i) => {
            return (
                <VolunteerInfo2 
                key={1}
                address={o.address}
                phone={o.phoneNumber}
                email={o.email}
                />
                );
              })}
          
        </div>
      </motion.div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}
