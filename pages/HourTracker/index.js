import React, {useState, useEffect} from 'react';

import PageHeaders from "../../comps/PageHeaders";
import NavBarVolunteer from "../../comps/NavBarVolunteer";
import Footer from "../../comps/Footer";
import Stopwatch from "../../comps/Stopwatch";
import Button from "../../comps/Button";
import { useRouter } from "next/router";

import axios from 'axios';

import data from '../../sample.json';

export default function Home() {

  const [tracker, setTracker] = useState([])
  const HandleGetTracker = async ()=>{
  //var TrackerResponse = await axios.get("../../sample.json");

  // comment out after we add backend database
  var trackerResponse = data.postings;

  console.log(trackerResponse);
  // comment out after we add backend database
  setTracker([...trackerResponse]);
  //setHours([...hoursResponse.data]);
  }

  useEffect(()=>{
    HandleGetTracker();
  }, []);

  const router = useRouter();
  console.log(router);
    
  return (
    <div className="trackerMainCont">
      <NavBarVolunteer></NavBarVolunteer>
      <div className="pageHeader">
        <PageHeaders color="black" borderColor="lightblue">
          Track your hours
        </PageHeaders>
      </div>
      <div className="trackerContent">
        <div className="containerBox">
          <p>Take a look at how many hours you’ve done!</p>
          <Stopwatch className="trackerNumber" rows={tracker}></Stopwatch>
          <p>Total Hours Worked</p>
          <div className="buttonBox">
            <Button
            onClick={() => {
              //  onPageHighlight();
              router.push("/VolunteerProfile");
            }}
              text="Your Profile"
              style={{ borderRadius: "30px" }}
              highlight={true}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}
// }
