import React, { useState, useEffect } from 'react';
import LandingPageNav from '../../comps/LandingPageNav';
import ReturnPage from '../../comps/ReturnPage';
import Inputbox from '../../comps/Inputbox';
import PageHeaders from '../../comps/PageHeaders';
import Footer from '../../comps/Footer';
import Menu2 from '../../comps/Menu2';
import Button2 from '../../comps/Button2';
import Link from 'next/link';
import {useRouter} from 'next/router'
import {addVolunteerUser} from '../../firebase/functions';

export default function Home() {
	const [ name, setName ] = useState('');
	const [ lastname, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	async function HandleVolSignup() {
    const obj = { name, lastname, password, email };
	
	try {
		  await addVolunteerUser(obj);

		  console.log("Success")
    }
    catch (error) {
		console.log(error.message)
    }

		
	}


	return (
		<div className="main">
			<LandingPageNav />
			<br />
			<br />
			<br />
			<Link href="/LandingPage">
				<div className="return">
					<ReturnPage />
				</div>
			</Link>
			<div className="title">
				<PageHeaders borderColor="lightgrey" color="black">
					Volunteer Signup
				</PageHeaders>
			</div>
			<br />
			<br />
			<form className="formContent">
				<br />
				<div className="InsideForm">
					<Inputbox
						width="800px"
						text="Name"
						placeholder="First Name"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<Inputbox
						text="Last Name"
						width="800px"
						placeholder="Last Name"
						onChange={(e) => {
							setLastName(e.target.value);
						}}
					/>
					<Inputbox
						text="Email Address"
						width="800px"
						placeholder="Email"
						type="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<Inputbox
						text="Password"
						width="800px"
						placeholder="Enter Password"
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<Inputbox text="" width="800px" placeholder="Confirm Password" type="password" />
					<Menu2 width="30%" />
					<br />
					<br />
					<Link href="/VolunteerProfile">
						<div className="button">
							<Button2 onClick={HandleVolSignup} bgcolor="#7480FF" width="150px" type="submit">
								<p>Signup</p>
							</Button2>
						</div>
					</Link>
				</div>
			</form>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}
