import React from 'react';
import Signup from '../comps/Signup';
import Button from '../comps/Button';


export default {
    title: 'Pooneh/Signup',
    Component: Signup
};
export const VolunteerSignup = () => <Signup text="Do You Want to Volunteer?" par="One-stop shop for volunteering. Volunteers can find and apply for multiple volunteer opportunities in one place.">

</Signup>;

export const OrgSignup = () => <Signup
  text="Are You an Organization?" par="Start with your local volunteer centre. They offer a lot of resources including up to date listings of volunteer opportunities." bgColor="#2DC117" ></Signup>;






