import React, { useState, useEffect } from "react";
import PageHeaders from "../../comps/PageHeaders";
import NavBarVolunteer from "../../comps/NavBarVolunteer";
import Footer from "../../comps/Footer";
import Login from "../../comps/Login";

export default function Home() {
  return (
    <div className="mainContLogin">
      <NavBarVolunteer></NavBarVolunteer>
     
      <div className="contentLogin">
          <Login></Login>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer></Footer>
    </div>
  );
}
