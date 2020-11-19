import { db, auth, fileStorage } from './firebase';

//Login
export function login(email, password) {
	return auth.signInWithEmailAndPassword(email, password);
}

export function addVolunteerUser(obj) {
	auth
		.createUserWithEmailAndPassword(obj.email, obj.password)
		.then((data) =>
			{obj.uid = data.user.uid;
				obj.organization = false;
			db.collection('users').add(obj)}
		)
		.catch((error) => console.log(error.message));
}

//Sign Up an Organization
export function addOrganization(obj) {
	auth
	.createUserWithEmailAndPassword(obj.email, obj.password)
	.then((data) =>
		{obj.uid = data.user.uid;
			obj.organization = true;
		db.collection('users').add(obj)}
	)
	.catch((error) => console.log(error.message));
}