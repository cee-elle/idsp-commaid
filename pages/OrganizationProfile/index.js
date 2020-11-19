import React, { useState, useEffect } from "react";
import NavBarOrganization from "../../comps/NavBarOrganization";
import PageHeaders from "../../comps/PageHeaders";
import OrganizationProfileImg from '../../comps/OrganizationProfileImg';
import OrganizationDescription from "../../comps/OrganizationDescription";
import PostsButton from "../../comps/Button";
import NewPostsButton from "../../comps/Button";

import Footer from "../../comps/Footer";

import axios from 'axios';

import data from '../../sample.json';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Home() {

    const [users, setUsers] = useState([])
    const HandleGetOrganization = async ()=>{
        var oInfo = data.users.filter(o=>{
            return o.organization === true
        });

        setUsers([...oInfo]);
    }

    useEffect(()=>{
        HandleGetOrganization();
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
        <div className="orgProfileCont">
        <div className="header"><NavBarOrganization /></div>
        <motion.div
            className="motionDiv"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 1.2 }}
        >
            <div className="orgProfileContent">
                <div className="orgProfileHd"><PageHeaders color="#231F20" borderColor="#c4c4c4">Your Account</PageHeaders></div>
                <div className="orgProfile">
                    <div className="orgLeft"><OrganizationProfileImg /></div>
                    <div className="orgRight">
                    {
                    users.map((o,i)=>{
                        return <OrganizationDescription onClick={() => router.push('/OrganizationProfileEdit')}
                        key={i}
                        name={o.name}
                        description={o.description}
                    />
                })
            }
                    {/* <OrganizationDescription onClick={() => router.push('/OrganizationProfileEdit')}/> */}
                    <div className="orgBtns" >
                        <PostsButton text="View Active Posts" style={{backgroundColor: "#453F3F"}} onClick={()=>router.push('/ActivePostsTable')} />
                        <NewPostsButton text="Add New Post +" style={{backgroundColor: "#7480FF"}}
                        onClick={()=>router.push('/NewPost')}
                        />
                    </div>
                </div>
            </div>
            </div>
        </motion.div>
        <div className="footer"><Footer /></div>
        </div>
        
    )
}