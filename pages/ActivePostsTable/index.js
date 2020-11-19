import React, {useState, useEffect} from 'react';

import PageHeaders from "../../comps/PageHeaders";
import NavBar from "../../comps/NavBarOrganization";
import Footer from "../../comps/Footer";
import VolunteersTable from "../../comps/VolunteersTable";
import Button from "../../comps/Button";
import { useRouter } from "next/router";

import axios from 'axios';

import data from '../../sample.json';

export default function Home() {
  
  const [posts, setPosts] = useState([])
  const HandleGetPosts = async ()=>{
  //var hoursResponse = await axios.get("../../sample.json");

  // comment out after we add backend database
  var postsResponse = data.postings;

  console.log(postsResponse);
  // comment out after we add backend database
  setPosts([...postsResponse]);
  //setHours([...hoursResponse.data]);
  }

  useEffect(()=>{
    HandleGetPosts();
  }, []);

  const router = useRouter();
console.log(router);

  return (

      <div className="postMainCont">
      <NavBar nav1Src="./postLink.svg" nav2Src="./time2.svg" nav3Src="profile.svg"></NavBar>
      <div className="pageHeader">
        <PageHeaders color="black" borderColor="lightblue">
          Active Posts
        </PageHeaders>
      </div>
      <div className="postsContent">
      <div className="postContainerBox">
        <VolunteersTable className="VolunteersTable" rows={posts}></VolunteersTable>
        <div className="newPostBtn">
        <Button
         onClick={() => {
          router.push("/NewPost");
        }}
         text="Add New Post +" style={{backgroundColor: "#5887FF"}} />
        </div>
      </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>

  );
}
