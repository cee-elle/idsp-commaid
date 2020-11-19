import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <Link href ="/VolunteerListingPage">Volunteer Listing</Link>
      <Link href ="/VolunteerInformationPage">Volunteer Information</Link>
      <Link href ="/ApplicationForm">Application Form</Link>
      <Link href ="/LandingPage">Landing Page</Link> 
      <Link href ="/HourTracker">Hour Tracker</Link>
      <Link href ="/ActivePostsTable">Active Posts</Link>
      <Link href ="/VolunteerHoursTable">Volunteer Hours Table</Link>
      <Link href ="/VolunteerSavedTable">Saved listings Table</Link>
      <Link href ="/ApplicantsTable">Applicants Table</Link>
      <Link href ="/Login">Login</Link>
      <Link href ="/VolunteerProfile">Volunteer Profile</Link>
      <Link href ="/OrganizationProfile">Organization Profile</Link>
      <Link href ="/OrganizationProfileEdit">Organization Profile Edit</Link>

      <Link href ="/VolunteerSignup">Volunteer Sign Up</Link>



      <Link href ="/OrganizationSignup">Organization Sign Up</Link>

    </div>
  );
}
