import React, {useState, useEffect} from 'react';

import PageHeaders from "../../comps/PageHeaders";
import NavBarVolunteer from "../../comps/NavBarVolunteer";
import Footer from "../../comps/Footer";
import ApplyTable from "../../comps/ApplyTable";
import Button from "../../comps/Button";

import axios from 'axios';

import data from '../../sample.json';

  export default function Home() {
  
    const [saved, setSaved] = useState([])
    const HandleGetSaved = async ()=>{
    //var hoursResponse = await axios.get("../../sample.json");
  
    // comment out after we add backend database
    var SavedResponse = data.postings;
  
    console.log(SavedResponse);
    // comment out after we add backend database
    setSaved([...SavedResponse]);
    //setHours([...hoursResponse.data]);
    }
  
    useEffect(()=>{
      HandleGetSaved();
    }, []);


  return (

      <div className="VolunteersSavedTableMainCont">
      <NavBarVolunteer></NavBarVolunteer>
      <div className="pageHeader">
        <PageHeaders color="black" borderColor="lightblue">
        Your Volunteer’s Hours
        </PageHeaders>
        <div>
          <p>Stay organized by keeping track of your volunteer’s hours here!</p>
        </div>
      </div>
      <div className="VolunteersSavedTableContent">
      <div className="VolunteersSavedTableContainerBox">
        <ApplyTable className="ApplyTable" rows={saved}></ApplyTable>
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
