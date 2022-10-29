import React from 'react';
import classes from './profile.module.css'
import myPosts from './myPosts/myPosts';

const Profile = () => {
return(
    <div className={classes.content}>
        <img src='https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg'/>
        <div>ava + describtion</div>
        <myPosts />
      </div>
)
}

export default Profile;