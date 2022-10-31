import React from 'react';
import classes from './profile.module.css'
import MyPosts from './myPosts/myPosts';

const Profile = () => {
return(
    <div>
        <img src='https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'/>
        <div>ava + describtion</div>
        <MyPosts />
    </div>
)
}

export default Profile;