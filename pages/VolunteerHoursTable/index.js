import React, {useState, useEffect} from 'react';

import PageHeaders from "../../comps/PageHeaders";
import Footer from "../../comps/Footer";
import HoursTable from "../../comps/HoursTable";
import Button from "../../comps/Button";
import NavBarOrganization from "../../comps/NavBarOrganization";

import axios from 'axios';

// comment out after we add backend database
import data from '../../sample.json';

export default function Home() {
  
  const [hours, setHours] = useState([])
  const HandleGetHours = async ()=>{
  //var hoursResponse = await axios.get("../../sample.json");

  // comment out after we add backend database
  var hoursResponse = data.postings;

  console.log(hoursResponse);
  // comment out after we add backend database
  setHours([...hoursResponse]);
  //setHours([...hoursResponse.data]);
  }

  useEffect(()=>{
    HandleGetHours();
  }, []);
  
  return (

      <div className="VolunteerHoursTableMainCont">
      <NavBarOrganization></NavBarOrganization>
      <div className="pageHeader">
        <PageHeaders color="black" borderColor="lightblue">
        Your Volunteer’s Hours
        </PageHeaders>
        <div>
          <p>Stay organized by keeping track of your volunteer’s hours here!</p>
        </div>
      </div>
      <div className="VolunteerHoursTableContent">
      <div className="VolunteerHoursTableContainerBox">
        <HoursTable className="HoursTable" rows={hours}></HoursTable>
        <div className="newPostBtn">
        </div>
      </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  
  );
}
