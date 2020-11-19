import React, { useState, useEffect } from "react";
import NavBarOrganization from "../../comps/NavBarOrganization";
import PageHeaders from "../../comps/PageHeaders";
import OrganizationProfileImg from '../../comps/OrganizationProfileImg';
import PostsButton from "../../comps/Button";
import NewPostsButton from "../../comps/Button";
import Inputbox from '../../comps/Inputbox';
import Footer from "../../comps/Footer";

export default function Home() {
    return (
        <div className="orgProfileCont">
        <div className="header"><NavBarOrganization /></div>
        <div className="orgProfileContent">
            <div className="orgProfileHder"><PageHeaders color="#231F20" borderColor="#c4c4c4">Your Account</PageHeaders></div>
            <div className="orgProfile">
                <div className="orgLeft"><OrganizationProfileImg /></div>
                <div className="orgRight">
                    <Inputbox text="Name" height="46px" width="42vw"/>
                    <Inputbox text="Organization Information" height="200px" width="100%" />
                    <div className="orgBtns">
                        <PostsButton text="Cancel" style={{backgroundColor: "#453F3F"}} />
                        <NewPostsButton text="Save Changes" style={{backgroundColor: "#7480FF"}} />
                    </div>
                </div>
            </div>
                
            <div className="footer"><Footer /></div>
            </div>
        </div>
    )
}