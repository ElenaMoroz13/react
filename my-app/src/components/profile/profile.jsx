import React from 'react';
import classes from './profile.module.css'
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './profile info/profileInfo';

const Profile = (props) => {

    
return(
    <div className={classes.profileContent}>
        <ProfileInfo />
        <MyPosts posts={props.state.posts}/>
    </div>
)
}


export default Profile;