import React, { useState, useEffect } from "react";
import MenuFilter from "../../comps/Menu";
import Banner from "../../comps/Banner";
import NavBarVolunteer from "../../comps/NavBarVolunteer";
import VolunteerPost from "../../comps/VolunteerPost";
import Footer from "../../comps/Footer";
import HPtext from "../../comps/HPtext";
import axios from "axios";
import data from "../../sample.json";



export default function Home() {
  const [users, setUsers] = useState([]);
  const HandleGetUsers = async () => {
    var volunteerInfo = data.users;
    console.log(users);
    setUsers([...volunteerInfo]);
  };

  useEffect(() => {
    HandleGetUsers();
  }, []);

  return (
    <div className="home">
      <div className="Banner">
        <Banner />
      </div>
      <div className="nav">
        <NavBarVolunteer></NavBarVolunteer>
      </div>

      <div className="FilterNListings">
        <div className="menu">
          <MenuFilter />
        </div>
        <div className="volunteerListings">
          <div className="HPtext">
            <HPtext></HPtext>
          </div>
          {users.map((o, i) => {
            return (
          <VolunteerPost 
             key={i}
             // title={position}
             desc={o.description}
             organization={o.name}
             //commit={o.commitmentPeriod} info for this is in the other users array
             location={o.district}
             //position={o.position} info for this is in the other users array
          />
          );
              })}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
