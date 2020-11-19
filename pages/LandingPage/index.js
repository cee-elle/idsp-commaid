import React, { useState, useEffect } from "react";
import LandingPageNav from "../../comps/LandingPageNav";
import Signup from "../../comps/Signup";
import Footer from "../../comps/Footer";
import AboutCommAid from "../../comps/AboutCommAid";
import { useRouter } from 'next/router';



export default function Home() {
  const router = useRouter()
  
  return (
    <div className="home">
      <div className="nav">
        <LandingPageNav></LandingPageNav>
      </div>
      <div className="main">
        <div className="content1">
        <div className="signup">
          <div className="signup1">
            <Signup
            onClick={() => router.push('/VolunteerSignup')}
            src="/volunteer.png"
              text="Do You Want to Volunteer?"
              par="One-stop shop for volunteering.
              Volunteers can find and apply for multiple volunteer opportunities in one place." imgwidth="30" imgheight="30" >
            </Signup>
          </div>
          <div className="signup1">
            <Signup
              onClick={() => router.push('/OrganizationSignup')}
            src="/1.png"
              text="Are You an Organization?"
              par="Start with your local volunteer centre. They offer a lot of resources including up to date listings of volunteer opportunities."
              bgColor="#2DC117"  imgwidth="30"  imgheight="30"
            ></Signup>
          </div>
        </div>
        <div className="about">
          <AboutCommAid
            h2="About CommAid"
            p="CommAid was made to connect people that want to volunteer with organizations that need them around Vancouver. Volunteering for a cause you’re passionate about, makes the experience for everyone involved a better one. So sign up with CommAid and start building up your community."
          ></AboutCommAid>
        </div>
        </div>
      </div>
      <div className="footer">
          <Footer></Footer>
        </div>
    </div>
  );
}

