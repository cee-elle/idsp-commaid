import React from 'react';
import Button from '../comps/Button';

export default {
    title: 'Aria/Button',
    Component: Button
};
export const PostsButton = () => <Button text="View Active Posts" style={{backgroundColor: "#453F3F"}}/>;
export const NewPostsButton = () => <Button text="Add New Post +" style={{backgroundColor: "#7480FF"}} />;
export const ImgChangeButton = () => <Button text="Change Image" style={{backgroundColor: "#EDEDED"}} color="black"/>;
export const GoogleButton = () => <Button text="Login with Google" style={{backgroundColor: "#3478F6"}} img= "https://freeiconshop.com/wp-content/uploads/edd/google-flat.png" />;
export const FacebookButton = () => <Button text="Login with Facebook" style={{backgroundColor: "#425993"}} img= "https://www.freeiconspng.com/uploads/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png--32.png" />;
export const UndoButton = () => <Button text="Change Image" color="black" style={{borderRadius: "30px"}}/>;
export const ClearButton = () => <Button text="Clear Hours" style={{borderRadius: "30px"}} highlight={true}/>;



