import React from 'react';
import classes from './profileInfo.module.css'


const ProfileInfo = () => {
return(
    <div>
        <img className={classes.profileImg} src='https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80'/>
        <div className={classes.descrBlock}>ava + describtion</div>
    </div>
)
}

export default ProfileInfo;