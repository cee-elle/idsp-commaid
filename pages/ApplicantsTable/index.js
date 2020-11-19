import React, {useState, useEffect} from 'react';

import PageHeaders from "../../comps/PageHeaders";
import NavBarVolunteer from "../../comps/NavBarVolunteer";
import Footer from "../../comps/Footer";
import ApplicantsTable from "../../comps/ApplicantsTable";
import Button from "../../comps/Button";

import axios from 'axios';

import data from '../../sample.json';


  export default function Home() {

    const HandleVolHours = async (id) => {

      console.log(hours, id);
    }
    const [applicants, setApplicants] = useState([])
    const [hours, setHours] = useState({})
    const HandleGetApplicants = async ()=>{
    //var hoursResponse = await axios.get("../../sample.json");
  
    // comment out after we add backend database
    var ApplicantsResponse = data.postings;
  
    console.log(ApplicantsResponse);
    // comment out after we add backend database
    setApplicants([...ApplicantsResponse]);
    //setHours([...hoursResponse.data]);
    }
  
    useEffect(()=>{
      HandleGetApplicants();
    }, []);


  return (

      <div className="ApplicantsTableMainCont">
      <NavBarVolunteer></NavBarVolunteer>
      <div className="pageHeader">
        <PageHeaders color="black" borderColor="lightblue">
        Your Applicants
        </PageHeaders>
        <div>
          <p>Stay organized by keeping track of your applicants here!</p>
        </div>
      </div>
      <div className="ApplicantsTableContent">
      <div className="ApplicantsTableContainerBox">
        <ApplicantsTable className="ApplicantsTable" rows={applicants} onChange={(id,e)=>{
          var newhours = hours;
          newhours[id] = e.target.value
          setHours({...newhours});
        }}
        onClick={HandleVolHours}
        ></ApplicantsTable>
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
